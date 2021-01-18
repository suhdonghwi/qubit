import React from "react";
import styled from "styled-components/macro";

const Container = styled.section`
  flex: 1;
  padding: 2.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  width: 70%;
`;

interface GraphicsViewerProps {
  content?: JSX.Element;
}

export default function GraphicsViewer({ content }: GraphicsViewerProps) {
  return (
    <Container>
      <Box>{content}</Box>
    </Container>
  );
}
