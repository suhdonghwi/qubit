import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import toc from "toc.json";

const Container = styled.div`
  padding: 0 2rem;
  display: flex;
  width: 100%;
`;

const Navigation = styled.div`
  cursor: pointer;

  display: flex;
  align-items: center;

  font-size: 1.2rem;
  color: #868e96;
  text-align: center;
  word-break: keep-all;

  transition: color 0.5s;

  &:last-child {
    margin-left: auto;
  }

  &:hover {
    color: #dee2e6;
  }
`;

const Text = styled.div`
  margin: 0 0.5rem;
`;

interface NextPrevProps {
  chapter: number;
  index: number;
}

export default function NextPrev({ chapter, index }: NextPrevProps) {
  const realChapter = chapter - 1,
    realIndex = index - 1;

  const list = toc
    .map((c, i) => c.content.map((a, j) => `${i + 1}-${j + 1} ${a.title}`))
    .flat();

  let count = realIndex;
  for (let i = 0; i < realChapter; i++) {
    count += toc[i].content.length;
  }
  console.log(count);

  const prev = list[count - 1],
    next = list[count + 1];

  return (
    <Container>
      {prev && (
        <Navigation>
          <FaChevronLeft />
          <Text>{prev}</Text>
        </Navigation>
      )}

      {next && (
        <Navigation>
          <Text>{next}</Text>
          <FaChevronRight />
        </Navigation>
      )}
    </Container>
  );
}
