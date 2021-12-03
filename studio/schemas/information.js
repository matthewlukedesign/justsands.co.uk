export default {
  name: "information",
  title: "Information",
  type: "document",
  fields: [
    {
      name: "background",
      title: "Background",
      type: "object",
      fields: [
        {
          name: "video",
          title: "Video",
          type: "mux.video",
        },
        {
          name: "image",
          title: "Image",
          type: "image",
        },
      ],
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      name: "location",
      title: "Location",
      type: "blockContent",
    },
    {
      name: "date",
      title: "Date",
      type: "object",
      fields: [
        {
          name: "from",
          title: "From",
          type: "date",
        },
        {
          name: "to",
          title: "To",
          type: "date",
        },
      ],
    },
    {
      name: "social",
      title: "Social",
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
              name: "url",
              title: "URL",
              type: "url",
            },
          ],
        },
      ],
    },
    {
      name: "ticketLink",
      title: "Ticket Link",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string",
        },
        {
          name: "url",
          title: "URL",
          type: "url",
        },
      ],
    },
    {
      name: "information",
      title: "Information",
      type: "array",
      of: [
        {
          name: "information",
          title: "Information",
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "content",
              title: "Content",
              type: "blockContent",
            },
          ],
        },
      ],
    },
  ],
};
