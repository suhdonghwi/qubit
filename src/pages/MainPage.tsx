import React from "react";
import styled from "styled-components/macro";

import Logo from "../components/Logo";

import LandingSection from "./LandingSection";
import ContentSection from "./ContentSection";

import Footer from "../components/Footer";

const Header = styled.header`
  z-index: 2;

  padding: 2rem 2.5rem;
  position: absolute;

  @media screen and (max-width: 500px) {
    padding: 1rem 1.5rem;
  }

  @media screen and (max-height: 400px) {
    display: none;
  }
`;

export default function MainPage() {
  return (
    <>
      <Header>
        <Logo />
      </Header>
      <LandingSection />
      <ContentSection />
      <Footer />
    </>
  );
}
