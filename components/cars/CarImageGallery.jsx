"use client";

import { useEffect, useState } from "react";
import { Car } from "lucide-react";
import SanityImage from "@/components/ui/SanityImage";

export default function CarImageGallery({ images, alt }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const hasImages = images?.length > 0;

  useEffect(() => {
    if (!hasImages) return;
    images.forEach((image) => {
      const img = new window.Image();
      img.src = image.url;
    });
  }, [hasImages, images]);

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
      <div className="relative h-72 sm:h-96 md:h-[520px] overflow-hidden">
        {images.map((image, index) => (
          <SanityImage
            key={`${image.url}-${index}`}
            src={image.url}
            alt={image.alt ?? alt}
            fill
            className={`object-cover ${
              index === activeIndex ? "z-10 opacity-100" : "z-0 opacity-0"
            }`}
            priority={index === 0}
            loading={index === 0 ? undefined : "eager"}
            sizes="100vw"
          />
        ))}
        {images.length > 1 && (
          <div className="absolute bottom-4 right-4 z-20 bg-black/60 text-white text-sm px-3 py-1 rounded-full">
            {activeIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {images.length > 1 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin">
            {images.map((image, index) => (
              <button
                key={`${image.url}-${index}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`relative shrink-0 w-24 h-16 sm:w-32 sm:h-20 rounded-lg overflow-hidden border-2 transition-all ${
                  index === activeIndex
                    ? "border-blue-500 ring-2 ring-blue-500/40"
                    : "border-transparent opacity-70 hover:opacity-100"
                }`}
                aria-label={`View photo ${index + 1}`}
              >
                <SanityImage
                  src={image.thumbUrl ?? image.url}
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
