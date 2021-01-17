import React, { useState } from "react";
import styled from "styled-components/macro";

import Lottie from "react-lottie-player";

const Box = styled.div`
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 17rem;
  height: 17rem;
  margin: 1.5rem;

  border: 1px solid #495057;
  border-radius: 10px;

  background-color: #212529;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

  &:hover {
    transform: scale(1.05);

    h2 {
      color: #f8f9fa;
    }
  }

  transition: transform 0.5s;
`;

const BoxTitle = styled.h2`
  margin: 0;

  font-weight: 500;
  color: #868e96;

  transition: color 0.5s;
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
    <Box onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <Lottie
        loop
        animationData={data}
        play={true}
        direction={direction}
        onEnterFrame={onFrame}
        speed={speed}
        style={{ height: "200px" }}
      />
      <BoxTitle>
        {index}. {name}
      </BoxTitle>
    </Box>
  );
}
