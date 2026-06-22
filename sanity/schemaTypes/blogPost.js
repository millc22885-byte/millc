import { defineField, defineType } from "sanity";

export const blogPost = defineType({
  name: "blogPost",
  title: "Blog Post",
  type: "document",
  groups: [
    { name: "content", title: "Content", default: true },
    { name: "meta", title: "Meta" },
    { name: "media", title: "Media" },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Title (English)",
      type: "string",
      group: "content",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "titleJa",
      title: "Title (Japanese)",
      type: "string",
      group: "content",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "meta",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt (English)",
      type: "text",
      rows: 3,
      group: "content",
      validation: (rule) => rule.required().max(300),
    }),
    defineField({
      name: "excerptJa",
      title: "Excerpt (Japanese)",
      type: "text",
      rows: 3,
      group: "content",
    }),
    defineField({
      name: "body",
      title: "Body (English)",
      type: "blockContent",
      group: "content",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "bodyJa",
      title: "Body (Japanese)",
      type: "blockContent",
      group: "content",
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      group: "media",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt text",
          type: "string",
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "string",
      group: "meta",
      initialValue: "MillC",
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      group: "meta",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "featured",
      title: "Featured on blog page",
      type: "boolean",
      group: "meta",
      initialValue: false,
    }),
  ],
  orderings: [
    {
      title: "Published Date, New",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "author",
      media: "coverImage",
    },
  },
});
