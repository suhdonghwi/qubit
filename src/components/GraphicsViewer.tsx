import React from "react";
import styled from "styled-components/macro";

import { Transition } from "react-spring/renderprops";

const Container = styled.section`
  position: relative;

  flex: 1;
  padding: 2.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  position: absolute;
  width: 70%;
`;

interface GraphicsViewerProps {
  content?: JSX.Element;
}

export default function GraphicsViewer({ content }: GraphicsViewerProps) {
  return (
    <Container>
      <Transition
        items={content}
        from={{ opacity: 0 }}
        enter={{ opacity: 1 }}
        leave={{ opacity: 0 }}
      >
        {(items) => (props) => <Box style={props}>{items}</Box>}
      </Transition>
    </Container>
  );
}
