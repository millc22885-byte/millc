import { PortableText as BasePortableText } from "@portabletext/react";
import SanityImage from "@/components/ui/SanityImage";
import { getImageUrl } from "@/lib/sanity/image";

const components = {
  block: {
    h2: ({ children }) => (
      <h2 className="font-display text-3xl tracking-wide text-slate-900 mt-10 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-display text-2xl tracking-wide text-slate-900 mt-8 mb-3">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="text-slate-700 leading-relaxed mb-4">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-600 pl-4 italic text-slate-600 my-6">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 mb-4 space-y-2 text-slate-700">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 mb-4 space-y-2 text-slate-700">{children}</ol>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const href = value?.href ?? "#";
      const external = href.startsWith("http");

      return (
        <a
          href={href}
          className="text-blue-600 hover:text-blue-500 underline"
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {children}
        </a>
      );
    },
  },
  types: {
    image: ({ value }) => {
      const url = getImageUrl(value, 1200);
      if (!url) return null;

      return (
        <figure className="my-8">
          <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-slate-100">
            <SanityImage
              src={url}
              alt={value.alt ?? ""}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
          {value.alt && (
            <figcaption className="text-sm text-slate-500 mt-2 text-center">
              {value.alt}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};

export default function PortableText({ value }) {
  if (!value?.length) {
    return null;
  }

  return <BasePortableText value={value} components={components} />;
}
