import React from "react";
import styled from "styled-components/macro";

import MenuBox from "../components/MenuBox";

import { QuantumComputerGraphic } from "../components/graphics/1";
import { CubeGraphic } from "../components/graphics/4";
import toc from "toc.json";

const Container = styled.section`
  padding: 4rem 0 12rem 0;

  @media screen and (max-width: 1100px) {
    padding-bottom: 7rem;
  }

  @media screen and (max-width: 425px) {
    padding-bottom: 5rem;
  }

  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const MenuContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: 65%;

  align-items: center;
  justify-content: center;

  @media screen and (max-width: 900px) {
    width: 80%;
  }

  @media screen and (max-width: 550px) {
    width: 90%;
  }
`;

export default function ContentSection() {
  return (
    <Container>
      <MenuContainer>
        <MenuBox
          num={1}
          title={toc[0].title}
          description="양자역학이 어떤 학문인지, 어떤 계기로 탄생하게 된 학문인지 알아봅니다. 그리고 양자 컴퓨터를 이해하기 위해서 필요한 최소한의 양자역학 개념들에 대해서 다룹니다."
          chapters={toc[0].content.map((c) => c.title)}
          graphic={<QuantumComputerGraphic />}
        />

        <MenuBox
          num={2}
          title={toc[1].title}
          description="양자역학의 원리를 기반으로 동작하는 양자 컴퓨터의 개념에 대해서 알아봅니다. 양자 컴퓨터의 실제 응용 원리에 대해서 다룹니다."
          chapters={toc[1].content.map((c) => c.title)}
          graphic={<CubeGraphic />}
        />
      </MenuContainer>
    </Container>
  );
}
