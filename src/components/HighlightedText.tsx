import styled from "styled-components/macro";

import palette from "../palette";

const Text = styled.span`
  font-weight: 700;

  background-image: ${palette.quantumGradient};

  -webkit-text-fill-color: transparent;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;

  white-space: nowrap;
`;

export default Text;

