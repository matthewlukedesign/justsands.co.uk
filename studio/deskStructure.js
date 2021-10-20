import React from "react";
import S from "@sanity/desk-tool/structure-builder";
import Emoji from "a11y-react-emoji";
const Information = () => <Emoji style={{ fontSize: "2rem" }} symbol="ℹ️" />;
const Menu = () => <Emoji style={{ fontSize: "2rem" }} symbol="🔗" />;

const url = "https://justsands.vercel.app/";

const WebPreview = ({ document }) => {
  const { displayed } = document;

  const targetURL = url + `?preview=true`;
  return (
    <iframe src={targetURL} frameBorder={0} width="1280px" height="100%" />
  );
};

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Information")
        .icon(Information)
        .child(
          S.document()
            .schemaType("information")
            .documentId("information")
            .title("Information")
            .views([
              S.view.form(),
              S.view.component(WebPreview).title("Web Preview"),
            ])
        ),
      S.listItem()
        .title("Menu")
        .icon(Menu)
        .child(
          S.document()
            .schemaType("menu")
            .documentId("menu")
            .title("Menu")
            .views([
              S.view.form(),
              S.view.component(WebPreview).title("Web Preview"),
            ])
        ),

      ...S.documentTypeListItems()
        .filter((listItem) => !["information"].includes(listItem.getId()))
        .filter((listItem) => !["menu"].includes(listItem.getId())),
    ]);
export const getDefaultDocumentNode = ({ schemaType }) => {
  // Conditionally return a different configuration based on the schema type
  return S.document().views([
    S.view.form(),
    S.view.component(WebPreview).title("Web Preview"),
  ]);
};
