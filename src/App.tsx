import React from "react";
import styled from "styled-components";

import Logo from "./components/Logo";

import MainPage from "./pages/MainPage";
import MenuPage from "./pages/MenuPage";

import Footer from "./components/Footer";

const Header = styled.header`
  z-index: 2;

  padding: 2rem 2.5rem;
  position: fixed;

  @media screen and (max-width: 500px) {
    padding: 1rem 1.5rem;
  }

  @media screen and (max-height: 400px) {
    display: none;
  }
`;

function App() {
  return (
    <div className="App">
      <Header>
        <Logo />
      </Header>
      <MainPage />
      <MenuPage />
      <Footer />
    </div>
  );
}

export default App;
