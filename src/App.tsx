import React from "react";
import styled from "styled-components";

import MainPage from "./pages/MainPage";
import Logo from "./components/Logo";

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

const Body = styled.div`
  height: 100vh;
`;

function App() {
  return (
    <div className="App">
      <Header>
        <Logo />
      </Header>
      <MainPage />
      <Body>asdf</Body>
    </div>
  );
}

export default App;
