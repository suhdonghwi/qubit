import React from "react";
import styled from "styled-components/macro";

import Menu from "../components/Menu";

const Container = styled.section`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function MenuPage() {
  return (
    <Container>
      <Menu index={1} name="Basics" />
    </Container>
  );
}
