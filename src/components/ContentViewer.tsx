import React, { useState, useLayoutEffect, useRef } from "react";
import styled from "styled-components/macro";

import Paragraph from "../types/Paragraph";
import GraphicsViewer from "./GraphicsViewer";

import palette from "../palette";

const Container = styled.main`
  height: 100vh;

  display: flex;
`;

const HeadBox = styled.div`
  position: absolute;
  top: 1rem;
  left: 2.5rem;
  margin: 0;

  transition: opacity 0.3s;

  &.hidden {
    opacity: 0;
  }
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

  padding: 50vh 2.5rem 2.5rem 2.5rem;
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
  const [showHead, setShowHead] = useState(true);
  const [heightList, setHeightList] = useState<number[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const paragraphsRef = useRef<(HTMLParagraphElement | null)[]>([]);

  useLayoutEffect(() => {
    paragraphsRef.current = paragraphsRef.current.slice(0, content.length);

    function calculateHeightList() {
      console.log("recal");
      setHeightList(
        paragraphsRef.current.map((e: HTMLParagraphElement | null) =>
          e !== null ? e.offsetHeight : 0
        )
      );
    }

    calculateHeightList();
    console.log("what");

    window.addEventListener("resize", calculateHeightList);
    return () => {
      window.removeEventListener("resize", calculateHeightList);
    };
  }, [content]);

  function onScroll(e: React.UIEvent<HTMLElement, UIEvent>) {
    const scrollTop = (e.target as any).scrollTop;
    if (scrollTop > 100) {
      setShowHead(false);
    } else {
      setShowHead(true);
    }

    let i = 0,
      acc = 0;
    for (const height of heightList) {
      acc += height + 150;
      if (scrollTop + 200 < acc) {
        break;
      }
      i++;
    }

    setCurrentIndex(i);
  }

  return (
    <Container>
      <TextSection onScroll={onScroll}>
        <HeadBox className={showHead ? "" : "hidden"}>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </HeadBox>

        {content.map((content, i) => (
          <Block
            key={i}
            ref={(e: any) => (paragraphsRef.current[i] = e)}
            className={currentIndex === i ? "current" : ""}
          >
            {content.textContent}
          </Block>
        ))}
      </TextSection>

      <GraphicsViewer content={content[currentIndex].graphicContent} />
    </Container>
  );
}
