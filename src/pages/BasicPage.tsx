import React from "react";
import ContentViewer from "../components/ContentViewer";

import ContentBuilder from "../types/ContentBuilder";

import StartFlag from "../components/graphics/StartFlag";

import SubatomicGraphic from "../components/graphics/basics/SubatomicGraphic";
import QuantumComputerGraphic from "../components/graphics/basics/QuantumComputerGraphic";

import ParticleGraphic from "../components/graphics/basics/slits/ParticleGraphic";
import SingleWaveGraphic from "../components/graphics/basics/slits/SingleWaveGraphic";
import DoubleWaveGraphic from "../components/graphics/basics/slits/DoubleWaveGraphic";

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
그럼, 이제 '파동'의 경우를 살펴보도록 하겠습니다. 이번엔 한 개의 틈이 있는 슬릿에 파동을 통과시켜보겠습니다. 파동이 슬릿을 통과한 뒤에는 어떻게 진행할까요? 한 번 예측해보세요.
---
물결을 만들어서 직접 실험해보셔도 알 수 있겠지만, 슬릿의 틈을 파원으로 해서 원 모양으로 똑같이 퍼져나가게 됩니다. 벽에 그려진 빨간색 선은 주변부에 비해서 진폭이 큰 부분을 나타낸 것입니다.

그럼 이제 조금 더 어려운 상황을 보도록 할까요?
`.paragraph(DoubleWaveGraphic)`
아까 공 던지기 실험에서 보았던 이중 슬릿입니다. 이 이중 슬릿에 파동을 통과시키면 파동은 어떻게 진행하고, 벽에는 어떤 무늬가 나타날까요?
---
이번에는 왼쪽 슬릿에서 생기는 파동과 오른쪽 슬릿에서 생기는 파동이 동시에 진행하면서, 서로 상쇄되거나 보강되기 때문에 조금 더 복잡한 파동이 만들어집니다. 이러한 현상을 "파동의 간섭"이라고 합니다.

그리고 벽에도 공을 이중 슬릿에 던졌을 때와는 다른 무늬가 그려지는데, 이를 "간섭 무늬"라고 합니다.
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
