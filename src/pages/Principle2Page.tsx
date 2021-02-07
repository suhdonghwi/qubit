import React from "react";
import ContentViewer from "../components/ContentViewer";

import ContentBuilder from "../types/ContentBuilder";

import SubatomicGraphic from "../components/graphics/1/SubatomicGraphic";
import CubeGraphic from "../components/graphics/4/CubeGraphic";
import DiceGraphic from "../components/graphics/4/DiceGraphic";
import GuessGraphic from "../components/graphics/4/GuessGraphic";
import ComputerGraphic from "../components/graphics/3/ComputerGraphic";
import QuantumGuessGraphic from "../components/graphics/4/QuantumGuessGraphic";
import WaveFunctionGraphic from "../components/graphics/4/WaveFunctionGraphic";

const builder = new ContentBuilder();

builder.paragraph(
  CubeGraphic,
  "Cube graphic by Butanol Mustermann in poly.google.com"
)`
이번 페이지는, 양자 컴퓨팅의 핵심이라고 할 수 있는 양자 알고리즘에 대해서 알아보겠습니다. 내용이 많고 복잡할 수 있지만, 최대한 간단하고 이해하기 쉽게 설명하기 위해 노력해보겠습니다.

우선 알고리즘이란, 특정한 문제를 해결하기 위한 절차를 말합니다. 컴퓨터는 주어진 문제를 해결하기 위해서, 정해진 절차를 따라가며 계산을 합니다. 여기서 문제는 어떤 것이든 될 수 있습니다.
`.paragraph(DiceGraphic)`
양자 알고리즘에 대해서 보기 전에, 고전 컴퓨터의 알고리즘에 대해서 먼저 알아보도록 하겠습니다.

아주 간단한 문제를 하나 볼까요? 0부터 7까지의 정수 중에서 무작위하게 하나를 고르고, 컴퓨터에게 고른 숫자가 무엇인지 맞춰보라는 문제를 내봅시다. 고전 컴퓨터로는 이 문제를 어떻게 접근할 수 있을까요?

아쉽게도 숫자의 범위 말고는 주어진 힌트가 하나도 없으므로, 그냥 때려맞추는 방법 밖에 없습니다.
`.paragraph(() => (
  <GuessGraphic input={[false, false, true]} correct={false} />
))`
예를 들어 정답 숫자가 3이라고 해봅시다. 첫번째 시도에서는 숫자 1을 나타내는 비트 001을 넣어보겠습니다. 버튼을 눌러서 직접 확인해보세요!

그러면 문제 기계가 들어온 입력 비트를 관측하고, 정답과 비교합니다. 정답은 3인데 1로 관측되었으니 틀렸다고 하겠죠?
`.paragraph(() => <GuessGraphic input={[true, false, true]} correct={false} />)`
두번째 시도입니다. 두번째 시도에서는 숫자 5을 나타내는 비트 101을 넣어보겠습니다.

역시 틀렸다고 나옵니다.
`.paragraph(() => <GuessGraphic input={[false, true, true]} correct={true} />)`
세번째 시도입니다. 이번에는 숫자 3을 나타내는 비트 011을 넣어보겠습니다.

그러면 들어온 비트를 관측하고, 정답과 일치하니 맞았다고 해줍니다. 세번째 시도만에 맞췄네요!
`.paragraph(ComputerGraphic)`
고전 컴퓨터는 이 문제를 이런 방식으로 접근하는 것이 최선입니다. 아무런 정보가 없는 상태에서 랜덤한 숫자를 맞추라고 하니 그냥 하나씩 넣어보는 방법 밖에는 없는 것입니다. 각 시도에서 정답을 맞출 확률은 1/8 이겠죠.

그나마 아까 보여드린 예시에서는 세번째 시도만에 맞추었지만, 운이 정말 안좋다면 7번만에 맞추었을 수도 있습니다. 숫자의 범위가 커지면 커질수록 각 시도에서 정답을 맞출 확률은 줄어듭니다. 만약 숫자의 범위가 1 부터 1,000,000이었다면? 로또를 사는 것이 차라리 나아보입니다.
`.paragraph(QuantumGuessGraphic)`
자, 그럼 이제 양자 컴퓨터의 경우를 보도록 하겠습니다. 양자 컴퓨터는 입력으로 고전적인 비트 대신 큐비트를 넣습니다. 양자 컴퓨터는 이 문제를 어떻게 해결할까요? 과연 고전 컴퓨터보다 효율적으로 해결할 수 있을까요?

양자 컴퓨터의 효율성에 대해서는 오해가 많습니다. 가령, "큐비트는 모든 상태가 중첩되어 있기 때문에 가능한 상태를 모두 병렬적으로 동시에 확인해볼 수 있다" 라고 생각하시는 경우가 있습니다. 이 말이 맞다면, 양자 컴퓨터는 숫자 맞추기 문제를 항상 첫번째 시도만에 해결할 수 있을 것입니다. 0부터 7까지 중첩된 상태를 넣으면 그 중 하나는 정답일테니까요!

...하지만 불행하게도 이는 사실이 아닙니다. 한 번 직접 넣어보도록 하겠습니다.
---
버튼을 눌러서 모든 상태가 같은 확률로 중첩되어있는 상태의 큐비트를 넣어보세요. 그러면 문제 기계 내부에서 입력을 정답과 비교하기 위해서 "관측"을 합니다. 바로 이 관측 단계에서 문제가 발생합니다.

양자 중첩 상태는 관측을 하는 순간 하나의 상태로 결정되며, 중첩인 상태가 풀린다고 했었죠. 중첩 상태인 큐비트를 넣어봤자 정답과 비교하기 위해 관측을 하는 이상 하나로 결정된 상태를 넣은 것이나 다름 없습니다.
`.paragraph(WaveFunctionGraphic)`
지금 이 상황을 이전에 보여드렸던 파동함수(의 절댓값의 제곱) 그래프로 나타내면 이렇습니다.

틀린 답안을 관측하게 될 확률이 더 높고, 맞는 답안을 관측하게 될 확률은 현저하게 작습니다. 즉, 중첩이 되었건 어쨌건 마지막에 관측을 했을 때 정답이 나오게 될 확률은 여전히 1/8인 것입니다. 나머지 7/8 확률로는 오답을 관측하게 됩니다.

그럼, 결국에는 고전 컴퓨터랑 똑같을 뿐인데 대체 양자 컴퓨터가 왜 효율적이라는 것이며, 어떤게 혁신적이라는 것일까요?
---
양자 컴퓨터의 혁신성은 양자 알고리즘에 있습니다. 양자 알고리즘은, 양자역학의 원리를 이용해서 틀린 답안이 관측될 확률을 줄이고 맞는 답안이 관측될 확률을 높입니다. 실제로 관측을 하기 전에 말이죠.

그렇게 되면, 관측을 했을 때 더 높은 확률로 맞는 답안이 나오게 될 것이고, 궁극적으로는 전체적인 알고리즘 실행 시간이 줄어들게 되는 것입니다. 정답을 맞추기 위해 무작위하게 때려 맞추는 횟수가 훨씬 더 줄어들기 때문입니다.
`;

export default function Principle2Page() {
  return (
    <ContentViewer
      chapter={2}
      index={2}
      scenes={builder.build()}
      quote={{
        eng: "There is nothing so practical as a good theory.",
        kor: "좋은 이론만큼 실용적인 것은 없습니다.",
        by: "Kurt Lewin (쿠르트 레빈)",
      }}
    />
  );
}
