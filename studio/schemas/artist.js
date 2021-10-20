import React from "react";
import Emoji from "a11y-react-emoji";
const Icon = () => <Emoji style={{ fontSize: "2rem" }} symbol="🎹" />;

export default {
  name: "artist",
  title: "Artists",
  type: "document",
  icon: Icon,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "tags",
      title: "Tags",
      type: "tags",
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "tags.0.label",
    },
  },
};
