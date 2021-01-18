import React from "react";
import styled from "styled-components";

import Lottie from "react-lottie-player";

const Container = styled.div`
  width: 70%;
`;

interface LottieGraphicProps {
  data: object;
  loop?: boolean;
}

export default function LottieGraphic({ data, loop }: LottieGraphicProps) {
  return (
    <Container>
      <Lottie
        loop={loop}
        animationData={data}
        play={true}
        style={{ width: "100%" }}
      />
    </Container>
  );
}
