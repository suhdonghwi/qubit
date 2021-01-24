import React, { useState } from "react";
import styled from "styled-components/macro";

import Paragraph from "../types/Paragraph";
import GraphicsViewer from "./GraphicsViewer";

import palette from "../palette";

import { InView } from "react-intersection-observer";

const Container = styled.main`
  height: 100vh;

  display: flex;
`;

const HeadBox = styled.div`
  margin-bottom: 35%;
`;

const Title = styled.h1`
  font-size: 5rem;
  margin: 0;
`;

const Description = styled.p`
  font-size: 1.4rem;
  width: 42vw;
  padding: 0 0 0 1rem;

  color: #adb5bd;
`;

const Block = styled.div`
  overflow: auto;
  margin-bottom: 150px;

  color: #868e96;
  font-size: 1.3rem;
  transition: all 0.5s;

  p {
  }

  blockquote {
    font-size: 1.5rem;
    font-style: italic;

    padding: 2rem 0 2rem 2rem;
    border-left: 5px solid #868e96;

    transition: all 0.5s;

    margin: 0 0 0 1rem;
  }

  &.current {
    color: ${palette.whiteText};

    blockquote {
      border-color: ${palette.whiteText};
      color: ${palette.whiteText};
    }
  }
`;

const TextSection = styled.section`
  flex: 1;
  background-color: #343a40;

  padding: 2.5rem 2.5rem 10rem 2.5rem;
  
  overflow: scroll;
`;

interface ContentViewerProps {
  title: string;
  description: string;

  content: Paragraph[];
}

export default function ContentViewer({
  title,
  description,
  content,
}: ContentViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <Container>
      <TextSection>
        <HeadBox>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </HeadBox>

        {content.map((content, i) => (
          <InView
            rootMargin="-45% 0%"
            onChange={(inView) => inView && setCurrentIndex(i)}
          >
            {({ inView, ref }) => (
              <Block key={i} ref={ref} className={inView ? "current" : ""}>
                {content.textContent}
              </Block>
            )}
          </InView>
        ))}
      </TextSection>

      <GraphicsViewer content={content[currentIndex].graphicContent} />
    </Container>
  );
}
