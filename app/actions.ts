"use server";

export type InquiryState = {
  status: "idle" | "success" | "error";
  message: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const inquiryTopics = new Set([
  "General service question",
  "Accessibility and mobility",
  "Service area",
  "Rates and payment",
  "Business or care-facility partnership",
  "Something else",
]);
const contactPreferences = new Set(["Email", "Phone", "Either is fine"]);
const minimumFillTimeMs = 3000;

function readField(formData: FormData, name: string) {
  return String(formData.get(name) ?? "").trim();
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function submitInquiry(
  _previousState: InquiryState,
  formData: FormData,
): Promise<InquiryState> {
  const name = readField(formData, "name");
  const email = readField(formData, "email");
  const phone = readField(formData, "phone");
  const topic = readField(formData, "topic");
  const preferredContact = readField(formData, "preferredContact");
  const message = readField(formData, "message");
  const website = readField(formData, "website");
  const submittedAtRaw = readField(formData, "submittedAt");

  // Bots tend to fill this visually hidden field. Return success so they do not retry.
  if (website) {
    return { status: "success", message: "Mahalo — your inquiry has been sent." };
  }

  // Bots submit faster than a person can fill the form. Absent field means JS is
  // unavailable, so let it through and rely on edge rate limiting.
  if (submittedAtRaw) {
    const submittedAt = Number(submittedAtRaw);
    if (!Number.isFinite(submittedAt) || Date.now() - submittedAt < minimumFillTimeMs) {
      return { status: "success", message: "Mahalo — your inquiry has been sent." };
    }
  }

  if (!name || !email || !topic || !message) {
    return { status: "error", message: "Please complete all required fields." };
  }

  if (!inquiryTopics.has(topic) || (preferredContact && !contactPreferences.has(preferredContact))) {
    return { status: "error", message: "Please choose a valid inquiry topic and reply method." };
  }

  if (!emailPattern.test(email) || email.length > 254) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  if (name.length > 100 || phone.length > 40 || topic.length > 80 || message.length > 3000) {
    return { status: "error", message: "One or more fields are too long. Please shorten your message and try again." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const businessEmail = process.env.BUSINESS_EMAIL;
  const fromEmail = process.env.INQUIRY_FROM_EMAIL ?? "Thoughtful Transport Website <inquiries@send.thoughtfultransport.net>";

  const safe = {
    name: escapeHtml(name),
    email: escapeHtml(email),
    phone: escapeHtml(phone || "Not provided"),
    topic: escapeHtml(topic),
    preferredContact: escapeHtml(preferredContact || "No preference"),
    message: escapeHtml(message).replaceAll("\n", "<br />"),
  };

  const plainTextMessage = [
    "New website information inquiry (not a ride-booking request)",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || "Not provided"}`,
    `Preferred contact: ${preferredContact || "No preference"}`,
    `Topic: ${topic}`,
    "",
    "Question:",
    message,
  ].join("\n");

  try {
    if (!apiKey || !businessEmail) {
      console.error("Inquiry notification misconfigured: RESEND_API_KEY or BUSINESS_EMAIL missing");
      return {
        status: "error",
        message: "We could not send your inquiry right now. Please call (808) 220-1263 and we’ll be glad to help.",
      };
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [businessEmail],
        reply_to: email,
        subject: `Website information inquiry: ${topic}`,
        text: plainTextMessage,
        html: `
          <div style="font-family:Arial,sans-serif;max-width:640px;color:#1e332c;line-height:1.6">
            <h1 style="font-size:24px">New information inquiry</h1>
            <p><strong>Name:</strong> ${safe.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${safe.email}">${safe.email}</a></p>
            <p><strong>Phone:</strong> ${safe.phone}</p>
            <p><strong>Preferred contact:</strong> ${safe.preferredContact}</p>
            <p><strong>Topic:</strong> ${safe.topic}</p>
            <p><strong>Question:</strong><br />${safe.message}</p>
            <hr style="border:0;border-top:1px solid #d8e2de" />
            <p style="font-size:13px;color:#5c7770">Sent from the Thoughtful Transport website information form. This is not a ride-booking request.</p>
          </div>
        `,
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(10_000),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Resend inquiry notification failed", response.status, errorText);
      return {
        status: "error",
        message: "We could not send your inquiry right now. Please call (808) 220-1263 and we’ll be glad to help.",
      };
    }

    return {
      status: "success",
      message: "Mahalo — your inquiry has been sent. We’ll get back to you soon.",
    };
  } catch (error) {
    console.error("Inquiry notification failed", error);
    return {
      status: "error",
      message: "We could not send your inquiry right now. Please call (808) 220-1263 and we’ll be glad to help.",
    };
  }
}
