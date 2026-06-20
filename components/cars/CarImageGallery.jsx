"use client";

import { useState } from "react";
import Image from "next/image";
import { Car } from "lucide-react";

export default function CarImageGallery({ images, alt }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const hasImages = images?.length > 0;
  const activeImage = hasImages ? images[activeIndex] : null;

  if (!hasImages) {
    return (
      <section className="relative h-96 md:h-[520px] bg-slate-200 flex items-center justify-center">
        <div className="text-center text-slate-500">
          <Car className="w-16 h-16 mx-auto mb-3 opacity-50" />
          <p className="text-sm">Photos coming soon</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-slate-900">
      <div className="relative h-72 sm:h-96 md:h-[520px]">
        <Image
          src={activeImage.url}
          alt={activeImage.alt ?? alt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {images.length > 1 && (
          <div className="absolute bottom-4 right-4 bg-black/60 text-white text-sm px-3 py-1 rounded-full">
            {activeIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {images.length > 1 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin">
            {images.map((image, index) => (
              <button
                key={image.url}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`relative shrink-0 w-24 h-16 sm:w-32 sm:h-20 rounded-lg overflow-hidden border-2 transition-all ${
                  index === activeIndex
                    ? "border-blue-500 ring-2 ring-blue-500/40"
                    : "border-transparent opacity-70 hover:opacity-100"
                }`}
                aria-label={`View photo ${index + 1}`}
              >
                <Image
                  src={image.url}
                  alt={image.alt ?? `${alt} photo ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="128px"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
