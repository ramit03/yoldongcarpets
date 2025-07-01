import { defineField, defineType } from "sanity";

export const heroImage = defineType({
  name: "heroImage",
  title: "Hero Image",
  type: "document",
  fields: [
    defineField({
      name: "image",
      title: "Hero Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "desc",
      title: "Description",
      type: "string",
    }),
  ],
});
