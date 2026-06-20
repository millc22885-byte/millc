export const siteConfig = {
  name: "Mill Cauto",
  description:
    "Premier luxury car dealership specializing in high-end vehicles from around the world.",
  url: "https://millcauto.com",
  contact: {
    address: "123 Luxury Avenue, Tokyo, Japan 100-0001",
    phone: "+81 90-7313-7917",
    whatsapp: "+81 90-7313-7917",
    email: "info@millcauto.com",
    salesEmail: "sales@millcauto.com",
    hours: {
      weekday: "Monday - Friday: 9:00 AM - 7:00 PM",
      saturday: "Saturday: 10:00 AM - 6:00 PM",
      sunday: "Sunday: Closed",
    },
  },
  nav: [
    { labelKey: "home", href: "/" },
    { labelKey: "about", href: "/about" },
    { labelKey: "collection", href: "/collection" },
    { labelKey: "contact", href: "/contact" },
  ],
};

export function getWhatsAppUrl(message) {
  const digits = siteConfig.contact.whatsapp.replace(/\D/g, "");
  const base = `https://wa.me/${digits}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
