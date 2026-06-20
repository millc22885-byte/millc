"use client";

import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/lib/i18n/language-provider";
import { getWhatsAppUrl, siteConfig } from "@/constants/site";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

export default function ContactForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(t("thankYouMessage"));
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
      <div className="lg:col-span-1 space-y-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          {[
            {
              icon: MapPin,
              title: t("visitUs"),
              lines: siteConfig.contact.address.split(", "),
            },
            {
              icon: Phone,
              title: t("callUs"),
              lines: [siteConfig.contact.phone, t("weekdayHours")],
              href: `tel:${siteConfig.contact.phone.replace(/\s/g, "")}`,
            },
            {
              icon: WhatsAppIcon,
              title: t("whatsappUs"),
              lines: [siteConfig.contact.whatsapp, t("whatsappUsDesc")],
              href: getWhatsAppUrl(),
              external: true,
            },
            {
              icon: Mail,
              title: t("emailUs"),
              lines: [siteConfig.contact.email, siteConfig.contact.salesEmail],
            },
            {
              icon: Clock,
              title: t("businessHours"),
              lines: [t("hoursWeekday"), t("hoursSaturday"), t("hoursSunday")],
            },
          ].map(({ icon: Icon, title, lines, href, external }) => (
            <div key={title} className="flex items-start space-x-4 mb-6 last:mb-0">
              <div className="shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center shadow-md">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-display text-2xl mb-2 tracking-wide">{title}</h3>
                {href ? (
                  <a
                    href={href}
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="text-zinc-600 hover:text-blue-600 transition-colors"
                  >
                    {lines.map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < lines.length - 1 && <br />}
                      </span>
                    ))}
                  </a>
                ) : (
                  <p className="text-zinc-600">
                    {lines.map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < lines.length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:col-span-2">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="font-display text-4xl mb-6 tracking-wide">
            {t("sendUsMessage")}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-zinc-700 mb-2">
                {t("name")} *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder={t("namePlaceholder")}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-2">
                  {t("email")} *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-zinc-700 mb-2">
                  {t("phone")}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder={siteConfig.contact.phone}
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-zinc-700 mb-2">
                {t("message")} *
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                placeholder={t("messagePlaceholder")}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-4 rounded-md font-bold hover:from-blue-500 hover:to-blue-600 transition-colors flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
            >
              <span>{t("send")}</span>
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
