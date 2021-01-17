import React, { useState } from "react";
import styled from "styled-components/macro";

import Lottie from "react-lottie-player";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 17rem;
  height: 17rem;
  margin: 1rem;

  border: 1px solid #495057;
  border-radius: 10px;
`;

const BoxTitle = styled.h2`
  margin: 0;
`;

interface MenuProps {
  index: number;
  name: string;
  data: object;
}

export default function Menu({ index, name, data }: MenuProps) {
  const [speed, setSpeed] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  function onFrame(e: any) {
    if (speed === 0) return;

    if (
      (direction === 1 && e.currentTime > e.totalTime - 1) ||
      (direction === -1 && e.currentTime < 1)
    ) {
      console.log(direction);
      setSpeed(0);
    }
  }

  function onMouseEnter() {
    console.log("enter");
    setDirection(1);
    setSpeed(1);
  }

  function onMouseLeave() {
    console.log("leave");
    setDirection(-1);
    setSpeed(1);
  }

  return (
    <Box>
      <Lottie
        loop
        animationData={data}
        play={true}
        direction={direction}
        onEnterFrame={onFrame}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        speed={speed}
        style={{ height: "200px" }}
      />
      <BoxTitle>
        {index}. {name}
      </BoxTitle>
    </Box>
  );
}
