import { defineField, defineType } from "sanity";

export const carpets = defineType({
  name: "carpets",
  title: "Carpets",
  type: "document",
  fields: [
    defineField({
      name: "carpet",
      title: "Carpet",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "image",
              title: "Image",
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
            defineField({
              name: "category",
              title: "Category",
              type: "string",
              options: {
                list: [
                  { title: "Tibetan", value: "tibetan" },
                  { title: "Custom", value: "custom" },
                ],
                layout: "radio",
              },
            }),
            defineField({
              name: "featured",
              title: "Featured?",
              type: "boolean",
              initialValue: false,
            }),
          ],
        },
      ],
    }),
  ],
});
