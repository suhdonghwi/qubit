import React from "react";
import styled from "styled-components/macro";

const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 15vh;
  border-top: 1px solid #343a40;

  color: #868e96;

  padding: 1rem 1rem;

  a {
    color: #868e96;
  }
`;

const Paragraph = styled.p`
  margin: 0;
  text-align: center;
`;

export default function Footer() {
  return (
    <Container>
      <Paragraph>
        Made with a lot of love by{" "}
        <a href="https://github.com/suhdonghwi">@suhdonghwi</a>
        <br />
        <a href="https://github.com/suhdonghwi/qubit">
          This website is open-sourced.
        </a>{" "}
        Feel free to contribute or submit an issue about this website.
      </Paragraph>
    </Container>
  );
}
