import React from "react";
import Scene from "./Scene";

export default class ContentBuilder {
  private result: Scene[];

  constructor() {
    this.result = [];
  }

  public paragraph(graphicContent: React.FunctionComponent) {
    return (textContent: TemplateStringsArray) => {
      const blocks = textContent[0].split("---").map((s) => s.trim());

      this.result.push({
        textContent: blocks.map((b) => (
          <React.Fragment>
            {b.split("\n\n").map((t) => (
              <p>{t}</p>
            ))}
          </React.Fragment>
        )),
        graphicContent,
      });

      return this;
    };
  }

  public quote(graphicContent: React.FunctionComponent) {
    return (textContent: TemplateStringsArray) => {
      this.result.push({
        textContent: [
          <blockquote>
            {textContent[0]
              .trim()
              .split("\n")
              .map((t, i) => (
                <React.Fragment key={i}>
                  {t}
                  <br />
                </React.Fragment>
              ))}
          </blockquote>,
        ],
        graphicContent,
      });

      return this;
    };
  }

  public build() {
    return this.result;
  }
}
