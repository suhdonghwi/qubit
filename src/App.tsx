import React from "react";
import styled from "styled-components";

import MainPage from "./pages/MainPage";

const Header = styled.header`
  padding: 3rem 3.5rem;
  position: fixed;
`;

const Body = styled.div`
  height: 100vh;
`;

function App() {
  return (
    <div className="App">
      <Header></Header>
      <MainPage />
      <Body>asdf</Body>
    </div>
  );
}

export default App;
