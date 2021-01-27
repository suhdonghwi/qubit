import React from "react";
import ContentViewer from "../components/ContentViewer";

import ContentBuilder from "../types/ContentBuilder";

import StartFlag from "../components/graphics/StartFlag";

import SubatomicGraphic from "../components/graphics/basics/SubatomicGraphic";
import QuantumComputerGraphic from "../components/graphics/basics/QuantumComputerGraphic";
import SuperpositionGraphic from "../components/graphics/basics/SuperpositionGraphic";
import DoubleSlitsGraphic from "../components/graphics/basics/DoubleSlitsGraphic";

const builder = new ContentBuilder();

builder.quote(StartFlag)`
I think I can safely say that nobody understands Quantum Mechanics.
양자역학을 완벽히 이해한 사람은 아무도 없다고 자신있게 말할 수 있습니다.

― Richard Feynmann (리처드 파인만)
`.paragraph(QuantumComputerGraphic)`
여러분은 양자 컴퓨터에 대해서 들어보신 적이 있나요? 양자 컴퓨터는, 양자역학의 이론을 사용하여 고안된 새로운 종류의 컴퓨터입니다. 양자역학 자체의 비직관적인 본성 때문인지는 몰라도, 세간에는 양자역학과 양자 컴퓨터에 대한 오해가 많이 퍼져있습니다. 이 웹사이트의 목적은 최소한의 양자역학 기본 지식과 함께 양자 컴퓨터의 동작 원리를 비교적 쉽게 설명해드리는 데에 있습니다.

그럼 우선, 기본부터 알아가보도록 하겠습니다.
`.paragraph(SubatomicGraphic)`
'양자역학'이 대체 무엇일까요? 아주 아주 간단하게 말해서, 양자역학은 "작은 것들을 연구하는 학문" 입니다. 원자, 전자, 광자와 같이 육안으로는 절대로 형태를 관찰할 수 없을 만큼 작은 입자들의 성질을 밝혀내는 것이 양자역학의 주된 목표라고 할 수 있습니다.

이렇게 원자보다도 작은 입자들의 세계를 "아원자 세계"라고 하는데, 이 아원자 세계에서는 입자들이 매우 요상하게 행동합니다. 어떻게, 얼마나 이상하게 행동하길래 그러는 걸까요? 이를 알아보기 위해서, 유명한 사고실험인 "슈뢰딩거의 고양이"를 한 번 보도록 합시다.
`.paragraph(DoubleSlitsGraphic)`
이런 상황을 한 번 상상해봅시다. 여러분에게 완전하게 밀폐된 상자 하나가 있습니다. 그리고 그 상자 속에는, 귀여운 고양이 한 마리와 독가스가 담긴 병이 들어있습니다. 그리고 30분 뒤에, 50% 확률로 그 독가스병의 마개가 자동으로 열리고 우리 불쌍한 고양이는 명을 달리하게 됩니다.

자, 1시간이 지났습니다. 만약 누군가가 여러분에게 "지금 고양이의 상태를 설명해주세요!"라는 부탁을 한다면 여러분은 뭐라고 답변하실건가요? 아마 "고양이는 현재 죽었거나 살아있습니다." 라고 말하시겠죠. 그런데..
---
양자역학에서는 고양이의 상태를 조금 다르게 묘사합니다. "고양이는 현재 죽어있는 동시에 살아있으며, 고양이의 상태는 우리가 상자를 열어서 관측하는 순간 하나로 결정된다!"
`.paragraph(SuperpositionGraphic)`
양자역학에서는 고양이의 상태를 조금 다르게 묘사합니다. "고양이는 현재 죽어있는 동시에 살아있으며, 고양이의 상태는 우리가 상자를 열어서 관측하는 순간 하나로 결정된다!"

이게 무슨 말같지도 않은 소리일까요? 고양이가 죽은 동시에 살아있다뇨? 게다가 관측을 하는 동시에 상태가 결정된다는건 더 말이 안되는 소리같이 들립니다.

하지만 놀랍게도, 이것이 현재 양자역학계에서 정설로 받아들여지고 있는 해석(코펜하겐 해석)입니다. 입자는 관측하기 전까지 여러 상태가 동시에 중첩되어 존재하며, 관측하는 순간 하나의 상태로 결정된다. 양자역학에서는 이렇게 여러 상태가 동시에 존재하는 현상을 중첩(superposition)이라고 합니다. 

오른쪽 화면에서 중첩과 관찰 현상을 체험해보실 수 있습니다. 버튼을 누르기 전 우글우글하게 움직이고 있는 물질은 여러 상태가 동시에 중첩되어 있음을 나타내고, 버튼을 누르면 물질을 관측함으로서 하나의 상태(빨간색 또는 파란색)로 랜덤하게 결정되는 것입니다.
`;

export default function BasicPage() {
  return (
    <ContentViewer
      title="1. 기본"
      description="이 글은 양자 컴퓨터가 어떻게 동작하는지 이해하기 위해 필요한 기본적인 지식들을 담고 있습니다. 양자역학이 뭘까? 양자 컴퓨터는 기존의 컴퓨터와 무엇이 다를까? 이 글을 읽으시면, 이 질문들에 답하실 수 있게 되실 것입니다. 크게 어렵지 않은 내용들로 채웠으니, 부담스럽지 않게 읽으실 수 있으시면 좋겠습니다."
      scenes={builder.build()}
    />
  );
}
