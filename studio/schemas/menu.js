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
          type: "reference",
          to: [{ type: "page" }],
        },
      ],
    },
  ],
};
