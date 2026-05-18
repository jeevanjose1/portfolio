import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import FAQStrip from "@/components/contact/FAQStrip";
import AvailabilityBanner from "@/components/contact/AvailabilityBanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Jeevan Jose | Let's Build Together",
  description:
    "Have a project in mind? Get in touch with me to discuss web development, mobile apps, or consulting. I'll respond within 24 hours.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <section id="contact-form" className="bg-section-alt pb-20 lg:pb-24 -mt-10 relative z-10 transition-colors duration-300">
        <div className="section-container">
          <div className="flex flex-col lg:flex-row gap-8 items-stretch">
            <div className="lg:w-[40%]">
              <ContactInfo />
            </div>
            <div className="lg:w-[60%]">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      <FAQStrip />
      <AvailabilityBanner />
    </>
  );
}
