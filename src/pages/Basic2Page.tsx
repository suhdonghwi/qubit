import React from "react";
import ContentViewer from "../components/ContentViewer";

import ContentBuilder from "../types/ContentBuilder";

import StartFlag from "../components/graphics/StartFlag";

import SubatomicGraphic from "../components/graphics/1/SubatomicGraphic";

const builder = new ContentBuilder();

builder.quote(StartFlag)`
I, at any rate, am convinced that He does not throw dice.
신은 주사위 놀이를 하지 않는다.

― Albert Einstein (알버트 아인슈타인)

Stop telling God what to do with his dice.
신이 주사위 가지고 뭘 하든 상관하지 말라.

― Niels Bohr (닐스 보어)
`.paragraph(SubatomicGraphic)`
앞선 페이지에서 보셨듯, 전자는 관측하지 않을 때는 파동의 성질을 가지지만 관측을 시작하자 입자의 성질을 띠기 시작했습니다.
`;

export default function Basic2Page() {
  return (
    <ContentViewer
      title="2. 양자 중첩과 양자 얽힘"
      description="양자역학의"
      scenes={builder.build()}
    />
  );
}
