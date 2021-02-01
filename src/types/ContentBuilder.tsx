import React from "react";
import Scene from "./Scene";

import { GraphicContent } from "../types/Scene";

export default class ContentBuilder {
  private result: Scene[];

  constructor() {
    this.result = [];
  }

  public paragraph(graphicContent: GraphicContent, citation?: string) {
    return (textContent: TemplateStringsArray) => {
      const blocks = textContent[0].split("---").map((s) => s.trim());

      this.result.push({
        textContent: blocks.map((b) => (
          <React.Fragment>
            {b.split("\n\n").map((t, i) => (
              <p key={i}>{t}</p>
            ))}
            {citation && <cite>{citation}</cite>}
          </React.Fragment>
        )),
        graphicContent,
      });

      return this;
    };
  }

  public build() {
    return this.result;
  }
}
