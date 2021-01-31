import React, { useMemo, useRef, useState, useEffect } from "react";
import styled from "styled-components/macro";

import Scene from "../types/Scene";
import GraphicsViewer from "./GraphicsViewer";
import useViewerStore from "../stores/ViewerStore";
import Quote from "../types/Quote";

import palette from "../palette";

import { InView } from "react-intersection-observer";

const mobileQuery =
  "@media screen and (orientation: portrait) and (max-width: 520px), screen and (orientation: landscape) and (max-width: 1040px)";

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
  background-color: #343a40;

  overflow-y: scroll;
`;

const TextContainer = styled.div`
  height: 100%;
  padding: 0 2.5rem 0 2.5rem;

  ${mobileQuery} {
    padding: 0 1.5rem 0 1.5rem;
  }
`;

const GraphicSection = styled(Section)`
  background-color: #212529;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Cover = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin: 0;
  word-break: keep-all;

  ${mobileQuery} {
    font-size: 2.3rem;
  }
`;

const Description = styled.p`
  font-size: 1.3rem;
  padding: 0 0 0 1rem;
  margin: 2rem 0 5rem 0;

  color: #adb5bd;

  ${mobileQuery} {
    font-size: 1.1rem;
  }
`;

const Blockquote = styled.blockquote`
  position: relative;
  font-family: "Nanum Myeongjo", serif;
  font-style: italic;

  word-break: keep-all;

  font-size: 1.2rem;
  line-height: 2.2rem;

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
    left: -60px;
  }

`;

const Block = styled.div`
  overflow: auto;
  margin-bottom: 130px;

  ${mobileQuery} {
    margin-bottom: 100px;
  }

  color: #868e96;
  font-size: 1.3rem;
  transition: all 0.5s;

  ${mobileQuery} {
    font-size: 1.1rem;
    margin-bottom: 100px;
  }

  &.current {
    color: ${palette.whiteText};
  }
`;

interface ContentViewerProps {
  title: string;
  description: string;
  quote: Quote;

  scenes: Scene[];
}

export default function ContentViewer({
  title,
  description,
  scenes,
  quote,
}: ContentViewerProps) {
  const setIndex = useViewerStore((state) => state.setIndex);
  const graphics = useMemo(() => scenes.map((c) => c.graphicContent), [scenes]);

  const textSectionRef = useRef<HTMLElement | null>(null);

  const [, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Container>
      <TextSection ref={textSectionRef}>
        <TextContainer>
          <Cover>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <Blockquote>
              {quote.eng}
              <br />
              {quote.kor}
              <br />
              <br />
              <small>― {quote.by}</small>
            </Blockquote>
          </Cover>

          {scenes.map((scene, sIndex) =>
            scene.textContent.map((paragraph, pIndex) => (
              <InView
                key={sIndex * 10 + pIndex}
                root={textSectionRef.current}
                rootMargin="-40% 0%"
                onChange={(inView) => {
                  console.log(inView);
                  return inView && setIndex(sIndex, pIndex);
                }}
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
