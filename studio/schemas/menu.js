export default {
  name: "menu",
  title: "Menu",
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
              name: "link",
              title: "Link",
              type: "reference",
              to: [{ type: "page" }],
            },
            {
              name: "externalLink",
              title: "Link",
              type: "url",
            },
            {
              name: "title",
              title: "Title",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
};
