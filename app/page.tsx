import SitePage from "./components/SitePage";
import { pageMetadata } from "./seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
  title: "Thoughtful Transport LLC | Wheelchair Transportation on Oahu, HI",
  description: "Trusted non-emergency, wheelchair-accessible transportation across Oahu. Locally owned and family run. Open daily 7am–9pm. Call (808) 220-1263.",
  path: "/",
});

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://thoughtfultransport.net/#business",
  name: "Thoughtful Transport LLC",
  description: "Locally owned, non-emergency wheelchair-accessible transportation serving the entire island of Oahu, Hawaii.",
  url: "https://thoughtfultransport.net",
  telephone: "+1-808-220-1263",
  image: "https://thoughtfultransport.net/assets/business-card.png",
  logo: "https://thoughtfultransport.net/icon.svg",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Honolulu",
    addressRegion: "HI",
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: 21.4389, longitude: -158.0001 },
  openingHoursSpecification: [{
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "07:00",
    closes: "21:00",
  }],
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Oahu, Hawaii",
  },
  paymentAccepted: "Cash, Credit Card, Debit Card, Venmo",
  priceRange: "$$",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Wheelchair-Accessible Transportation Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Medical appointment transportation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dialysis and recurring care transportation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hospital and care-home discharge transportation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Airport arrivals and departures" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Errands, church and family outings" } },
    ],
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <SitePage page="home" />
    </>
  );
}
