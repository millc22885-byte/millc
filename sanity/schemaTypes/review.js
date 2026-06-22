import { defineField, defineType } from "sanity";

export const review = defineType({
  name: "review",
  title: "Review",
  type: "document",
  fields: [
    defineField({
      name: "authorName",
      title: "Author Name",
      type: "string",
      validation: (rule) => rule.required().max(80),
    }),
    defineField({
      name: "rating",
      title: "Rating",
      type: "number",
      validation: (rule) => rule.required().min(1).max(5).integer(),
      initialValue: 5,
    }),
    defineField({
      name: "content",
      title: "Review (English)",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required().max(1000),
    }),
    defineField({
      name: "contentJa",
      title: "Review (Japanese)",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Pending", value: "pending" },
          { title: "Approved", value: "approved" },
          { title: "Rejected", value: "rejected" },
        ],
        layout: "radio",
      },
      initialValue: "pending",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "featured",
      title: "Featured on homepage",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "submittedAt",
      title: "Submitted At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],
  orderings: [
    {
      title: "Submitted Date, New",
      name: "submittedAtDesc",
      by: [{ field: "submittedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "authorName",
      subtitle: "content",
      rating: "rating",
      status: "status",
    },
    prepare({ title, subtitle, rating, status }) {
      return {
        title: `${title} (${rating}/5)`,
        subtitle: `[${status}] ${subtitle}`,
      };
    },
  },
});
