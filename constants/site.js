export const siteConfig = {
  name: "MillC",
  description:
    "Premier luxury car dealership specializing in high-end vehicles from around the world.",
  url: "https://millcauto.com",
  contact: {
    phone: "0567-40-9093",
    fax: "0567-40-9093",
    whatsapp: "+81 567-40-9093",
    email: "millc22885@gmail.com",
    addresses: [
      {
        country: "United Kingdom",
        shortLabel: "Manchester, UK",
        lines: [
          "44 Peregrine Street",
          "Manchester, England",
          "United Kingdom M15 5PU",
        ],
      },
      {
        country: "Ireland",
        shortLabel: "Dublin, Ireland",
        lines: [
          "708 Bdg 8, Vantage West",
          "Central Park",
          "Dublin 18",
          "D18 WE88",
        ],
      },
      {
        country: "Australia",
        shortLabel: "Wellard, WA",
        lines: [
          "28 Portobello Parade",
          "Wellard 6170",
          "Western Australia",
        ],
      },
      {
        country: "Japan",
        shortLabel: "Aichi, Japan",
        lines: [
          "497-0034",
          "Aichi Ken, Ama Gun, Kanie Cho",
          "Honmachi 2-47",
        ],
      },
    ],
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

export function getPhoneTelHref(phone = siteConfig.contact.phone) {
  const digits = phone.replace(/\D/g, "");
  if (digits.startsWith("0")) {
    return `tel:+81${digits.slice(1)}`;
  }
  return `tel:+${digits}`;
}

export function getWhatsAppUrl(message) {
  const digits = siteConfig.contact.whatsapp.replace(/\D/g, "");
  const base = `https://wa.me/${digits}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
