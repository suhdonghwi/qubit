import React from "react";
import styled from "styled-components/macro";

import Menu from "../components/Menu";
import HighlightedText from "../components/HighlightedText";

import menu1 from "../lottie/menu1.json";
import menu2 from "../lottie/menu2.json";
import menu3 from "../lottie/menu3.json";

const Container = styled.section`
  padding: 2rem 0 10rem 0;

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

const Title = styled(HighlightedText)`
  font-size: 4rem;
  margin: 0 0 5rem 0;

  @media screen and (max-width: 700px) {
    font-size: 3rem;
    margin-bottom: 3rem;
  }
`;

export default function MenuPage() {
  return (
    <Container>
      <Title as="h2">Contents</Title>
      <MenuContainer>
        <Menu index={1} name="Basics" data={menu1} />
        <Menu index={2} name="Principals" data={menu2} />
        <Menu index={3} name="Misconceptions" data={menu3} />
      </MenuContainer>
    </Container>
  );
}
