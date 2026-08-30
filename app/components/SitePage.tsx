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

const subtitleLines = [
  "Serving the entire island of Oahu",
  "Let's get you where you need to be - safely, comfortably, on time.",
  "Open every day, 7:00 am - 9:00 pm",
  "Wheelchair-accessible vehicle | Locally owned",
  "Our purpose is to help kupuna and those who need transport",
  "Get to destinations and appointments safely and on time",
  "We want our customers to enjoy life and independence",
  "With reliable transportation",
];

const services = [
  ["Medical appointments", "Doctor visits, specialists, imaging, therapy and follow-ups. We build in time so you arrive unhurried."],
  ["Dialysis & recurring care", "Standing weekly schedules with the same familiar driver, so treatment days become one less thing to arrange."],
  ["Hospital & care-home discharge", "Getting home, or moving between facilities, with careful handling and a calm pace at both ends of the trip."],
  ["Airport arrivals & departures", "Curb-to-terminal help with luggage and timing for visiting family, at Daniel K. Inouye International and inter-island gates."],
  ["Errands, church & family time", "Groceries, the salon, Sunday service, a birthday party at the beach park. Life is not only appointments."],
  ["Rates", "We quote your trip up front. Our prices are reasonable and fair, with no surprises."],
];

function Header({ current }: { current: PageName }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand" onClick={closeMenu}>Thoughtful Transport</Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => <Link key={item.page} href={item.href} className={current === item.page ? "active" : ""}>{item.label}</Link>)}
          <a className="call-button header-call" href="tel:+18082201263">Call {phone}</a>
        </nav>
        <button className="menu-button" type="button" aria-expanded={menuOpen} aria-label="Open page menu" onClick={() => setMenuOpen((open) => !open)}>
          <span /><span /><span />
        </button>
        {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">
          {navItems.map((item) => <Link key={item.page} href={item.href} onClick={closeMenu}>{item.label}</Link>)}
          <a className="call-button" href="tel:+18082201263" onClick={closeMenu}>Call {phone}</a>
        </nav>}
      </div>
    </header>
  );
}

function Footer() {
  return <footer className="site-footer"><div className="footer-grid">
    <div><p className="footer-brand">Thoughtful Transport</p><p>Locally owned, non-emergency wheelchair-accessible transportation serving the entire island of Oahu, Hawaii.</p></div>
    <div><p className="footer-label">Pages</p>{navItems.map((item) => <Link key={item.page} href={item.href}>{item.label}</Link>)}</div>
    <div><p className="footer-label">Get in touch</p><a href="tel:+18082201263">{phone}</a><span>Mon - Sun, 7:00 am - 9:00 pm</span><span>Credit, debit, cash & Venmo</span></div>
  </div><div className="copyright">Non-emergency medical transport on Oahu | Honolulu | Kaneohe | Kailua | Aiea | Pearl City | Waipahu | Ewa Beach | Kapolei | Mililani | Wahiawa<br /><br />Copyright Thoughtful Transport LLC. All rights reserved.</div></footer>;
}

function Home() {
  return <>
    <section className="video-hero">
      <video className="hero-video" autoPlay muted loop playsInline preload="auto" aria-hidden="true"><source src="/assets/backdrop_vid_V3.mp4" type="video/mp4" /></video>
      <div className="hero-content"><h1>Trusted non-emergency transportation across Oahu</h1><div className="hero-subtitles" aria-live="off">{subtitleLines.map((line, i) => <span key={line} style={{ animationDelay: `${i * 5}s` }}>{line}</span>)}</div><a className="call-button" href="tel:+18082201263">Call {phone}</a></div>
    </section>
    <section className="content-section"><div className="about-panel"><div><p className="eyebrow">About us</p><h2>Committed to compassionate medical transport</h2><div className="gold-line" /></div><div><p className="lede">We are a locally owned, family run company, and we understand the unique needs of wheelchair users. Safety, comfort and timeliness come first on every trip - because we would want the same for our own ohana.</p><p className="lede">Serving the entire island of Oahu, so our customers can enjoy their life and their independence - with rates that stay reasonable and fair.</p><Link className="text-link" href="/about">Read more about us</Link></div></div></section>
    <section className="content-section why-section"><h2 className="yellow-title">Why choose Thoughtful Transport</h2><p className="yellow-subtitle">Three things every family tells us matter most.</p><div className="card-grid three"><InfoCard title="Dedicated wheelchair vehicle" text="We operate a fully equipped wheelchair-accessible vehicle that makes every ride smooth and secure." /><InfoCard title="A driver who helps" text="Tyson can assist you into your wheelchair and offers compassionate, respectful help every step of the way." /><InfoCard title="Timely & reliable service" text="Our scheduling respects your appointment times and helps ensure prompt pick-ups and arrivals across Oahu." /></div></section>
    <section className="ready-section"><div><h2>Ready when you are</h2><p>Call us and talk to a real person, or send your trip details and we'll get right back to you.</p></div><div className="cta-row"><a className="call-button" href="tel:+18082201263">Call {phone}</a><Link className="outline-button" href="/contact">Request a ride</Link></div></section>
  </>;
}

function InfoCard({ title, text }: { title: string; text: string }) { return <article className="info-card"><h3>{title}</h3><p>{text}</p></article>; }

function Intro({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) { return <section className="page-intro"><div><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="lede">{text}</p></div></section>; }

function About() { return <><Intro eyebrow="About us" title="A local family, driving for your family" text="Thoughtful Transport LLC is a locally owned, family run company providing non-emergency, wheelchair-accessible transportation across the island of Oahu." /><section className="content-section about-details"><div className="info-card prose"><p>Thoughtful Transport is newly started, with a clear purpose: to help kupuna and anyone who needs extra accommodation get to their destinations and appointments safely and on time.</p><p>We want our customers to enjoy their life and their independence, and reliable transportation is a big part of that. We understand this community because it is ours.</p><p>Every ride is in a fully equipped wheelchair-accessible van. Tyson, our operations manager and driver, can assist you from the door you leave to the door you arrive at.</p></div><div className="business-card"><img src="/assets/business-card.png" alt="Thoughtful Transport LLC business card showing the wheelchair-accessible van and phone number" /></div></section><section className="content-section"><div className="card-grid three"><InfoCard title="Locally owned & family run" text="You reach the same small team every time you phone." /><InfoCard title="Meet Tyson" text="The person who answers, plans your trip, and drives it." /><InfoCard title="Hands-on help" text="Tyson can assist you into your wheelchair and sees you safely to the door." /></div></section><Callout text="We would be glad to talk story about your trip." /></>; }

function Services() { return <><Intro eyebrow="Services" title="Wheelchair-accessible rides for wherever the day takes you" text="Scheduled, non-emergency transportation across Oahu in a fully equipped wheelchair-accessible vehicle, with a driver trained to help door to door." /><section className="content-section"><div className="card-grid two">{services.map(([title, text]) => <InfoCard key={title} title={title} text={text} />)}</div></section><section className="content-section"><h2 className="section-title">How a ride works</h2><div className="card-grid three">{[["1", "Tell us the trip", "Call or send the form with the date, times and both addresses."], ["2", "We confirm the details", "Chair type, any help needed at the door, who to call when we arrive."], ["3", "We're there on the day", "On time, securely loaded, and with you until you're settled."]].map(([number, title, text]) => <article className="info-card step" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section><Callout text="Not sure if we cover your trip? Ask - we probably do." /></>; }

function Callout({ text }: { text: string }) { return <section className="content-section"><div className="callout"><p>{text}</p><a className="call-button" href="tel:+18082201263">Call {phone}</a></div></section>; }

function Contact() { const [sent, setSent] = useState(false); const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSent(true); }; return <><Intro eyebrow="Contact" title="Let's get you where you need to be" text="Call and talk with us directly, or send the details below and we'll get right back to you." /><section className="content-section contact-grid"><aside className="info-card contact-info"><p className="eyebrow">Phone</p><a className="phone-link" href="tel:+18082201263">{phone}</a><p className="eyebrow">Hours</p><p>Monday - Sunday<br />7:00 am - 9:00 pm</p><p className="eyebrow">Payment</p><p>Credit, debit, cash & Venmo</p><p className="eyebrow">Service area</p><p>The entire island of Oahu - from Honolulu to the North Shore.</p><p className="emergency">This is scheduled, non-emergency transportation. For an emergency, call 911.</p></aside>{sent ? <div className="form-card confirmation"><h2>Mahalo - we've got it.</h2><p>We'll call you back to confirm the details. If your ride is today, please phone us so we can move quickly.</p><a className="call-button" href="tel:+18082201263">Call {phone}</a></div> : <form className="form-card" onSubmit={submit}><h2>Request a ride</h2><div className="form-two"><Field label="Your name" name="name" required /><Field label="Phone number" name="phone" type="tel" required /></div><Field label="Pick-up address" name="pickup" /><Field label="Destination" name="destination" /><div className="form-two"><Field label="Date" name="date" type="date" /><Field label="Pick-up time" name="time" type="time" /></div><label>Anything else we should know<textarea name="notes" rows={4} /></label><button className="submit-button" type="submit">Send request</button></form>}</section></>; }

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) { return <label>{label}<input type={type} name={name} required={required} /></label>; }

export default function SitePage({ page }: { page: PageName }) { const content = page === "home" ? <Home /> : page === "about" ? <About /> : page === "services" ? <Services /> : <Contact />; return <div className={page === "home" ? "site home-site" : "site"}><Header current={page} /><main>{content}</main><Footer /></div>; }
