import createImageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "./client";

const builder = createImageUrlBuilder(sanityClient);

export function urlFor(source) {
  return builder.image(source);
}

export function getImageUrl(source, width = 1200) {
  if (!source) return null;
  return urlFor(source).width(width).auto("format").quality(85).url();
}
