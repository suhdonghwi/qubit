import React, { useMemo, useRef, useState, useEffect } from "react";
import styled, { keyframes } from "styled-components/macro";

import Scene, { GraphicContent } from "../types/Scene";
import GraphicsViewer from "./GraphicsViewer";
import useViewerStore from "../stores/ViewerStore";
import Quote from "../types/Quote";

import StartFlag from "./graphics/StartFlag";
import { FaChevronDown } from "react-icons/fa";
import palette from "../palette";

import toc from "toc.json";

import { InView } from "react-intersection-observer";

const maxWidth = (x: number) =>
  `@media screen and (orientation: portrait) and (max-width: ${x}px), screen and (orientation: landscape) and (max-width: ${
    x * 2
  }px)`;

const maxHeight = (x: number) =>
  `@media screen and (orientation: portrait) and (max-height: ${
    x * 2
  }px), screen and (orientation: landscape) and (max-height: ${x}px)`;

const Container = styled.main`
  height: 100vh;

  display: flex;

  @media screen and (orientation: portrait) {
    flex-direction: column-reverse;
  }
`;

const Section = styled.section`
  width: 50vw;

  @media screen and (orientation: portrait) {
    height: 50vh;
    width: 100vw;
  }
`;

const TextSection = styled(Section)`
  position: relative;
  background-color: #212529;

  overflow-y: scroll;
`;

const TextContainer = styled.div`
  padding: 0 2.5rem 30% 2.5rem;

  ${maxWidth(520)} {
    padding: 0 1.5rem 30% 1.5rem;
  }
`;

const GraphicSection = styled(Section)`
  background-color: #101112;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Cover = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  height: 100vh;

  @media screen and (orientation: portrait) {
    height: 50vh;
  }

  ${maxHeight(550)} {
    margin: 3rem 0 4rem 0;
    height: auto;
  }
`;

const Chapter = styled.small`
  font-size: 1.5rem;
  color: #adb5bd;
  margin-bottom: 1rem;

  ${maxWidth(520)} {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  margin: 0;

  width: 100%;
  word-break: keep-all;
  text-align: center;

  ${maxWidth(520)} {
    font-size: 2.3rem;
  }
`;

const Description = styled.p`
  font-size: 1.3rem;
  margin: 2rem 0 0 0;

  color: #adb5bd;
  width: 80%;

  ${maxWidth(520)} {
    font-size: 1.1rem;
  }

  ${maxWidth(1000)} {
    width: 90%;
  }

  ${maxWidth(700)} {
    width: 100%;
  }
`;

const Blockquote = styled.blockquote`
  position: relative;
  font-family: "Nanum Myeongjo", serif;
  font-style: italic;

  font-size: 1.2rem;
  line-height: 2.2rem;
  margin: 7rem 0 0 0;

  small {
    font-size: 1rem;
    color: #adb5bd;
  }

  &:before {
    display: block;
    content: "“";
    position: absolute;
    font-size: 4rem;

    color: #868e96;
    left: -40px;
    top: -20px;

    ${maxWidth(700)} {
      left: -30px;
    }

    ${maxWidth(520)} {
      left: -20px;
    }
  }

  ${maxWidth(520)} {
    font-size: 1rem;

    small {
      font-size: 0.8rem;
    }
  }
`;

const Block = styled.div`
  overflow: auto;
  margin-bottom: 130px;

  ${maxWidth(520)} {
    margin-bottom: 100px;
  }

  color: #868e96;
  font-size: 1.3rem;
  transition: all 0.5s;

  ${maxWidth(520)} {
    font-size: 1.1rem;
    margin-bottom: 100px;
  }

  cite {
    color: #868e96;
    font-size: 1rem;
  }

  &.current {
    color: ${palette.whiteText};
  }
`;

const Bounce = keyframes`
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`;

const DownArrow = styled.span`
  position: absolute;
  font-size: 1.5rem;
  color: #adb5bd;

  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);

  animation: ${Bounce} 2s infinite;

  ${maxHeight(550)} {
    display: none;
  }
`;

interface ContentViewerProps {
  chapter: number;
  index: number;

  quote: Quote;

  scenes: Scene[];
}

export default function ContentViewer({
  chapter,
  index,
  scenes,
  quote,
}: ContentViewerProps) {
  const setIndex = useViewerStore((state) => state.setIndex);
  const graphics = useMemo(
    () =>
      [StartFlag as GraphicContent].concat(scenes.map((c) => c.graphicContent)),
    [scenes]
  );

  const textSectionRef = useRef<HTMLElement | null>(null);

  const [, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const chapterTitle = toc[chapter - 1].title;
  const title = toc[chapter - 1].content[index - 1].title;
  const description = toc[chapter - 1].content[index - 1].description;

  return (
    <Container>
      <TextSection ref={textSectionRef}>
        <DownArrow>
          <FaChevronDown />
        </DownArrow>

        <TextContainer>
          <Cover>
            <Chapter>
              0{chapter} {chapterTitle}
            </Chapter>
            <Title>
              {index}. {title}
            </Title>
            <Description>{description}</Description>
            <InView
              root={textSectionRef.current}
              rootMargin="-40% 0%"
              onChange={(inView) => inView && setIndex(0, 0)}
            >
              <Blockquote>
                {quote.eng}
                <br />
                {quote.kor}
                <br />
                <br />
                <small>― {quote.by}</small>
              </Blockquote>
            </InView>
          </Cover>

          {scenes.map((scene, sIndex) =>
            scene.textContent.map((paragraph, pIndex) => (
              <InView
                key={sIndex * 10 + pIndex}
                root={textSectionRef.current}
                rootMargin="-40% 0%"
                onChange={(inView) => inView && setIndex(sIndex + 1, pIndex)}
              >
                {({ inView, ref }) => (
                  <Block ref={ref} className={inView ? "current" : ""}>
                    {paragraph}
                  </Block>
                )}
              </InView>
            ))
          )}
        </TextContainer>
      </TextSection>

      <GraphicSection>
        <GraphicsViewer graphics={graphics} />
      </GraphicSection>
    </Container>
  );
}
