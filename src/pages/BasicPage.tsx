import React from "react";
import ContentViewer from "../components/ContentViewer";

export default function BasicPage() {
  const content = [];

  for (let i = 0; i < 100; i++) {
    content.push({
      textContent:
        "Hello world my name is suhdonghwi well what is your name though??",
    });
  }

  return (
    <ContentViewer
      title="1. Basics"
      description="Base knowledge to understand how quantum computers work"
      content={content}
    />
  );
}
