import styled from "styled-components/macro";

import { FaBars } from "react-icons/fa";
import Logo from "./Logo";
import toc from "toc.json";
import { Link } from "react-router-dom";

const Pop = styled.div`
  position: fixed;
  top: 2rem;
  left: 0rem;

  z-index: 1;
  font-size: 1.5rem;

  border-radius: 0 5px 5px 0;
  padding: 0.8rem 0.8rem 0.6rem 0.8rem;

  background-color: #343a40;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

  transform: translateX(0);
  transition: transform 0.3s;

  &:hover {
    transform: translateX(300px);
  }
`;

const Nav = styled.nav`
  width: 300px;

  position: absolute;
  top: 0rem;
  left: 0rem;
  transform: translateX(-100%);
  border-radius: 0 0 5px 5px;

  background-color: #343a40;
  padding: 2rem 1rem;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;

  margin-bottom: 2rem;
`;

const List = styled.ol`
  font-size: 1.2rem;
  padding: 0 0 0 2rem;
`;

const ChapterItem = styled.li`
  margin: 1.5rem 0 0.5rem 0;
`;

const ArticleItem = styled.li`
  margin: 0.5rem 0;
`;

const StyledLink = styled(Link)`
  color: #f8f9fa;
`;

export default function Navigation() {
  return (
    <Pop>
      <FaBars />
      <Nav>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <List>
          {toc.map((chapter, i) => (
            <ChapterItem key={i}>
              {chapter.title}
              <List>
                {chapter.content.map((article, j) => (
                  <ArticleItem key={j}>
                    <StyledLink to={article.route}>{article.title}</StyledLink>
                  </ArticleItem>
                ))}
              </List>
            </ChapterItem>
          ))}
        </List>
      </Nav>
    </Pop>
  );
}
