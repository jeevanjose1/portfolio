import HomeHero from "@/components/home/HomeHero";
import SelectedWork from "@/components/home/SelectedWork";
import AboutStrip from "@/components/home/AboutStrip";
import ServicesStrip from "@/components/home/ServicesStrip";
import ContactCTA from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HomeHero />
      <SelectedWork />
      <AboutStrip />
      <ServicesStrip />
      <ContactCTA />
    </div>
  );
}
