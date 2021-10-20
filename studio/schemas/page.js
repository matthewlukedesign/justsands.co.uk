import React from "react";
import Emoji from "a11y-react-emoji";
const Icon = () => <Emoji style={{ fontSize: "2rem" }} symbol="📃" />;
export default {
  name: "page",
  title: "Pages",
  type: "document",
  icon: Icon,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
    },
    {
      name: "content",
      title: "Content",
      type: "blockContent",
    },
  ],
};
