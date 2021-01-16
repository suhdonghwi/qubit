import React from "react";
import styled from "styled-components";

import Logo from "./components/Logo";

import MainPage from "./pages/MainPage";

const Header = styled.header`
  padding: 3rem 3.5rem;
  position: fixed;
`;

function App() {
  return (
    <div className="App">
      <Header>
        <Logo />
      </Header>
      <MainPage />
    </div>
  );
}

export default App;
