import React from "react";
import styled from "styled-components/macro";

import MenuBox from "../components/MenuBox";

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
        <MenuBox />
      </MenuContainer>
    </Container>
  );
}
