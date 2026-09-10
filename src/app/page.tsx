import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import DailyUpdates from "@/components/DailyUpdates";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Team from "@/components/Team";
import Sponsors from "@/components/Sponsors";
import Location from "@/components/Location";
import LiveAarti from "@/components/LiveAarti";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col bg-ivory">
        <Hero />
        <DailyUpdates />
        <Gallery />
        <About />
        <Team />
        <Sponsors />
        <Location />
        <LiveAarti />
      </main>
    </>
  );
}
