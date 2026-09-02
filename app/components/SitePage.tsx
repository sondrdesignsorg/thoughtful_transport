"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

type PageName = "home" | "about" | "services" | "contact";

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
      <button type="button" className="mobile-menu-toggle" aria-label="Open page menu" aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}><span /><span /><span /></button>
      <div className="desktop-nav-links">{navItems.map((item) => <Link key={item.page} href={item.href} className={current === item.page ? "active" : ""}>{item.label}</Link>)}</div>
      <a className="desktop-call-link" href="tel:+18082201263">Call {phone}</a>
      {menuOpen && <div className="mobile-menu-panel">{navItems.map((item) => <Link key={item.page} href={item.href} onClick={close}>{item.label}</Link>)}<a href="tel:+18082201263" onClick={close}>Call {phone}</a></div>}
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
    <section className="about-story section-shell"><div className="story-card responsive-card"><p className="lede">Thoughtful Transport is newly started, with a clear purpose: to help kupuna and anyone who needs extra accommodation get to their destinations and appointments safely and on time.</p><p className="lede spaced">We want our customers to enjoy their life and their independence, and reliable transportation is a big part of that. We understand this community because it is ours, and we strive to provide the service and care your loved ones and ohana deserve.</p><p className="lede spaced">Every ride is in a fully equipped wheelchair-accessible van. Tyson, our operations manager and driver, can assist you if you need help getting into your wheelchair — from the door you leave to the door you arrive at.</p></div><div className="photo-card" data-photo><img src="/assets/business-card.png" alt="Thoughtful Transport LLC business card showing the wheelchair-accessible van and phone number 808-220-1263" /></div></section>
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
    <section className="ride-steps section-shell"><h2 className="steps-heading responsive-card">How a ride works</h2><div className="steps-grid"><Step accent="gold" number="1" title="Tell us the trip">Call or send the form with the date, times and both addresses.</Step><Step accent="rose" number="2" title="We confirm the details">Chair type, any help needed at the door, who to call when we arrive.</Step><Step accent="sage" number="3" title="We&apos;re there on the day">On time, securely loaded, and with you until you&apos;re settled.</Step></div></section>
    <Callout>Not sure if we cover your trip? Ask — we probably do.</Callout>
  </>;
}

function Step({ accent, number, title, children }: { accent: string; number: string; title: string; children: React.ReactNode }) { return <div className={`step-card responsive-card ${accent}`}><p className="step-number">{number}</p><h3>{title}</h3><p>{children}</p></div>; }
function Callout({ children }: { children: React.ReactNode }) { return <section className="callout-section section-shell"><div className="callout-card responsive-card"><p>{children}</p><a className="cta" href="tel:+18082201263">Call {phone}</a></div></section>; }

function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSent(true); };
  return <><PageIntro eyebrow="Contact" title="Let's get you where you need to be" titleWidth="18ch" description="Call and talk with us directly, or request information below and we'll get right back to you." /><section className="contact-layout section-shell"><aside className="contact-card responsive-card"><h2>Phone</h2><p className="contact-phone"><a href="tel:+18082201263">{phone}</a></p><h2>Hours</h2><p className="contact-detail">Monday – Sunday<br />7:00 am – 9:00 pm</p><h2>Payment</h2><p className="contact-detail">Credit, debit, cash & Venmo</p><h2>Service area</h2><p className="service-area">The entire island of Oahu — Honolulu, Kalihi, Salt Lake, Aiea, Pearl City, Waipahu, Ewa Beach, Kapolei, Mililani, Wahiawa, Kaneohe, Kailua, Hawaii Kai, Waimanalo and the North Shore.</p><div className="emergency">This is scheduled, non-emergency transportation. For an emergency, call 911.</div></aside>{sent ? <div className="confirmation-card responsive-card"><h2>Mahalo — we&apos;ve got it.</h2><p>We&apos;ll contact you soon with the information you requested. If your ride is today, please phone us so we can move quickly.</p><a className="cta" href="tel:+18082201263">Call {phone}</a></div> : <RideForm onSubmit={submit} />}</section></>;
}

function RideForm({ onSubmit }: { onSubmit: (event: FormEvent<HTMLFormElement>) => void }) {
  return <form className="ride-form responsive-card" onSubmit={onSubmit}><h2>Request information</h2><div className="form-grid two"><Field label="Your name" name="name" autoComplete="name" required /><Field label="Phone number" name="phone" type="tel" autoComplete="tel" required /></div><Field label="Email address" name="email" type="email" autoComplete="email" required /><SelectField label="How you'd like to pay" name="payment" options={["Credit card", "Debit card", "Cash", "Venmo", "Insurance — please advise"]} /><div className="form-grid two"><Field label="Pick-up address" name="pickup" /><Field label="Destination" name="dropoff" /></div><div className="form-grid three"><Field label="Date" name="date" type="date" /><Field label="Pick-up time" name="time" type="time" /><SelectField label="Round trip?" name="roundtrip" options={["One way", "Round trip", "Not sure yet"]} /></div><SelectField label="Mobility needs" name="mobility" options={["Manual wheelchair", "Power wheelchair", "Walker or cane", "Ambulatory, needs assistance", "Other — I'll explain below"]} /><label>Anything else we should know<textarea name="notes" rows={4} /></label><div className="form-actions"><button type="submit">Send information request</button><span>Or call (808) 220-1263 — we answer.</span></div></form>;
}

function Field({ label, name, type = "text", autoComplete, required = false }: { label: string; name: string; type?: string; autoComplete?: string; required?: boolean }) { return <label>{label}{required ? " *" : ""}<input type={type} name={name} autoComplete={autoComplete} required={required} /></label>; }
function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) { return <label>{label}<select name={name}>{options.map((option) => <option key={option}>{option}</option>)}</select></label>; }

function Footer() {
  return <footer className="site-footer"><div className="footer-inner"><div><p className="footer-brand">Thoughtful Transport</p><p className="footer-description">Locally owned, non-emergency wheelchair-accessible transportation serving the entire island of Oahu, Hawaii.</p></div><div><p className="footer-label">Pages</p><div className="footer-links">{navItems.map((item) => <Link href={item.href} key={item.page}>{item.label}</Link>)}</div></div><div><p className="footer-label">Get in touch</p><div className="footer-links"><a href="tel:+18082201263">{phone}</a><span>Mon – Sun, 7:00 am – 9:00 pm</span><span>Accepts credit, debit, cash & Venmo</span></div></div></div><div className="footer-bottom"><p>Non-emergency medical transport on Oahu · Honolulu · Kaneohe · Kailua · Aiea · Pearl City · Waipahu · Ewa Beach · Kapolei · Mililani · Wahiawa</p><p>© Copyright Thoughtful Transport LLC. All rights reserved.</p></div></footer>;
}

export default function SitePage({ page }: { page: PageName }) {
  const content = page === "home" ? <Home /> : page === "about" ? <About /> : page === "services" ? <Services /> : <Contact />;
  return <>{page === "home" ? <video className="home-background-video" autoPlay muted loop playsInline preload="metadata" poster="/assets/backdrop-poster.jpg" aria-hidden="true"><source media="(max-width: 700px)" src="/assets/backdrop-mobile.mp4" type="video/mp4" /><source src="/assets/backdrop-desktop.mp4" type="video/mp4" /></video> : <img className="hibiscus" src="/assets/hibiscus.png" alt="" aria-hidden="true" />}<div className="site"><Header current={page} /><main>{content}</main><Footer /></div></>;
}
