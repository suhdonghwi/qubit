import { useState, useLayoutEffect } from "react";

import styled from "styled-components";

import { Canvas } from "react-three-fiber";
import { OrthographicCamera } from "@react-three/drei";

import QuantumComputerGraphic from "./graphics/1/QuantumComputerGraphic";

const Box = styled.article`
  position: relative;
  width: 100%;

  background-color: #212529;
  border-radius: 10px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);

  padding: 3rem 4rem;

  @media screen and (max-width: 700px) {
    padding: 3rem;
  }

  @media screen and (max-width: 550px) {
    padding: 2rem;
  }
`;

const Heading = styled.header``;

const Number = styled.small`
  font-size: 2rem;
  color: #868e96;

  @media screen and (max-width: 550px) {
    font-size: 1.5rem;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  margin: 0.5rem 0 0 0;

  word-break: keep-all;

  @media screen and (max-width: 550px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.3rem;
  color: #868e96;
  width: 70%;

  margin: 2rem 0;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }

  @media screen and (max-width: 550px) {
    font-size: 1rem;
  }
`;

const StartButton = styled.button`
  cursor: pointer;
  appearance: none;

  font-size: 1.1rem;
  padding: 0.5rem 1.8rem;
  color: white;

  border: 2px solid #ced4da;
  border-radius: 20px;
  outline: none;

  background: none;
  background-color: transparent;

  transition: all 0.3s;

  &:hover {
    background-color: #ced4da;
    color: #212529;
  }

  @media screen and (max-width: 550px) {
    padding: 0.3rem 1.3rem;
    font-size: 1rem;
  }
`;

const ChapterList = styled.ol`
  margin-top: 4rem;
  word-break: keep-all;

  font-size: 1.4rem;

  @media screen and (max-width: 550px) {
    font-size: 1.2rem;
    padding: 0 0 0 2rem;
  }
`;

const ChapterItem = styled.li`
  margin-bottom: 1rem;
`;

const StyledCanvas = styled(Canvas)`
  position: absolute !important;
  width: 700px !important;
  height: 400px !important;

  top: 50%;
  right: -10%;
  transform: translateY(-30%);

  @media screen and (max-width: 1600px) {
    right: -20%;
  }

  @media screen and (max-width: 1400px) {
    right: -30%;
  }

  @media screen and (max-width: 1200px) {
    right: -25%;

    width: 500px !important;
    height: 300px !important;
  }

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

interface MenuBoxProps {
  num: number;
  title: string;
  description: string;
  chapters: string[];
}

export default function MenuBox({
  num,
  title,
  description,
  chapters,
}: MenuBoxProps) {
  const [zoom, setZoom] = useState(0);

  const onResize = () => {
    if (window.innerWidth <= 1200) {
      setZoom(35);
    } else if (window.innerWidth <= 1400) {
      setZoom(40);
    } else {
      setZoom(50);
    }
  };

  useLayoutEffect(() => {
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  });

  return (
    <Box>
      <Heading>
        <Number>0{num}</Number>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Heading>

      <StartButton>시작하기</StartButton>

      <ChapterList>
        {chapters.map((chapter, i) => (
          <ChapterItem key={i}>{chapter}</ChapterItem>
        ))}
      </ChapterList>

      <StyledCanvas shadowMap>
        <OrthographicCamera
          position={[0, 2, 10]}
          rotation={[-Math.PI / 8, 0, 0]}
          zoom={zoom}
          makeDefault
        />

        <ambientLight intensity={0.1} />
        <pointLight
          intensity={0.5}
          position={[5, 15, 5]}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />

        <group rotation={[0, Math.PI / 4, 0]}>
          <QuantumComputerGraphic />
        </group>
      </StyledCanvas>
    </Box>
  );
}
