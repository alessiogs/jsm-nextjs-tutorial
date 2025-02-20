import { defineField, defineType } from "sanity"

export const startup = defineType({
  name: "startup",
  title: "Startup",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "number",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "description",
      type: "text",
    }),
    defineField({
      name: "image",
      type: "url",
    }),
    defineField({
      name: "category",
      type: "string",
    }),
    defineField({
      name: "views",
      type: "number",
    }),
    defineField({
      name: "author",
      type: "reference",
      to: { type: "author" },
    }),
  ],
})
