import React from "react";
import styled from "styled-components/macro";

import palette from "../palette";

import MainSphere from "../components/MainSphere";
import HighlightedText from "../components/HighlightedText";

const Container = styled.section`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextContainer = styled.div`
  width: 55%;
  z-index: 1;

  @media screen and (max-width: 830px) {
    width: 70%;
  }

  @media screen and (max-width: 590px) {
    width: 80%;
  }
`;

const MainText = styled.h2`
  margin: 0 0 3rem 0;

  font-weight: 400;
  font-size: 4rem;
  line-height: 5.3rem;

  @media screen and (max-width: 1100px) {
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }

  @media screen and (max-width: 830px) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 500px) {
    font-size: 1.6rem;
  }
`;

const SubText = styled.p`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 300;

  color: ${palette.grayText};

  @media screen and (max-width: 1100px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 425px) {
    font-size: 0.9rem;
  }
`;

export default function MainPage() {
  return (
    <Container>
      <TextContainer>
        <MainText>
          Explore the world of
          <br />
          <HighlightedText>Quantum Computing</HighlightedText>
        </MainText>
        <SubText>
          Quantum computing is great. But why is it? And how does it work? There
          are so many misconceptions about quantum computers or quantum
          mechanics itself - and we should know how they work to find out what
          is actual possibilities and limitations of quantum computers. Let's
          get into it.
        </SubText>
      </TextContainer>
      <MainSphere />
    </Container>
  );
}
