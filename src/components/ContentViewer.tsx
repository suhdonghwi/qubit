import React, { useMemo, useState } from "react";
import styled from "styled-components/macro";

import Scene from "../types/Scene";
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
  margin-bottom: 100px;

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
  background-color: #343a40;

  padding: 2.5rem 2.5rem 13rem 2.5rem;
  width: 50vw;

  overflow-y: scroll;
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
  const [sceneIndex, setSceneIndex] = useState(0);
  const [paragraphIndex, setParagraphIndex] = useState(0);

  const graphics = useMemo(() => scenes.map((c) => c.graphicContent), [scenes]);

  // TODO: REFACTOR THIS HORRIBLE PIECE OF CODE
  const [prev, setPrev] = useState<JSX.Element[] | null>(null);
  const renderedGraphics: JSX.Element[] = useMemo<JSX.Element[]>(() => {
    if (prev !== null) {
      const G = graphics[sceneIndex];
      prev[sceneIndex] = <G paragraphIndex={paragraphIndex} />;
      return prev;
    } else {
      const r = graphics.map((G) => <G paragraphIndex={paragraphIndex} />);
      setPrev(r);
      return r;
    }
    // eslint-disable-next-line
  }, [graphics, paragraphIndex]);

  return (
    <Container>
      <TextSection>
        <HeadBox>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </HeadBox>

        {scenes.map((scene, sIndex) =>
          scene.textContent.map((paragraph, pIndex) => (
            <InView
              key={sIndex * 10 + pIndex}
              rootMargin="-45% 0%"
              onChange={(inView) => {
                if (inView) {
                  setSceneIndex(sIndex);
                  setParagraphIndex(pIndex);
                }
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
      </TextSection>

      <GraphicsViewer
        renderedGraphics={renderedGraphics}
        sceneIndex={sceneIndex}
      />
    </Container>
  );
}
