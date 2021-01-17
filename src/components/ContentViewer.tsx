import React, { useState } from "react";
import styled from "styled-components/macro";

const Container = styled.main`
  height: 100vh;

  display: flex;
`;

const HeadBox = styled.div`
  position: absolute;
  top: 1rem;
  left: 2rem;
  margin: 0;

  transition: opacity 0.5s;

  &.hidden {
    opacity: 0;
  }
`;

const Title = styled.h1`
  font-size: 5rem;
  margin: 0;
`;

const Description = styled.small`
  font-size: 1.4rem;
  width: 42vw;
  margin: 0;

  color: #adb5bd;
`;

const TextParagraph = styled.p`
  font-size: 1.2rem;
`;

const TextSection = styled.section`
  flex: 1;
  background-color: #343a40;

  padding: 50vh 2.5rem 2.5rem 2.5rem;
  box-sizing: border-box;

  overflow: scroll;
`;

const GraphicSection = styled.section`
  flex: 1;
`;

interface Paragraph {
  textContent: string;
  graphicContent?: React.Component;
}

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

  function onScroll(e: React.UIEvent<HTMLElement, UIEvent>) {
    if ((e.target as any).scrollTop > 200) {
      setShowHead(false);
    } else {
      setShowHead(true);
    }
  }

  return (
    <Container>
      <TextSection onScroll={onScroll}>
        <HeadBox className={showHead ? "" : "hidden"}>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </HeadBox>

        {content.map((content, i) => (
          <TextParagraph key={i}>{content.textContent}</TextParagraph>
        ))}
      </TextSection>

      <GraphicSection />
    </Container>
  );
}
