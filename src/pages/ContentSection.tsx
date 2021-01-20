import React from "react";
import styled from "styled-components/macro";

import Menu from "../components/Menu";
import GradientText from "../components/GradientText";

import menu1 from "../lotties/menu1.json";
import menu2 from "../lotties/menu2.json";
import menu3 from "../lotties/menu3.json";

const Container = styled.section`
  padding: 2rem 0 12rem 0;

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

  align-items: center;
  justify-content: center;
`;

const Title = styled(GradientText)`
  font-size: 4rem;
  margin: 0 0 5rem 0;

  @media screen and (max-width: 700px) {
    font-size: 3rem;
    margin-bottom: 3rem;
  }

  @media screen and (max-width: 530px) {
    font-size: 2.5rem;
    margin-bottom: 2.5rem;
  }

`;

export default function ContentSection() {
  return (
    <Container>
      <Title as="h2">컨텐츠</Title>
      <MenuContainer>
        <Menu index={1} name="기본" data={menu1} />
        <Menu index={2} name="원리" data={menu2} />
        <Menu index={3} name="오해" data={menu3} />
      </MenuContainer>
    </Container>
  );
}
