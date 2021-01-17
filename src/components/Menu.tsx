import React from "react";
import styled from "styled-components/macro";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 17rem;
  height: 17rem;

  border: 1px solid #495057;
  border-radius: 10px;
`;

const BoxTitle = styled.h2`
  margin: 0;
`;


interface MenuProps {
  index: number;
  name: string;
}

export default function Menu({ index, name }: MenuProps) {
  return (
    <Box>
      <BoxTitle>
        {index}. {name}
      </BoxTitle>
    </Box>
  );
}
