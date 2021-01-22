import React from "react";
import ContentViewer from "../components/ContentViewer";

import LottieGraphic from "../components/graphics/LottieGraphic";

import basic1 from "../lotties/basic/1.json";
import basic2 from "../lotties/basic/2.json";

import ContentBuilder from "../types/ContentBuilder";

const builder = new ContentBuilder();

builder.quote()`
양자역학을 완벽히 이해한 사람은 아무도 없다고 자신있게 말할 수 있습니다.

― Richard Feynmann (리처드 파인만)
`.paragraph()`
Quantum mechanics was born in the early decades of the 20th century. Numerous studies have been conducted, and the conclusions drawn from them have completely changed our view of the world. Theories of quantum mechanics sounded like pure nonsense, but they have proven to be true after many experiments. It was so unreal that one of the greatest scientists in the world - Albert Einstien did not admit quantum mechanics until he died.
Due to its irrationality, there are so many misconceptions around quantum mechanics. The purpose of this website is to clear those misunderstandings and to give relatively easy explanation of how quantum computing works.
`.paragraph(<LottieGraphic data={basic1} />)`
First of all, what is quantum mechanics? Well, it is the study of tiny things. I mean, really really tiny things, like atoms, electrons, and photons. In a small world, things behave differently than we used to know thus it is a separate study from Newton's classical mechanics.
So, how are they different? Let's see a famous thought experiment called Schrodinger's Cat.
`.paragraph(<LottieGraphic data={basic2} loop={false} />)`
Suppose we have a cat in a perfectly closed box. Inside the box, there is a poison gas bottle that opens automatically after 30 minutes with a 50% chance.  After an hour, we try to describe the cat\'s current state. What would we say? We would say, "The cat is currently dead or alive!".
This means that we assumed the cat is in one definite state, dead or alive. But quantum mechanics sees it differently, and would say, "The cat is currently both dead and alive, and its state is determined the moment we open the box."
`;

export default function BasicPage() {
  return (
    <ContentViewer
      title="1. 기본"
      description="This article will cover basic knowledge to understand how quantum computers work. What is quantum? How does a quantum computer differ from a classical one? By the end of this article, you will be able to answer these questions."
      content={builder.build()}
    />
  );
}
