import React from "react";
import styled from "styled-components";

import Logo from "./components/Logo";

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
    </div>
  );
}

export default App;
