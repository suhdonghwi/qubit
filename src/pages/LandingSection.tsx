import React from "react";
import styled, { keyframes } from "styled-components/macro";

import palette from "../palette";

import MainSphere from "../components/MainSphere";
import GradientText from "../components/GradientText";

const Container = styled.section`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextContainer = styled.div`
  width: 50%;
  z-index: 1;

  @media screen and (max-width: 1400px) {
    width: 60%;
  }

  @media screen and (max-width: 1200px) {
    width: 70%;
  }

  @media screen and (max-width: 530px) {
    width: 80%;
  }
`;

const GraphicContainer = styled.div`
  height: 100%;
`;

const TextAppear = (from: string) => keyframes`
  0% {
    opacity: 0;
    transform: translateY(${from});
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const MainText = styled.h1`
  margin: 0 0 3rem 0;

  font-weight: 400;
  font-size: 4rem;

  animation: 0.7s ease-out 0s 1 ${TextAppear("-50px")};

  mark {
    font-weight: 500;
  }

  @media screen and (max-width: 1200px) {
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }

  @media screen and (max-width: 870px) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 530px) {
    font-size: 2rem;
  }
`;

const SubText = styled.p`
  margin: 0;
  font-size: 1.4rem;
  font-weight: 300;

  color: ${palette.grayText};
  animation: 1.2s ease-out 0s 1 ${TextAppear("40px")};

  @media screen and (max-width: 1200px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 530px) {
    font-size: 1rem;
  }
`;

export default function LandingSection() {
  return (
    <Container>
      <TextContainer>
        <MainText>
          이미 도착한 미래,
          <br />
          <GradientText>양자 컴퓨터</GradientText>
        </MainText>
        <SubText>
          양자 컴퓨터에 대해서 들어보신 적이 있나요? 양자 컴퓨터는 어떻게
          동작할까요? 세간에는 양자 컴퓨터와 양자역학에 대한 오해가 정말 많이
          퍼져있습니다. 그리고 우리가 양자 컴퓨터의 능력과 한계를 정확히 알기
          위해서는 양자 컴퓨터가 어떻게 동작하는지 알 필요가 있습니다. 한 번
          들어가봅시다.
        </SubText>
      </TextContainer>
      <GraphicContainer>
        <MainSphere />
      </GraphicContainer>
    </Container>
  );
}
