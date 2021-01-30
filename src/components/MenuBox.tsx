import styled from "styled-components";
import palette from "../palette";

const Box = styled.article`
  width: 100%;

  background-color: #212529;
  border-radius: 10px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);

  padding: 3rem 4rem;
`;

const Heading = styled.header``;

const Number = styled.small`
  font-size: 2rem;
  color: #868e96;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin: 0.5rem 0 0 0;
`;

const Description = styled.p`
  font-size: 1.3rem;
  color: #868e96;
  width: 65%;

  margin: 2rem 0;
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
`;

const ChapterList = styled.ol`
  margin-top: 4rem;
  padding: 0 0 0 3rem;
  font-size: 1.4rem;
`;

const ChapterItem = styled.li`
  margin-bottom: 1rem;
`;

export default function MenuBox() {
  return (
    <Box>
      <Heading>
        <Number>01</Number>
        <Title>양자역학의 기초</Title>
        <Description>
          양자역학이 어떤 학문인지, 어떤 계기로 탄생하게 된 학문인지 알아봅니다.
          그리고 양자 컴퓨터를 이해하기 위해서 필요한 최소한의 양자역학 개념들에
          대해서 다룹니다.
        </Description>
      </Heading>

      <StartButton>시작하기</StartButton>

      <ChapterList>
        <ChapterItem>양자역학의 시작과 이중 슬릿 실험</ChapterItem>
        <ChapterItem>양자 중첩과 양자 얽힘</ChapterItem>
      </ChapterList>
    </Box>
  );
}
