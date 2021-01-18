import React from "react";
import ContentViewer from "../components/ContentViewer";

export default function BasicPage() {
  const content = [];

  for (let i = 0; i < 50; i++) {
    content.push({
      textContent: [
        "Quantum mechanics was born in the early decades of the 20th century. Numerous studies have been conducted, and the conclusions drawn from them have completely changed our view of the world. Theories of quantum mechanics sounded like pure nonsense, but they have proven to be true after many experiments. It was so unreal that one of the greatest scientists in the world - Albert Einstien did not admit quantum mechanics until he died.",
        "Due to its irrationality, there are so many misconceptions around quantum mechanics. The purpose of this website is to clear those misunderstandings and to give relatively easy explanation of how quantum computing works.",
      ],
    });
  }

  return (
    <ContentViewer
      title="1. Basics"
      description="This article will cover basic knowledge to understand how quantum computers work. What is quantum? How does a quantum computer differ from a classical one? By the end of this article, you will be able to answer these questions."
      content={content}
    />
  );
}
