import WorksHeroNew from "@/components/works/WorksHeroNew";
import ProjectDisplayNew from "@/components/works/ProjectDisplayNew";
import ContactCTA from "@/components/home/ContactCTA";

export default function WorksPage() {
  return (
    <div className="flex flex-col">
      <WorksHeroNew />
      <ProjectDisplayNew />
      <ContactCTA />
    </div>
  );
}
