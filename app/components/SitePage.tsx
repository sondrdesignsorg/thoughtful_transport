"use client";

import Link from "next/link";
import Image from "next/image";
import { useActionState, useState } from "react";
import { submitInquiry, type InquiryState } from "../actions";
import businessCard from "../../public/assets/business-card.png";
import hibiscus from "../../public/assets/hibiscus.png";

type PageName = "home" | "about" | "services" | "contact" | "privacy" | "terms" | "accessibility" | "security";

const phone = "(808) 220-1263";
const navItems: { label: string; href: string; page: PageName }[] = [
  { label: "Home", href: "/", page: "home" },
  { label: "About", href: "/about", page: "about" },
  { label: "Services", href: "/services", page: "services" },
  { label: "Contact", href: "/contact", page: "contact" },
];

const subtitles = [
  <>Serving the entire island of Oahu</>,
  <><em>Let&apos;s get you where you need to be — safely, comfortably, on time.</em></>,
  <>Open every day, 7:00 am – 9:00 pm</>,
  <>Wheelchair-accessible vehicle · Locally owned</>,
  <>Our purpose is to help kupuna and those who need transport</>,
  <>Get to destinations and appointments safely and on time</>,
  <>We want our customers to enjoy life and independence</>,
  <>With reliable transportation</>,
];

function Header({ current }: { current: PageName }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);
  return <header className="site-header"><div className="header-inner">
    <Link href="/" className="brand" onClick={close}><span>Thoughtful Transport</span></Link>
    <nav className="main-nav" aria-label="Main">
      <button type="button" className={`mobile-menu-toggle ${menuOpen ? "open" : ""}`} aria-label={menuOpen ? "Close page menu" : "Open page menu"} aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={() => setMenuOpen((open) => !open)}><span /><span /><span /></button>
      <div className="desktop-nav-links">{navItems.map((item) => <Link key={item.page} href={item.href} className={current === item.page ? "active" : ""} aria-current={current === item.page ? "page" : undefined}>{item.label}</Link>)}</div>
      <a className="desktop-call-link" href="tel:+18082201263">Call {phone}</a>
      {menuOpen && <div className="mobile-menu-panel" id="mobile-menu">{navItems.map((item) => <Link key={item.page} href={item.href} className={current === item.page ? "active" : ""} aria-current={current === item.page ? "page" : undefined} onClick={close}>{item.label}</Link>)}<a href="tel:+18082201263" onClick={close}>Call {phone}</a></div>}
    </nav>
  </div></header>;
}

function Home() {
  return <>
    <section className="home-hero"><h1 className="hero-headline">Trusted non-emergency transportation across Oahu</h1><div className="hero-subtitles" aria-live="off">{subtitles.map((line, index) => <span key={index}>{line}</span>)}</div><a className="cta primary-cta" href="tel:+18082201263">Call {phone}</a></section>
    <section className="home-about section-shell"><div className="home-about-card responsive-card"><div><p className="eyebrow">About us</p><h2>Committed to compassionate medical transport</h2><div className="gold-rule" /></div><div><p className="lede">We are a locally owned, family run company, and we understand the unique needs of wheelchair users. Safety, comfort and timeliness come first on every trip — because we would want the same for our own ohana.</p><p className="lede spaced">Serving the entire island of Oahu, so our customers can enjoy their life and their independence — with rates that stay reasonable and fair.</p><p className="read-more"><Link href="/about">Read more about us →</Link></p></div></div></section>
    <section className="home-why section-shell"><h2 className="video-section-title">Why choose Thoughtful Transport</h2><p className="video-section-subtitle">Three things every family tells us matter most.</p><div className="feature-grid"><FeatureCard accent="gold" title="Dedicated wheelchair vehicle">We operate a fully equipped wheelchair-accessible vehicle that guarantees safety and comfort, making every ride smooth and secure.</FeatureCard><FeatureCard accent="rose" title="A driver who helps">Tyson, our operations manager and driver, can assist you into your wheelchair and offers compassionate, respectful help every step of the way.</FeatureCard><FeatureCard accent="sage" title="Timely & reliable service">Our scheduling is designed to respect your appointment times and ensure prompt pick-ups and arrivals across Oahu.</FeatureCard></div></section>
    <section className="ready-band"><div className="ready-inner"><div><h2>Ready when you are</h2><p>Call us and talk to a real person, or request information and we&apos;ll get right back to you.</p></div><div className="button-row"><a className="cta" href="tel:+18082201263">Call {phone}</a><Link className="cta secondary-cta" href="/contact">Request information</Link></div></div></section>
  </>;
}

function FeatureCard({ accent, title, children }: { accent: "gold" | "rose" | "sage"; title: string; children: React.ReactNode }) { return <div className={`feature-card responsive-card ${accent}`}><h3>{title}</h3><p>{children}</p></div>; }
function PageIntro({ eyebrow, title, description, titleWidth }: { eyebrow: string; title: string; description: string; titleWidth: string }) { return <section className="page-intro section-shell"><div className="intro-card responsive-card"><p className="eyebrow">{eyebrow}</p><h1 style={{ maxWidth: titleWidth }}>{title}</h1><p className="intro-lede">{description}</p></div></section>; }

function About() {
  return <>
    <PageIntro eyebrow="About us" title="A local family, driving for your family" titleWidth="19ch" description="Thoughtful Transport LLC is a locally owned, family run company providing non-emergency, wheelchair-accessible transportation across the island of Oahu." />
    <section className="about-story section-shell"><div className="story-card responsive-card"><p className="lede">Thoughtful Transport is newly started, with a clear purpose: to help kupuna and anyone who needs extra accommodation get to their destinations and appointments safely and on time.</p><p className="lede spaced">We want our customers to enjoy their life and their independence, and reliable transportation is a big part of that. We understand this community because it is ours, and we strive to provide the service and care your loved ones and ohana deserve.</p><p className="lede spaced">Every ride is in a fully equipped wheelchair-accessible van. Tyson, our operations manager and driver, can assist you if you need help getting into your wheelchair — from the door you leave to the door you arrive at.</p></div><div className="photo-card" data-photo><Image src={businessCard} sizes="(max-width: 1040px) calc(100vw - 64px), 520px" alt="Thoughtful Transport LLC business card showing the wheelchair-accessible van and phone number 808-220-1263" /></div></section>
    <section className="about-values section-shell"><div className="value-grid"><ValueCard accent="rose" title="Locally owned & family run">Not a call center. You reach the same small team every time you phone.</ValueCard><ValueCard accent="gold" title="Meet Tyson">Our operations manager and driver — the person who answers, plans your trip, and drives it.</ValueCard><ValueCard accent="sage" title="Hands-on help">Tyson can assist you into your wheelchair and sees you safely to the door — not just the curb.</ValueCard></div></section>
    <Callout>We would be glad to talk story about your trip.</Callout>
  </>;
}

function ValueCard({ accent, title, children }: { accent: string; title: string; children: React.ReactNode }) { return <div className={`value-card responsive-card ${accent}`}><h2>{title}</h2><p>{children}</p></div>; }

const serviceCards = [
  ["Medical appointments", "Doctor visits, specialists, imaging, therapy and follow-ups — we build in time so you arrive unhurried and we wait or return as you prefer."],
  ["Dialysis & recurring care", "Standing weekly schedules with the same familiar driver, so treatment days become one less thing to arrange."],
  ["Hospital & care-home discharge", "Getting home, or moving between facilities, with careful handling and a calm pace at both ends of the trip."],
  ["Airport arrivals & departures", "Curb-to-terminal help with luggage and timing for visiting family, at Daniel K. Inouye International and inter-island gates."],
  ["Errands, church & family time", "Groceries, the salon, Sunday service, a birthday party at the beach park. Life is not only appointments."],
  ["Rates", "We charge a base price, with additional charges that may apply based on distance. Our prices are reasonable and fair, and we quote your trip up front — no surprises. Call (808) 220-1263 and we'll price it with you."],
];

function Services() {
  return <>
    <PageIntro eyebrow="Services" title="Wheelchair-accessible rides for wherever the day takes you" titleWidth="20ch" description="Scheduled, non-emergency transportation across Oahu in a fully equipped wheelchair-accessible vehicle, with a driver trained to help door to door." />
    <section className="services-grid section-shell">{serviceCards.map(([title, text], index) => <article className={`service-card responsive-card ${index === 5 ? "rates" : ""}`} key={title}><h2>{title}</h2><p>{text}</p></article>)}</section>
    <section className="ride-steps section-shell"><h2 className="steps-heading responsive-card">How a ride works</h2><div className="steps-grid"><Step accent="gold" number="1" title="Call to plan the trip">Tell us the date, times, addresses and what assistance you need.</Step><Step accent="rose" number="2" title="We confirm the details">Chair type, any help needed at the door, who to call when we arrive.</Step><Step accent="sage" number="3" title="We&apos;re there on the day">On time, securely loaded, and with you until you&apos;re settled.</Step></div></section>
    <Callout>Not sure if we cover your trip? Ask — we probably do.</Callout>
  </>;
}

function Step({ accent, number, title, children }: { accent: string; number: string; title: string; children: React.ReactNode }) { return <div className={`step-card responsive-card ${accent}`}><p className="step-number">{number}</p><h3>{title}</h3><p>{children}</p></div>; }
function Callout({ children }: { children: React.ReactNode }) { return <section className="callout-section section-shell"><div className="callout-card responsive-card"><p>{children}</p><a className="cta" href="tel:+18082201263">Call {phone}</a></div></section>; }

function Contact() {
  return <><PageIntro eyebrow="Contact" title="How can we help?" titleWidth="18ch" description="Use this form for general questions about our service, accessibility, coverage or pricing. To schedule a ride, please call us directly." /><section className="contact-layout section-shell"><aside className="contact-card responsive-card"><h2>Phone</h2><p className="contact-phone"><a href="tel:+18082201263">{phone}</a></p><p className="contact-help">Call to ask a question or arrange a ride with a real person.</p><h2>Hours</h2><p className="contact-detail">Monday – Sunday<br />7:00 am – 9:00 pm</p><h2>Payment</h2><p className="contact-detail">Credit, debit, cash & Venmo</p><h2>Service area</h2><p className="service-area">The entire island of Oahu — Honolulu, Kalihi, Salt Lake, Aiea, Pearl City, Waipahu, Ewa Beach, Kapolei, Mililani, Wahiawa, Kaneohe, Kailua, Hawaii Kai, Waimanalo and the North Shore.</p><div className="emergency">This is scheduled, non-emergency transportation. For an emergency, call 911.</div></aside><InquiryForm /></section></>;
}

const initialInquiryState: InquiryState = { status: "idle", message: "" };

function InquiryForm() {
  const [state, formAction, pending] = useActionState(submitInquiry, initialInquiryState);

  if (state.status === "success") {
    return <div className="confirmation-card responsive-card" role="status"><p className="eyebrow">Message sent</p><h2>Mahalo — we&apos;ve got it.</h2><p>{state.message}</p><p>Need to arrange a ride? Please call so we can confirm the details with you.</p><a className="cta" href="tel:+18082201263">Call {phone}</a></div>;
  }

  return <form className="inquiry-form responsive-card" action={formAction}><div><p className="eyebrow">General questions</p><h2>Request information</h2><p className="form-intro">Ask about service areas, accessibility, rates or how our transportation works.</p></div><div className="booking-notice"><strong>Looking to book a ride?</strong><span>Please call <a href="tel:+18082201263">{phone}</a>. Ride reservations are not accepted through this form.</span></div><div className="form-grid two"><Field label="Your name" name="name" autoComplete="name" required /><Field label="Email address" name="email" type="email" autoComplete="email" required /></div><div className="form-grid two"><Field label="Phone number" name="phone" type="tel" autoComplete="tel" /><SelectField label="How should we reply?" name="preferredContact" options={["Email", "Phone", "Either is fine"]} /></div><SelectField label="What can we help with?" name="topic" options={["General service question", "Accessibility and mobility", "Service area", "Rates and payment", "Business or care-facility partnership", "Something else"]} required /><label>Your question *<textarea name="message" rows={6} maxLength={3000} placeholder="Tell us what information would be helpful." required /></label><div className="honeypot" aria-hidden="true"><label>Website<input name="website" type="text" tabIndex={-1} autoComplete="off" /></label></div>{state.status === "error" && <p className="form-status error" role="alert">{state.message}</p>}<p className="privacy-note">By submitting, you agree that we may use the information provided to respond to your inquiry. Do not include medical records, Social Security numbers, payment-card details, or other sensitive information. See our <Link href="/privacy">Privacy Policy</Link>.</p><div className="form-actions"><button type="submit" disabled={pending}>{pending ? "Sending…" : "Send information request"}</button><span>We usually reply as soon as we can during business hours.</span></div></form>;
}

function Field({ label, name, type = "text", autoComplete, required = false }: { label: string; name: string; type?: string; autoComplete?: string; required?: boolean }) { return <label>{label}{required ? " *" : ""}<input type={type} name={name} autoComplete={autoComplete} required={required} /></label>; }
function SelectField({ label, name, options, required = false }: { label: string; name: string; options: string[]; required?: boolean }) { return <label>{label}{required ? " *" : ""}<select name={name} required={required}>{options.map((option) => <option key={option}>{option}</option>)}</select></label>; }

function Footer() {
  return <footer className="site-footer"><div className="footer-inner"><div><p className="footer-brand">Thoughtful Transport</p><p className="footer-description">Locally owned, non-emergency wheelchair-accessible transportation serving the entire island of Oahu, Hawaii.</p></div><div><p className="footer-label">Pages</p><div className="footer-links">{navItems.map((item) => <Link href={item.href} key={item.page}>{item.label}</Link>)}</div></div><div><p className="footer-label">Policies & access</p><div className="footer-links"><Link href="/privacy">Privacy</Link><Link href="/terms">Website terms</Link><Link href="/accessibility">Accessibility</Link><Link href="/security">Security</Link></div></div><div><p className="footer-label">Get in touch</p><div className="footer-links"><a href="tel:+18082201263">{phone}</a><span>Mon – Sun, 7:00 am – 9:00 pm</span><span>Accepts credit, debit, cash & Venmo</span></div></div></div><div className="footer-bottom"><p>Non-emergency medical transport on Oahu · Honolulu · Kaneohe · Kailua · Aiea · Pearl City · Waipahu · Ewa Beach · Kapolei · Mililani · Wahiawa</p><p>© {new Date().getFullYear()} Thoughtful Transport LLC. All rights reserved.</p></div></footer>;
}

function LegalPage({ page }: { page: Exclude<PageName, "home" | "about" | "services" | "contact"> }) {
  const content = {
    privacy: {
      eyebrow: "Privacy",
      title: "Privacy Policy",
      intro: "Effective September 10, 2026. This policy explains how Thoughtful Transport LLC handles information submitted through this website.",
      sections: [
        ["Information we collect", "When you request information, we collect the details you choose to provide, such as your name, email address, phone number, preferred reply method, inquiry topic, and message. Our hosting and form-service providers may also process basic technical data, such as IP address, device or browser information, and request logs, to operate and secure the site."],
        ["How we use information", "We use inquiry information to respond to you, provide information about our services, maintain business records, prevent abuse, troubleshoot the website, and meet legal obligations. The web form is for general information requests only and is not a ride-booking channel."],
        ["Sensitive information", "Please do not submit medical records, diagnoses, insurance identifiers, Social Security numbers, payment-card details, or other sensitive information through this form. Call us to discuss transportation needs. This website and its inquiry form are not intended to create or maintain a medical record."],
        ["Service providers and disclosure", "We use service providers to host the site and deliver inquiry notifications. They process information on our behalf to provide those services. We may also disclose information when reasonably necessary to comply with law, protect rights or safety, or complete a business transaction. We do not sell personal information or use inquiry data for cross-context behavioral advertising."],
        ["Retention and security", "We retain information only for as long as reasonably necessary for the purposes described above, including business, legal, accounting, and security needs. We use reasonable administrative and technical safeguards, but no internet transmission or storage system can be guaranteed completely secure."],
        ["Your choices", "You may ask us to review, correct, or delete information you submitted, subject to legal and operational retention needs. Call (808) 220-1263 or use the information-inquiry form and choose “Something else.”"],
        ["Children and changes", "This website is intended for adults seeking transportation information and is not directed to children under 13. We may update this policy as our practices change; the effective date above shows the latest revision."],
        ["Contact", "For privacy questions, call Thoughtful Transport LLC at (808) 220-1263 or use the information-inquiry form. We serve Oahu, Hawaii."],
      ],
    },
    terms: {
      eyebrow: "Legal",
      title: "Website Terms of Use",
      intro: "Effective September 10, 2026. By using this website, you agree to these terms. If you do not agree, please do not use the site.",
      sections: [
        ["Information only—not a reservation", "This website provides general information about Thoughtful Transport LLC. Submitting the inquiry form does not reserve, schedule, confirm, modify, or cancel transportation. Call (808) 220-1263 to discuss a ride, and rely only on a direct confirmation from us."],
        ["Non-emergency service", "Thoughtful Transport provides scheduled, non-emergency transportation. Do not use this website or its inquiry form for emergencies or time-critical requests. Call 911 in an emergency."],
        ["No medical advice", "Website content is not medical advice and does not create a patient-provider, healthcare, agency, or fiduciary relationship. Transportation availability, suitability, timing, assistance, service area, and price must be confirmed directly with us."],
        ["Accuracy and availability", "We work to keep website information accurate, but content may be incomplete, unavailable, or change without notice. To the extent permitted by law, the website is provided “as is” and without warranties regarding uninterrupted access or error-free operation."],
        ["Acceptable use", "Do not misuse the website, attempt unauthorized access, interfere with its operation, submit unlawful or harmful content, impersonate another person, or use automated means to abuse the inquiry form."],
        ["Intellectual property", "The website’s text, branding, design, photographs, and other original content belong to Thoughtful Transport LLC or their respective licensors and may not be copied or reused except as permitted by law."],
        ["Limitation and governing law", "To the extent permitted by applicable law, Thoughtful Transport LLC is not liable for indirect or consequential loss arising solely from use of, or inability to use, this website. These website terms are governed by the laws of the State of Hawaii, without limiting any non-waivable rights."],
        ["Contact and changes", "Questions about these terms may be directed to (808) 220-1263. We may update these terms, and continued use after an update means you accept the revised terms."],
      ],
    },
    accessibility: {
      eyebrow: "Access for everyone",
      title: "Accessibility Statement",
      intro: "Thoughtful Transport LLC is committed to making our website and transportation information usable by people with disabilities.",
      sections: [
        ["Our standard", "We aim to follow the Web Content Accessibility Guidelines (WCAG) 2.2 Level AA as our accessibility target. Accessibility is an ongoing effort, and a statement of intent is not a guarantee that every part of the site will be barrier-free in every technology."],
        ["Accessibility features", "The site supports keyboard navigation, visible focus indicators, semantic headings and landmarks, labeled form fields, text alternatives for meaningful images, reduced-motion preferences, responsive zoom and mobile layouts, and non-color error messages."],
        ["Need help or found a barrier?", "Call (808) 220-1263 for information in an alternative format or help using the site. You may also use the information-inquiry form, choose “Accessibility and mobility,” and describe the page, feature, assistive technology, browser, and problem. Please do not include medical or other sensitive information."],
        ["Response and compatibility", "We will make reasonable efforts to respond promptly and provide an accessible alternative while we investigate. The site is designed for current versions of major browsers and common assistive technologies; older or unsupported software may not provide the same experience."],
        ["Transportation accommodations", "For questions about wheelchair access or assistance during transportation, call us directly so we can discuss your needs. The website form does not schedule rides."],
      ],
    },
    security: {
      eyebrow: "Trust & safety",
      title: "Website Security",
      intro: "We use safeguards intended to protect this informational website and the limited personal information submitted through it.",
      sections: [
        ["What we protect", "The inquiry form is designed for general service questions and collects only the information needed to reply. Please do not send medical records, account credentials, government identifiers, payment-card details, or other sensitive data."],
        ["Safeguards", "The production site uses encrypted HTTPS connections, restrictive browser security headers, server-side input validation, output escaping, and a hidden anti-spam field. Access to hosting and notification services should be limited to authorized personnel. No system can be guaranteed completely secure."],
        ["Responsible disclosure", "If you believe you found a security issue, do not access, alter, retain, or disclose other people’s data; do not disrupt the service; and do not use automated testing that could affect availability. Call (808) 220-1263 or use the inquiry form with the topic “Something else.” Include a concise description and a safe way to contact you."],
        ["What to expect", "We will review good-faith reports and respond when contact information is provided. This page does not create a bug-bounty program, promise payment, or authorize activity that would otherwise be unlawful."],
      ],
    },
  }[page];

  return <><PageIntro eyebrow={content.eyebrow} title={content.title} titleWidth="22ch" description={content.intro} /><section className="legal-content section-shell responsive-card">{content.sections.map(([heading, body]) => <section key={heading}><h2>{heading}</h2><p>{body}</p></section>)}<div className="legal-actions"><Link className="cta secondary-cta" href="/contact">Contact us</Link><a className="cta" href="tel:+18082201263">Call {phone}</a></div></section></>;
}

export default function SitePage({ page }: { page: PageName }) {
  const content = page === "home" ? <Home /> : page === "about" ? <About /> : page === "services" ? <Services /> : page === "contact" ? <Contact /> : <LegalPage page={page} />;
  return <>{page === "home" ? <video className="home-background-video" autoPlay muted loop playsInline preload="metadata" poster="/assets/backdrop-poster.jpg" aria-hidden="true"><source media="(max-width: 700px)" src="/assets/backdrop-mobile.mp4" type="video/mp4" /><source src="/assets/backdrop-desktop.mp4" type="video/mp4" /></video> : <Image className="hibiscus" src={hibiscus} sizes="(max-width: 700px) 74vw, 46vw" alt="" aria-hidden="true" priority />}<a className="skip-link" href="#main-content">Skip to main content</a><div className="site"><Header current={page} /><main id="main-content">{content}</main><Footer /></div></>;
}
