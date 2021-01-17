import React from "react";
import styled from "styled-components/macro";

import Menu from "../components/Menu";

import menu1 from "../lottie/menu1.json";
import menu2 from "../lottie/menu2.json";
import menu3 from "../lottie/menu3.json";

const Container = styled.section`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function MenuPage() {
  return (
    <Container>
      <Menu index={1} name="Basics" data={menu1} />
      <Menu index={2} name="Principals" data={menu2} />
      <Menu index={3} name="Misconceptions" data={menu3} />
    </Container>
  );
}
