import React from "react";
import styled from "styled-components/macro";
import logo from "../logo.svg";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  height: 48px;
`;

const LogoText = styled.h1`
  color: white;
  margin: 0 0 5px 13px;

  font-weight: 500;
  font-size: 1.7rem;
`;

export default function Logo() {
  return (
    <Container>
      <LogoImage src={logo} />
      <LogoText>Qubit</LogoText>
    </Container>
  );
}
