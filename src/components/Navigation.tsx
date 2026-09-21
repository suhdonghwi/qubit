import { useEffect, useId, useRef, useState } from "react";
import { styled } from "styled-components";

import { FaBars } from "react-icons/fa";
import Logo from "./Logo";
import toc from "toc.json";
import { Link } from "react-router-dom";

const Pop = styled.div<{ $open: boolean }>`
  position: fixed;
  top: 2rem;
  left: 0rem;

  z-index: 1;
  font-size: 1.5rem;

  border-radius: 0 5px 5px 0;
  padding: 0.8rem 0.8rem 0.6rem 0.8rem;

  background-color: #343a40;
  box-shadow:
    0 14px 28px rgba(0, 0, 0, 0.25),
    0 10px 10px rgba(0, 0, 0, 0.22);

  transform: translateX(${({ $open }) => ($open ? "300px" : "0")});
  transition: transform 0.5s;
`;

const Toggle = styled.button`
  display: block;
  border: 0;
  padding: 0;
  background: none;
  color: inherit;
  font: inherit;
  cursor: pointer;
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
  box-shadow:
    0 14px 28px rgba(0, 0, 0, 0.25),
    0 10px 10px rgba(0, 0, 0, 0.22);
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
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const id = useId();
  useEffect(() => {
    const dismiss = (event: PointerEvent) => {
      if (event.target instanceof Node && !ref.current?.contains(event.target))
        setOpen(false);
    };
    document.addEventListener("pointerdown", dismiss);
    return () => document.removeEventListener("pointerdown", dismiss);
  }, []);
  return (
    <Pop
      ref={ref}
      $open={open}
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") setOpen(true);
      }}
      onPointerLeave={(event) => {
        if (event.pointerType === "mouse") setOpen(false);
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          setOpen(false);
          trigger.current?.focus();
        }
      }}
    >
      <Toggle
        ref={trigger}
        type="button"
        aria-label="목차"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen(!open)}
      >
        <FaBars />
      </Toggle>
      <Nav id={id} inert={!open} aria-hidden={!open}>
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
                    <StyledLink
                      to={article.route}
                      onClick={() => setOpen(false)}
                    >
                      {article.title}
                    </StyledLink>
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
