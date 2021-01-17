import React from "react";
import styled from "styled-components/macro";

import Menu from "../components/Menu";

import menu1 from "../lottie/menu1.json";
import menu2 from "../lottie/menu2.json";

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
      <Menu index={2} name="Principal" data={menu2} />
    </Container>
  );
}
