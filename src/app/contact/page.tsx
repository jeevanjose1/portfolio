import ContactHeroNew from "@/components/contact/ContactHeroNew";
import ContactOptions from "@/components/contact/ContactOptions";
import ContactFormNew from "@/components/contact/ContactFormNew";

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <ContactHeroNew />
      <ContactOptions />
      <ContactFormNew />
    </div>
  );
}
