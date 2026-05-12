import ServicesHeroNew from "@/components/services/ServicesHeroNew";
import MainServicesAccordion from "@/components/services/MainServicesAccordion";
import ProcessList from "@/components/services/ProcessList";
import ContactCTA from "@/components/home/ContactCTA";

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      <ServicesHeroNew />
      <MainServicesAccordion />
      <ProcessList />
      <ContactCTA />
    </div>
  );
}
