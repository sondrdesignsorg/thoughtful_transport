import SitePage from "../components/SitePage";
import { pageMetadata } from "../seo";
import type { Metadata } from "next";
import { faqItems } from "../faq";

export const metadata: Metadata = pageMetadata({
  title: "Wheelchair Transportation Services on Oahu | Thoughtful Transport",
  description: "Scheduled, non-emergency wheelchair-accessible rides across Oahu — medical appointments, errands, and more. Door-to-door assistance, open 7 days a week.",
  path: "/services",
});

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://thoughtfultransport.net/services#service",
  name: "Wheelchair-accessible transportation services on Oahu",
  description: "Scheduled, non-emergency wheelchair-accessible transportation across Oahu, including medical appointments, dialysis and recurring care, hospital and care-home discharge, airport trips, errands and family outings.",
  serviceType: [
    "Wheelchair-accessible transportation",
    "Non-emergency medical transportation",
    "Medical appointment transportation",
    "Dialysis transportation",
    "Hospital discharge transportation",
    "Airport transportation",
  ],
  provider: { "@id": "https://thoughtfultransport.net/#business" },
  areaServed: { "@type": "AdministrativeArea", name: "Oahu, Hawaii" },
  url: "https://thoughtfultransport.net/services",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <SitePage page="services" />
    </>
  );
}
