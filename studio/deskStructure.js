import React from "react";
import S from "@sanity/desk-tool/structure-builder";
import Emoji from "a11y-react-emoji";
const Information = () => <Emoji style={{ fontSize: "2rem" }} symbol="ℹ️" />;
const Menu = () => <Emoji style={{ fontSize: "2rem" }} symbol="🔗" />;

const url = "https://sands.vercel.app/";

const WebPreview = ({ document }) => {
  const { displayed } = document;
  if (displayed._type === "information") {
    const targetURL = url + `information/?preview=true`;
    return (
      <iframe src={targetURL} frameBorder={0} width="1280px" height="100%" />
    );
  } else if (displayed._type === "access") {
    const targetURL = url + `access/?preview=true`;
    return (
      <iframe src={targetURL} frameBorder={0} width="1280px" height="100%" />
    );
  } else if (displayed._type === "page") {
    const targetURL = url + displayed.slug.current + "/?preview=true";
    return (
      <iframe src={targetURL} frameBorder={0} width="1280px" height="100%" />
    );
  } else {
    const targetURL = url + `?preview=true`;
    return (
      <iframe src={targetURL} frameBorder={0} width="1280px" height="100%" />
    );
  }
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
        .title("Accommodation")
        .icon(Information)
        .child(
          S.document()
            .schemaType("accommodation")
            .documentId("accommodation")
            .title("Accommodation")
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
        .filter((listItem) => !["menu"].includes(listItem.getId()))
        .filter((listItem) => !["accommodation"].includes(listItem.getId()))
        .filter((listItem) => !["information"].includes(listItem.getId())),
    ]);
export const getDefaultDocumentNode = ({ schemaType }) => {
  // Conditionally return a different configuration based on the schema type
  return S.document().views([
    S.view.form(),
    S.view.component(WebPreview).title("Web Preview"),
  ]);
};
