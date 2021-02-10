import { Link } from "react-router-dom";
import styled from "styled-components/macro";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { maxWidth } from "../utils/MediaQuery";
import toc from "toc.json";

const Container = styled.div`
  display: flex;
  width: 100%;

  ${maxWidth(420)} {
    margin-top: 4rem;
  }
`;

const Navigation = styled(Link)`
  cursor: pointer;
  text-decoration: none;

  display: flex;
  align-items: center;

  font-size: 1.2rem;
  color: #868e96;
  text-align: center;
  word-break: keep-all;

  transition: color 0.5s;

  &.next {
    margin-left: auto;
  }

  &:hover {
    color: #dee2e6;
  }
`;

const Text = styled.div`
  margin: 0 0.5rem;

  ${maxWidth(420)} {
    margin: 0 0.3rem;
  }
`;

interface NextPrevProps {
  chapter: number;
  index: number;
}

export default function NextPrev({ chapter, index }: NextPrevProps) {
  const realChapter = chapter - 1,
    realIndex = index - 1;

  const list = toc
    .map((c, i) =>
      c.content.map((a, j) => ({
        title: `${i + 1}-${j + 1} ${a.title}`,
        route: a.route,
      }))
    )
    .flat();

  let count = realIndex;
  for (let i = 0; i < realChapter; i++) {
    count += toc[i].content.length;
  }

  const prev = list[count - 1],
    next = list[count + 1];

  return (
    <Container>
      {prev && (
        <Navigation to={prev.route} className="prev">
          <FaChevronLeft />
          <Text>{prev.title}</Text>
        </Navigation>
      )}

      {next && (
        <Navigation to={next.route} className="next">
          <Text>{next.title}</Text>
          <FaChevronRight />
        </Navigation>
      )}
    </Container>
  );
}
