import React, { useMemo, useRef, useState, useEffect } from "react";
import styled from "styled-components/macro";

import Scene from "../types/Scene";
import GraphicsViewer from "./GraphicsViewer";
import useViewerStore from "../stores/ViewerStore";

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
  padding: 2.5rem 2.5rem 2.5rem 2.5rem;

  ${mobileQuery} {
    padding: 2.5rem 1.5rem 10vh 1.5rem;
  }
`;

const GraphicSection = styled(Section)`
  background-color: #212529;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeadBox = styled.div`
  margin-bottom: 25%;
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
  margin: 2rem 0 0 0;

  color: #adb5bd;

  ${mobileQuery} {
    font-size: 1.1rem;
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

  blockquote {
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

interface ContentViewerProps {
  title: string;
  description: string;

  scenes: Scene[];
}

export default function ContentViewer({
  title,
  description,
  scenes,
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
          <HeadBox>
            <Title>{title}</Title>
            <Description>{description}</Description>
          </HeadBox>

          {scenes.map((scene, sIndex) =>
            scene.textContent.map((paragraph, pIndex) => (
              <InView
                key={sIndex * 10 + pIndex}
                root={textSectionRef.current}
                rootMargin="-40% 0%"
                onChange={(inView) => inView && setIndex(sIndex, pIndex)}
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
