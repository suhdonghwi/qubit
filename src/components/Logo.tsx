import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import logo from "../logo.svg";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #f8f9fa;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  height: 35px;

  @media screen and (max-width: 500px) {
    height: 28px;
  }
`;

const LogoText = styled.h1`
  margin: 0 0 0 13px;

  font-weight: 400;
  font-size: 1.7rem;

  @media screen and (max-width: 500px) {
    font-size: 1.4rem;
    margin: 0 0 0 10px;
  }
`;

export default function Logo() {
  return (
    <StyledLink to="/">
      <Container>
        <LogoImage src={logo} />
        <LogoText>Qubit</LogoText>
      </Container>
    </StyledLink>
  );
}
