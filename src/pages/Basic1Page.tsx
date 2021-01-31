import React from "react";
import ContentViewer from "../components/ContentViewer";

import ContentBuilder from "../types/ContentBuilder";

import StartFlag from "../components/graphics/StartFlag";

import SubatomicGraphic from "../components/graphics/1/SubatomicGraphic";
import QuantumComputerGraphic from "../components/graphics/1/QuantumComputerGraphic";

import ParticleGraphic from "../components/graphics/1/slits/ParticleGraphic";
import SingleWaveGraphic from "../components/graphics/1/slits/SingleWaveGraphic";
import DoubleWaveGraphic from "../components/graphics/1/slits/DoubleWaveGraphic";
import ElectronGraphic from "../components/graphics/1/slits/ElectronGraphic";
import ElectronSlitsGraphic from "../components/graphics/1/slits/ElectronSlitsGraphic";
import ElectronObserveGraphic from "../components/graphics/1/slits/ElectronObserveGraphic";

const builder = new ContentBuilder();

builder.paragraph(QuantumComputerGraphic)`
여러분은 양자 컴퓨터에 대해서 들어보신 적이 있나요? 양자 컴퓨터는, 양자역학의 이론을 사용하여 고안된 새로운 종류의 컴퓨터입니다. 양자역학 자체의 비직관적성 때문인지는 몰라도, 세간에는 양자역학과 양자 컴퓨터에 대한 오해가 많이 퍼져있습니다. 이 웹사이트의 목적은 최소한의 양자역학 기본 지식과 함께 양자 컴퓨터의 동작 원리를 비교적 쉽게 설명해드리는 데에 있습니다.

양자 컴퓨터를 이해하기 위해서는 양자역학에 대해서 어느정도 이해를 하고 있어야겠죠? 그럼 우선, 기본부터 알아가보도록 하겠습니다.
`.paragraph(SubatomicGraphic)`
'양자역학'이 대체 무엇일까요? 아주 아주 간단하게 말해서, 양자역학은 "작은 것들을 연구하는 학문" 입니다. 원자, 전자, 광자와 같이 육안으로는 절대로 형태를 관찰할 수 없을 만큼 작은 입자들의 성질을 밝혀내는 것이 양자역학의 주된 목표라고 할 수 있습니다.

이렇게 원자보다도 작은 입자들의 세계를 "아원자 세계"라고 하는데, 이 아원자 세계에서는 입자들이 매우 요상하게 행동합니다. 우리의 상식을 완전히 벗어나는 실험 결과를 보여준다는 의미입니다.

어떻게, 얼마나 이상하게 행동하길래 그러는 걸까요? 이를 알아보기 위해서, 양자역학의 세계를 여는 데 결정적인 계기를 제공한, "이중 슬릿 실험"을 한 번 보도록 하겠습니다.
`.paragraph(ParticleGraphic)`
자, 공을 발사하는 장치와 공이 착 달라붙는 벽이 있고, 그 사이에는 두 개의 틈이 있는 슬릿이 놓여져 있습니다. 이 상태에서 공을 벽 쪽으로 계속 발사하면 벽은 어떻게 될까요? 화면에서 버튼을 눌러서 한 번 직접 확인해보세요.

당연하게도, 두 개의 틈으로 지나간 공들이 벽에 달라붙어 두 개의 띠 무늬를 그립니다. 정말 상식적이죠? 이렇게 우리가 일상 생활에서 두 눈으로 관찰할 수 있는 현상들은, 천재 물리학자 뉴턴이 만든 역학 체계를 통해서 완벽하게 설명해낼 수 있습니다.
---
공이 벽면에 도달할 확률을 위치별로 계산해서 그래프로 그리면 이렇게 그려집니다. 실제로도 공을 발사해 보면 가장 확률이 높은 구간에 공이 대부분 도달하는 모습을 볼 수 있습니다.
`.paragraph(SingleWaveGraphic)`
그럼, 이제 '파동'의 경우를 살펴보도록 하겠습니다. 파동은 진동이 퍼져나가는 현상으로, 물수제비를 던지면 수면에 물결파가 생기는 것이 대표적인 예시입니다.

  아까는 두 개의 틈이 있는 슬릿에 공을 던졌었는데요, 이번에는 한 개의 틈이 있는 슬릿에 파동을 통과시켜보겠습니다. 파동은 입자(공)와는 성질이 조금 다르죠? 파동이 슬릿을 통과한 뒤에는 어떻게 진행할까요? 한 번 예측해보세요.
---
파동이 틈을 통과하면, 그 틈을 중심으로 해서 원 모양으로 다시 퍼져나가게 됩니다. 집에서 욕조에 물을 채우고 물결파로 한 번 실험해보세요! 벽에 그려진 선은 해당 위치에 도달한 파동의 세기를 표시한 것입니다.

그럼 이제 조금 더 어려운 상황을 보도록 할까요?
`.paragraph(DoubleWaveGraphic)`
이번엔 아까 공 던지기 실험에서 보았던 이중 슬릿입니다. 이 이중 슬릿에 파동을 통과시키면 파동은 어떻게 진행하고, 벽에는 어떤 모양의 그래프가 그려질까요? 쉽지는 않겠지만, 한 번 생각해보세요!
---
파동이 두 개의 틈을 통과하면, 왼쪽 틈에서 생기는 파동과 오른쪽 틈에서 생기는 파동이 동시에 진행합니다. 두 파동이 진행하다가 만나게 되면 서로 상쇄되거나 보강되는 상호작용을 하기 때문에 조금 더 복잡한 모양의 파동이 만들어집니다. 이렇게 여러 개의 파동이 만나 위상이 달라지는 현상을 "파동의 간섭"이라고 합니다.

그리고 공을 이중 슬릿에 던졌을 때는 두 줄의 띠가 나타났는데, 파동의 경우는 주변부보다 세기가 강한 부분이 2개 이상이라는 것을 볼 수 있습니다. 이 무늬를 "간섭 무늬"라고 합니다.

이 실험을 통해서, 이중 슬릿에 입자(공)을 던졌을 때와 파동을 통과시켰을 때 생겨나는 무늬가 다르다는 것을 알 수 있습니다. 파동은 두 개의 틈을 동시에 통과하고 서로 간섭할 수 있지만, 입자는 그렇지 못하기 때문에 발생한 현상입니다. 이에 과학자들은, 어떤 대상이 입자인지 파동인지 알고싶다면 이 이중 슬릿에 던져보고 생겨나는 무늬를 관찰하면 되겠다는 생각을 했습니다.
`.paragraph(ElectronGraphic)`
1961년 어느 날, 독일의 물리학자 클라우스 존슨(Claus Jonsson)은 전자를 가지고 이중 슬릿 실험을 해보기로 결심합니다. 원자의 구성 요소 중 하나인 전자는, 이전 연구 결과에 따르면 질량을 가지는 명백한 입자였습니다. 그러므로 당연히 공을 던졌을 때 나타났던 띠 무늬가 나올 것으로 예상했습니다.
`.paragraph(ElectronSlitsGraphic)`
과연, 슬릿에 전자를 하나씩 마구마구 던졌을 때, 스크린에 나타나는 무늬는 어떤 무늬였을까요? 여러분은 어떻게 나올 것이라고 예상하시나요?
---
... 놀랍게도, 전자를 이중 슬릿에 통과시키자, 파동을 통과시켰을 때 생겼었던 간섭 무늬가 나타났습니다. 과학자들은 이 실험 결과에 굉장히 당황했습니다. 전자는 입자가 아닌가? 어떻게 입자를 통과시켰는데 간섭 무늬가 발생할까? 전자가 슬릿의 두 틈을 동시에 통과하기라도 하는 것일까?

뉴턴이 정립한 역학 체계로는 도무지 설명이 불가능한 현상이 발견되자, 너무나도 답답했던 과학자들은 직접 현상을 들여다보기로 결심합니다.
`.paragraph(ElectronObserveGraphic)`
입자인 전자가 대체 어떻게 슬릿을 통과하길래 간섭 무늬가 생기는지, 이를 직접 눈으로 확인하고 싶었던 과학자들은 슬릿 앞에 관측 장치를 설치했습니다. 그리고 같은 실험을 진행했습니다.

하지만, 양자역학의 세계는 과학자들의 생각보다 훨씬 더 심오했습니다..
---
슬릿 앞에 관측 장치를 설치하고 실험을 진행하자, 이번에는 띠 모양의 무늬가 나타났습니다. 관측을 시작하니, 파동같은 성질을 보이던 전자가, 마치 자신이 관측당하고 있다는 사실을 눈치챈 것 마냥 다시 입자처럼 행동하기 시작했다는 것입니다.

과학자들은 그야말로 대혼란에 빠지게 됩니다. 이런 말도 안되는 상황이 가능한 것일까? 실험에 오류가 있는 것은 아닐까? 하지만 거듭된 실험에서도 같은 결과가 나타날 뿐이었습니다. 심지어 전자 뿐만 아니라 광자 등 다른 아원자 입자에서도 같은 현상이 나타나는 것을 발견하였습니다.

이런 말도 안되는 결과는, 자연스럽게 현실을 해석하는 새로운 이론을 도입해야함을 의미했습니다. 이런 요상한 세계를 가장 명료하게 설명하기 위한 이론을 과학자들이 하나둘씩 내놓기 시작하면서, 비로소 양자역학의 시대가 열리게 되었습니다.
`;

export default function Basic1Page() {
  return (
    <ContentViewer
      title="1. 양자역학의 등장"
      description="양자역학은 무슨 학문일까? 양자역학은 무엇을 계기로 등장했을까? 양자 컴퓨터의 이론적 기반인 양자역학에 대해 조금씩 알아가보도록 합시다."
      quote={{
        eng:
          "I think I can safely say that nobody understands Quantum Mechanics.",
        kor:
          "양자역학을 완벽히 이해한 사람은 아무도 없다고 자신있게 말할 수 있습니다.",
        by: "Richard Feynmann (리처드 파인만)",
      }}
      scenes={builder.build()}
    />
  );
}
