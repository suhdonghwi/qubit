import React from "react";
import styled from "styled-components/macro";

import palette from "../palette";

import MainBackground from "../components/MainBackground";

const Container = styled.section`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div``;

const TextContainer = styled.div``;

const MainText = styled.h2`
  font-weight: 400;
  font-size: 4rem;
`;

const HighlightedText = styled.span`
  font-weight: 600;

  background-image: ${palette.quantumGradient};
  color: transparent;
  -webkit-background-clip: text;

  background-clip: text;
`;

const SubText = styled.p`
  margin: 0;
  font-size: 1.7rem;

  color: ${palette.grayText};
`;

export default function MainPage() {
  return (
    <Container>
      <Box>
        <TextContainer>
          <MainText>
            Explore the world of
            <br />
            <HighlightedText>Quantum Computing</HighlightedText>
          </MainText>
          <SubText>
            Quantum computing is great. But why? We should know how it works and
            see what its possibilities and limitations are.
          </SubText>
        </TextContainer>
      </Box>
      <MainBackground />
    </Container>
  );
}
