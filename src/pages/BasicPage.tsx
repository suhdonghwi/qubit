import React from "react";
import ContentViewer from "../components/ContentViewer";

import ContentBuilder from "../types/ContentBuilder";

import StartFlag from "../components/graphics/StartFlag";

import SubatomicGraphic from "../components/graphics/basics/SubatomicGraphic";
import QuantumComputerGraphic from "../components/graphics/basics/QuantumComputerGraphic";
import SuperpositionGraphic from "../components/graphics/basics/SuperpositionGraphic";

import ParticleGraphic from "../components/graphics/basics/slits/ParticleGraphic";
import SingleWaveGraphic from "../components/graphics/basics/slits/SingleWaveGraphic";

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

이렇게 원자보다도 작은 입자들의 세계를 "아원자 세계"라고 하는데, 이 아원자 세계에서는 입자들이 매우 요상하게 행동합니다. 어떻게, 얼마나 이상하게 행동하길래 그러는 걸까요? 이를 알아보기 위해서, 양자역학의 세계를 여는 데 결정적인 계기를 제공한, "이중 슬릿 실험"을 한 번 보도록 합시다.
`.paragraph(ParticleGraphic)`
자, 여기에 두 개의 틈이 있는 슬릿과 벽에 착 달라붙는 공을 발사하는 장치가 있습니다. 공을 계속 발사하면 벽에 어떤 무늬가 나타날까요? 오른쪽 화면에서 버튼을 눌러서 한 번 확인해보세요.

당연하게도, 두 개의 틈으로 지나간 공들이 두 개의 직선 띠를 형성합니다. 여기까지는 해보지 않아도 예측할 수 있을 만큼 단순하죠?
`.paragraph(SingleWaveGraphic)`
자, 여기에 두 개의 틈이 있는 슬릿과 벽에 착 달라붙는 공을 발사하는 장치가 있습니다. 공을 계속 발사하면 벽에 어떤 무늬가 나타날까요? 오른쪽 화면에서 버튼을 눌러서 한 번 확인해보세요.

당연하게도, 두 개의 틈으로 지나간 공들이 두 개의 직선 띠를 형성합니다. 여기까지는 해보지 않아도 예측할 수 있을 만큼 단순하죠?
자, 여기에 두 개의 틈이 있는 슬릿과 벽에 착 달라붙는 공을 발사하는 장치가 있습니다. 공을 계속 발사하면 벽에 어떤 무늬가 나타날까요? 오른쪽 화면에서 버튼을 눌러서 한 번 확인해보세요.

당연하게도, 두 개의 틈으로 지나간 공들이 두 개의 직선 띠를 형성합니다. 여기까지는 해보지 않아도 예측할 수 있을 만큼 단순하죠?
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
