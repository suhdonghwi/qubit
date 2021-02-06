import React from "react";
import ContentViewer from "../components/ContentViewer";

import ContentBuilder from "../types/ContentBuilder";

import SubatomicGraphic from "../components/graphics/1/SubatomicGraphic";
import ComputerGraphic from "../components/graphics/3/ComputerGraphic";

const builder = new ContentBuilder();

builder.paragraph(ComputerGraphic)`
이제 본격적으로 양자 컴퓨터의 원리에 대해서 알아갈 차례입니다.

우선, 우리가 지금 사용하고 있는 컴퓨터를 먼저 봅시다. 양자 컴퓨터와 대비해서, 우리가 지금 일상 생활에서 사용하고 있는 데스크탑, 노트북은 고전 컴퓨터(Classical computer)라고 부릅니다. 실상은 전혀 고전적이지 않고 첨단 기술이 잔뜩 들어간 기기지만, 양자 컴퓨터라는 새로운 종류의 컴퓨터와 대비하기 위해서 이렇게 부르는 것입니다.

고전 컴퓨터는 이미 많은 일들을 해내고 있습니다. 재미있는 영상을 틀어주고, 지구 반대편에 사는 친구와 대화할 수 있게 해주며, 내일의 날씨를 예측하고, 세계 최고의 바둑 프로 기사를 이깁니다.

하지만 이런 대단한 기계도, 기본적인 동작 원리는 아주 단순합니다. 혹시 컴퓨터가 속에서 어떻게 계산을 하는지 알고 계신가요?
`.paragraph(SubatomicGraphic)`
컴퓨터는 '비트(bit)'라는 최소 단위를 가지고 연산을 합니다. 비트는 한 번에 0 또는 1의 값을 가질 수 있습니다.

컴퓨터는 0과 1밖에 모른다는 이야기가 바로 이것을 두고 하는 말입니다. 컴퓨터의 중앙 처리 장치인 CPU는 13이라는 숫자를 그대로 해석할 수 없습니다. 십진수인 13을 이진수 1101로 바꿔서 다룰 수 있을 뿐입니다.

이런 단순하기 짝이 없는 비트가 수없이 많이 모여서 대단히 복잡하고 정교한 연산을 수행한다는 것이 놀랍지 않나요?
`.paragraph(SubatomicGraphic)`
그렇다면 양자 컴퓨터의 최소 연산 단위는 무엇일까요? 바로 큐비트(qubit)입니다. 고전 컴퓨터에서 사용하는 비트랑 비슷하지만, 양자역학의 원리가 적용된 비트입니다.

어떤 양자역학의 원리가 적용되어있을까요? 이전 페이지에서, 양자역학의 기본 원리 중 하나인 양자 중첩에 대해서 알아보았습니다. 양자 중첩은 확률적으로 가능한 상태들이 동시에 중첩되어있는 현상이었죠.

큐비트는 이 양자 중첩 현상을 이용해서, 비트처럼 0 또는 1의 값을 둘 중 하나만 가지는 것이 아니라 0과 1이 동시에 중첩되어있는 상태를 가집니다. 0 또는 1로 확정되어있는 것이 아니라, 그 사이 어딘가에 존재하는 것입니다. 뭔가 기묘한데, 이렇게 중첩 상태를 가지는 것이 컴퓨터로서 어떤 이점이 있는 것일까요?
`.paragraph(SubatomicGraphic)`
여러분에게 고전적인 비트 3개가 있다고 해봅시다. 이 비트 3개로 표현할 수 있는 정보의 가짓수는 얼마나 될까요? 이진수로 세어보면, 0부터 7까지 총 8개의 정보를 나타낼 수 있음을 알 수 있습니다.

하지만, 비트를 이용해서 한 번에 여러 정보를 동시에 표현하지는 못합니다. 즉, 3개의 비트에 각각 0 또는 1의 값을 부여함으로써 8개의 가능한 정보 중에서 하나만을 골라서 표현할 수 있는 것입니다.
`.paragraph(SubatomicGraphic)`
반면, 큐비트는 양자 중첩 원리를 이용하기 때문에 한 번에 여러 정보를 동시에 표현하는 것이 가능합니다. 3개의 큐비트가 있으면, 고전적인 비트처럼 한 번에 하나만 표현할 수 있는 것이 아니라 가능한 정보의 가짓수 8개를 모두 동시에 표현할 수 있다는 것입니다.

잘 실감이 안나시나요? 여러분에게 20개의 큐비트가 있으면, 그 큐비트들은 모여서 동시에 1,048,576개의 정보를 표현할 수 있습니다. 고작 20개의 큐비트가요!
---
숫자의 거대함보다도, 저런 많은 정보를 '동시에' 표현할 수 있음에 더 주목하셔야합니다. 고전적인 비트도 충분히 많은 수가 있으면 많은 가짓수의 정보를 표현할 수 있지만, 큐비트처럼 이를 '동시에' 나타낼 수는 없습니다. 이 중첩의 원리가, 고전 컴퓨터와 양자 컴퓨터를 본질적으로 구별하는 특성입니다.

아직 이 동시성이 어떻게 유용하게 사용되는지는 아직 설명을 드리지 않았지만, 큐비트가 양자 중첩의 원리를 이용한다는 것만 알아주셨으면 좋겠습니다.
`.paragraph(SubatomicGraphic)`
큐비트는 어떤 특정한 물질을 가리키는 말이 아니며, 오히려 추상적인 개념입니다. 2개의 양자 상태를 안정적으로 표현할 수 있는 양자 물질이면 어떤 것이든지 큐비트가 될 수 있습니다. 실제로 큐비트를 실제 세계에서 물리적으로 구현하는 방법은 여러가지가 존재합니다.

예를 들어서, 전자는 '스핀'이라는 고유한 특성을 가집니다. 전자가 어느 방향으로 회전하는지(실제로 고전 물리학에서 말하는 회전과는 다르긴 합니다)를 나타내는 값인데, 스핀 업(Up)의 상태일 수도 있고 스핀 다운(Down)의 상태에 있을 수도 있습니다.

스핀 업을 0에, 스핀 다운을 1에 대응시켜서 전자를 큐비트로 사용할 수 있습니다. 이 방식을 '스핀 큐비트'라고 부릅니다.
---
컴퓨터는 정확성이 요구되는 장치인 만큼 내부의 상태를 안정적으로 유지하는 것이 굉장히 중요합니다. 계산을 하다가 갑자기 어느 부분의 비트가 0에서 1로 바뀌어버리면 단순한 사칙연산부터 꼬여버리게 되겠죠.

같은 맥락에서, 양자 컴퓨터 또한 양자 중첩과 같은 상태를 안정적으로 유지하는 것이 최우선의 과제입니다. 하지만 양자 상태를 일정 시간동안 일관되게 유지하면서 동시에 연산까지 수행하는 작업은 현재로써 굉장히 어려운 일입니다. 이를 위해서 전 세계의 과학자들이 활발하게 연구를 진행하고 있습니다.
`;

export default function Principle1Page() {
  return (
    <ContentViewer
      chapter={2}
      index={1}
      scenes={builder.build()}
      quote={{
        eng: "To be, or not to be, that is the question",
        kor: "사느냐 죽느냐, 그것이 문제로다",
        by: "William Shakespeare (윌리엄 셰익스피어)",
      }}
    />
  );
}
