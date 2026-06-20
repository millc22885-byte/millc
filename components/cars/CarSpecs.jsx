"use client";

import {
  Car,
  Cog,
  FileText,
  Ruler,
  Settings,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-provider";

const sectionIcons = {
  powertrain: Cog,
  vehicle: Car,
  registration: FileText,
  dimensions: Ruler,
};

export default function CarSpecs({ car }) {
  const { t } = useLanguage();

  const sections = [
    {
      key: "powertrain",
      title: t("powertrain"),
      items: [
        { key: "engine", value: car.engine },
        { key: "displacement", value: car.displacement },
        { key: "engineType", value: car.engineType },
        { key: "turbo", value: car.turbo },
        { key: "fuelType", value: car.fuelType },
        { key: "transmission", value: car.transmission },
        { key: "shift", value: car.shift },
        { key: "driveSystem", value: car.driveSystem },
        { key: "capacity", value: car.capacity },
      ],
    },
    {
      key: "vehicle",
      title: t("vehicleDetails"),
      items: [
        { key: "make", value: car.make },
        { key: "model", value: car.model },
        { key: "grade", value: car.grade },
        { key: "vehicleType", value: car.vehicleType },
        { key: "year", value: car.year },
        { key: "mileage", value: car.mileage != null ? `${car.mileage.toLocaleString()} km` : null },
        { key: "color", value: car.color },
        { key: "steeringWheel", value: car.steeringWheel },
        { key: "place", value: car.place },
      ],
    },
    {
      key: "registration",
      title: t("registrationDocuments"),
      items: [
        { key: "registrationYear", value: car.registrationYear },
        { key: "chassisNo", value: car.chassisNo },
        { key: "designationTypeNo", value: car.designationTypeNo },
        { key: "classificationNo", value: car.classificationNo },
        { key: "inspectionInfo", value: car.inspectionInfo },
        { key: "recyclingTicket", value: car.recyclingTicket },
        { key: "documentsDelivery", value: car.documentsDelivery },
      ],
    },
    {
      key: "dimensions",
      title: t("dimensions"),
      items: [
        { key: "length", value: car.length },
        { key: "width", value: car.width },
        { key: "height", value: car.height },
        { key: "vehicleWeight", value: car.vehicleWeight },
      ],
    },
  ];

  return (
    <div className="space-y-8">
      {sections.map((section) => {
        const visibleItems = section.items.filter((item) => item.value);
        if (visibleItems.length === 0) return null;

        const SectionIcon = sectionIcons[section.key] ?? Settings;

        return (
          <div
            key={section.key}
            className="bg-white rounded-lg shadow-md p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
                <SectionIcon className="w-5 h-5 text-white" />
              </div>
              <h2 className="font-display text-3xl tracking-wide">
                {section.title}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {visibleItems.map(({ key, value }) => (
                <div
                  key={key}
                  className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200"
                >
                  <div>
                    <p className="text-sm text-zinc-500 mb-1">{t(key)}</p>
                    <p className="font-semibold break-all">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
