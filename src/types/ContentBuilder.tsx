import React from "react";
import Paragraph from "./Paragraph";

export default class ContentBuilder {
  private result: Paragraph[];

  constructor() {
    this.result = [];
  }

  public paragraph(graphicContent?: JSX.Element) {
    return (textContent: TemplateStringsArray) => {
      this.result.push({
        textContent: textContent[0]
          .split("\n")
          .filter((v) => v !== "")
          .map((t) => <p>{t}</p>),
        graphicContent,
      });

      return this;
    };
  }

  public quote(graphicContent?: JSX.Element) {
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
                  {"\n"}
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
