export default {
  name: "accommodation",
  title: "Accommodation",
  type: "document",
  fields: [
    {
      name: "links",
      title: "Links",
      type: "array",
      of: [
        {
          name: "link",
          title: "Link",
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "link",
              title: "Link",
              type: "url",
            },
          ],
        },
      ],
    },
  ],
};
