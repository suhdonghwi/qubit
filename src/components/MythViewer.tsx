import React from "react";
import styled from "styled-components";

import { Myth } from "../types/MythBuilder";
import Navigation from "./Navigation";
import toc from "toc.json";
import NextPrev from "./NextPrev";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #212529;
`;

const Main = styled.main`
  width: 50%;

  padding: 4rem 0;

  @media screen and (max-width: 1400px) {
    width: 70%;
  }

  @media screen and (max-width: 900px) {
    width: 80%;
  }

  @media screen and (max-width: 450px) {
    width: 85%;
  }
`;

const Chapter = styled.small`
  font-size: 1.7rem;
  color: #adb5bd;

  @media screen and (max-width: 450px) {
    font-size: 1.3rem;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  margin: 0.5rem 0;

  @media screen and (max-width: 450px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  margin: 1.8rem 0 5rem 0;

  font-size: 1.3rem;
  color: #adb5bd;

  @media screen and (max-width: 450px) {
    font-size: 1rem;
  }
`;

const Block = styled.article`
  margin-bottom: 5rem;
`;

const MythTitle = styled.h2`
  font-size: 2.2rem;
  color: #e9ecef;
  word-break: keep-all;

  @media screen and (max-width: 450px) {
    font-size: 1.8rem;
  }
`;

const MythContent = styled.p`
  font-size: 1.3rem;
  color: #ced4da;

  @media screen and (max-width: 450px) {
    font-size: 1.1rem;
  }
`;

const NextPrevContainer = styled.div`
  margin-top: 8rem;
`;

interface MythViewerProps {
  chapter: number;
  index: number;

  myths: Myth[];
}

export default function MythViewer({ chapter, index, myths }: MythViewerProps) {
  const chapterTitle = toc[chapter - 1].title;
  const title = toc[chapter - 1].content[index - 1].title;
  const description = toc[chapter - 1].content[index - 1].description;

  return (
    <Container>
      <Main>
        <Navigation />
        <Chapter>
          0{chapter} {chapterTitle}
        </Chapter>
        <Title>
          {index}. {title}
        </Title>
        <Description>{description}</Description>

        {myths.map((myth, i) => (
          <Block key={i}>
            <MythTitle>오해 {myth.title}</MythTitle>
            {myth.content.map((p, j) => (
              <MythContent key={j}>{p}</MythContent>
            ))}
          </Block>
        ))}

        <NextPrevContainer>
          <NextPrev chapter={chapter} index={index} />
        </NextPrevContainer>
      </Main>
    </Container>
  );
}
