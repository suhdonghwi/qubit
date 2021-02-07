import React from "react";
import ContentViewer from "../components/ContentViewer";

import ContentBuilder from "../types/ContentBuilder";

import SubatomicGraphic from "components/graphics/1/SubatomicGraphic";

const builder = new ContentBuilder();

builder.paragraph(SubatomicGraphic)``;

export default function Principle2Page() {
  return (
    <ContentViewer
      chapter={2}
      index={3}
      scenes={builder.build()}
      quote={{
        eng:
          "A computer is a stupid machine with the ability to do incredibly smart things.",
        kor: "컴퓨터는 놀랍도록 똑똑한 일을 할 수 있는 멍청한 기계이다.",
        by: "Bill Bryson (빌 브라이슨)",
      }}
    />
  );
}
