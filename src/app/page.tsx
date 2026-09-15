import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import DailyUpdates from "@/components/DailyUpdates";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Schedule from "@/components/Schedule";
import Team from "@/components/Team";
import Sponsors from "@/components/Sponsors";
import Location from "@/components/Location";
import LiveAarti from "@/components/LiveAarti";

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Ganeshotsav 2026 — Sarvajanik Shri Ganesh Utsav Mandal",
  description:
    "49th year of Ganeshotsav celebrations at Sarvajanik Shri Ganesh Utsav Mandal, Angol, Belgaum.",
  startDate: "2026-09-14",
  endDate: "2026-09-25",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  image: [
    "https://belgaumbhagyavidhata.com/daily-updates/day-1/sthapana.jpg",
    "https://belgaumbhagyavidhata.com/gallery/gallery-01.jpeg",
  ],
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    url: "https://belgaumbhagyavidhata.com",
    validFrom: "2026-09-14",
  },
  location: {
    "@type": "Place",
    name: "Sarvajanik Shri Ganesh Utsav Mandal",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1st Cross Road, Bhagya Nagar, Angol",
      addressLocality: "Belagavi",
      addressRegion: "Karnataka",
      postalCode: "590006",
      addressCountry: "IN",
    },
  },
  organizer: {
    "@type": "Organization",
    name: "Sarvajanik Shri Ganesh Utsav Mandal",
    url: "https://belgaumbhagyavidhata.com",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
      />
      <SiteHeader />
      <main className="flex flex-1 flex-col bg-ivory">
        <Hero />
        <DailyUpdates />
        <Gallery />
        <About />
        <Schedule />
        <Team />
        <Sponsors />
        <Location />
        <LiveAarti />
      </main>
    </>
  );
}
