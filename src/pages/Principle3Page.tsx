import React from "react";
import ContentViewer from "../components/ContentViewer";

import ContentBuilder from "../types/ContentBuilder";

import SubatomicGraphic from "../components/graphics/1/SubatomicGraphic";
import {
  LogicGatesGraphic,
  NotGateGraphic,
  AndGateGraphic,
  BlochSphereGraphic,
  QuantumGraphic,
} from "../components/graphics/5";

const builder = new ContentBuilder();

builder.paragraph(LogicGatesGraphic)`
이제 양자 알고리즘의 원리에 대해서 알았으니, 양자 컴퓨터가 실제로 계산을 할 때는 어떻게 하는지에 대해서 알아보도록 하겠습니다.

계속 그래왔던 것처럼, 양자 컴퓨터의 경우를 보기 전에 고전 컴퓨터는 어떻게 하는지부터 보겠습니다. 고전 컴퓨터는 비트를 가지고 연산을 하기 위해서 '논리 게이트'를 사용합니다. 논리 게이트는 비트를 입력으로 받고, 비트를 출력으로 하는 아주 단순한 연산 최소 단위입니다.
`.paragraph(NotGateGraphic)`
예를 들어, NOT 게이트는 비트 0을 입력으로 받으면 비트 1을 출력으로 하고, 비트 1을 입력으로 받으면 비트 0을 출력으로 합니다. 즉, 비트를 반대로 바꾸어주는 역할을 합니다.
`.paragraph(AndGateGraphic)`
AND 게이트는 NOT 게이트와는 다르게 두 개의 비트를 입력으로 받습니다. 만약 두 비트가 모두 1이면 1을 출력하고, 아닌 경우는 0을 출력합니다.

다른 게이트도 비슷하게 서로 다른 입력에 대해서 각각의 출력을 내놓습니다. 이렇게 정말 단순한 논리 게이트들이 모여서 수식을 계산하고, 체스를 두면서, 내일의 날씨를 예측해냅니다. 놀라운 일이 아닐 수 없습니다.
`.paragraph(BlochSphereGraphic)`
그럼 이제 양자 컴퓨터는 어떤 요소들을 사용해서 연산을 할까요? 양자 컴퓨터의 경우를 살펴보기 전에, 새로운 개념을 하나 소개해 드리겠습니다. 바로 화면에 보이시는 '블로흐 구면'입니다.

이 블로흐 구면은 큐비트의 상태를 기하적으로 나타낸 것입니다. x축, y축, z축과 구체가 그려져있고, 중심으로부터 표면으로 향하는 빨간색 화살표가 있는 모습을 보실 수 있죠?
---
예를 들어서 이렇게 화살표가 맨 위를 가리키는 경우는 큐비트의 현재 상태가 확실하게 0이다, 즉 0일 확률이 100%라는 것을 나타냅니다.
---
반대로 이렇게 맨 아래를 가리키는 경우는 1일 확률이 100%라는 것을 나타냅니다. 그렇다면 중첩은 어떻게 나타낼까요?
---
이렇게 화살표가 구체의 중간 지점을 가리킨다면, 현재 큐비트의 상태는 0일 확률이 50% 이고 1일 확률이 50%입니다. 0과 1의 상태가 동일한 확률로 중첩 되어있는 것입니다.

눈치를 채셨을지 모르지만, 큐비트를 관측했을 때 0일 확률과 1일 확률은 오직 z축 좌표에 의해서만 결정됩니다. x, y 좌표는 관측 확률에 영향을 주지 않고 상대적 위상(relative phase)을 나타내는데 지금은 일단 넘어가도록 하겠습니다. "화살표가 위에 있을 수록 0에 가깝고, 아래에 있을 수록 1에 가깝구나" 정도로 이해하고 계셔도 괜찮습니다.

왜 굳이 이런 표현 방식을 사용할까요? 바로 양자 컴퓨터에서 사용하는 논리 게이트들의 연산 과정을 아주 직관적으로 표현할 수 있게 해주기 때문입니다. 이게 무슨 의미인지 알아보도록 하겠습니다.
`.paragraph(() => (
  <QuantumGraphic
    inputPhi={0}
    inputTheta={0}
    outputPhi={0}
    outputTheta={Math.PI}
    name="Pauli X"
  />
))`
화면에 보이는 것은 파울리 X 게이트라는 이름의 양자 논리 게이트입니다. 이 양자 게이트는 확률을 반대로 바꾸어 주는 역할을 하는데, 아까 보여드렸던 NOT 게이트에 대응된다고 할 수 있습니다.

예를 들어서 100% 확률로 0인 큐비트를 한 번 넣어보도록 하겠습니다. 버튼을 눌러서 확인해보세요!

100% 확률로 0인 큐비트가 파울리 X 게이트를 통과하니 100% 확률로 1인 큐비트가 나오게 되었습니다. 비트가 반전되었다고 볼 수 있겠죠. 
`.paragraph(() => (
  <QuantumGraphic
    inputPhi={0}
    inputTheta={Math.PI * 0.2}
    outputPhi={0}
    outputTheta={Math.PI * 0.8}
    name="Pauli X"
  />
))`
만약 중첩 상태인 큐비트를 넣으면 어떨까요? 80% 확률로 0이고 20% 확률로 1인 큐비트를 넣어보도록 하겠습니다. 이번에도 버튼을 눌러서 확인해보세요.

그러면 확률이 반대가 되어서, 20% 확률로 0이고 80% 확률로 1인 큐비트가 나오게 됩니다. 확실히 NOT 게이트와 유사한 동작을 한다고 볼 수 있겠죠?
---
그런데 파울리 X 게이트가 "확률을 반대로 뒤집어 준다"라고 할 수 있기는 하지만, 이는 결과적인 표현일 뿐이고 실제로 수학적인 연산 과정이 따로 있습니다. 이 연산을 블로흐 구면 상에서 표현하자면 "화살표를 x축 기준으로 대칭시킨다"라고 할 수 있습니다.

x축을 기준으로 대칭을 시키면, z축의 좌표가 부호 반전이 되어 0과 1의 확률이 서로 바뀌는 것입니다. 확실히 블로흐 구면을 통해서 보니 복잡한 수식을 보지 않고도 정확한 연산 과정을 직관적으로 이해할 수 있게 되었습니다.
`;

export default function Principle2Page() {
  return (
    <ContentViewer
      chapter={2}
      index={3}
      scenes={builder.build()}
      quote={{
        eng:
          "A computer is a stupid machine with the ability to do incredibly smart things.",
        kor: "컴퓨터는 놀랍도록 똑똑한 일을 할 수 있는 멍청한 기계이다.",
        by: "Bill Bryson (빌 브라이슨)",
      }}
    />
  );
}
