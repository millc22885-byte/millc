import { MapPin } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";
import ContactHeader from "@/components/contact/ContactHeader";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Mill Cauto to schedule a viewing or ask about our collection.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20">
      <ContactHeader />
      <section className="py-16 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>
      <section className="h-96 bg-zinc-200">
        <div className="w-full h-full flex items-center justify-center text-zinc-500">
          <MapPin className="w-12 h-12 mr-4" />
          <span className="text-lg">Map Integration Placeholder</span>
        </div>
      </section>
    </div>
  );
}
