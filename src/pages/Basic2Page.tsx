import React from "react";
import ContentViewer from "../components/ContentViewer";

import ContentBuilder from "../types/ContentBuilder";

import {
  WaveParticleGraphic,
  SuperpositionGraphic,
  WaveFunctionGraphic,
  DiceGraphic,
  MeasureGraphic,
  EntanglementGraphic,
} from "../components/graphics/2";

const builder = new ContentBuilder();

builder.paragraph(WaveParticleGraphic)`
앞 페이지에서 보셨듯, 전자를 비롯한 양자 물질들은 어떨 때는 입자처럼 행동하다가 어떤 때는 파동처럼 행동했습니다. 이런 성질을 일컬어서 '파동-입자 이중성' 이라고 합니다. 사실 이 성질은 클라우스 존슨이 전자로 이중 슬릿 실험을 하기 한참 전에 규명된 사실입니다. 클라우스 존슨은 실험적인 결과를 내놓은 것입니다. 심지어 전자, 광자 뿐만 아니라 모든 물질이 파동의 성질을 조금이나마 가지고 있다는 것 또한 밝혀졌습니다.

그리고 이런 이론을 기반으로 한 양자역학은 미시 세계의 현상을 거의 완벽에 가깝게 예측해냈습니다. 현실을 수학적, 물리적으로 계산해내는 데에 성공한 것입니다.
---
하지만 딱 거기까지였습니다. 수학 공식과 계산이 과학의 본질은 아닙니다. 과학자들은 현상을 계산해낼 수 있었지만, 거기에 사용되는 개념들이 대체 '실제 세계에서 무엇을 뜻하는지' 몰랐습니다.

예를들어, 우리가 뉴턴의 F = ma 라는 공식에 대해서는 F는 힘이고, m은 질량, a는 가속도라는 것을 알고 있습니다. 그리고 각각은 물리학에서 명료하게 정의된 개념입니다.

하지만 양자역학에서 사용되는 공식은, '결과값은 정확하게 나오지만 중간에 튀어나오는 값들이 대체 무엇을 의미하는 값인지' 모르는 상태라는 것입니다.
`.paragraph(SuperpositionGraphic)`
그래서 과학자들은 양자역학을 현실의 관점에서 해석하는 다양한 방식을 제시하였고, 그 중 현재 가장 널리 받아들여지는 것이 바로 '코펜하겐 해석'입니다. 코펜하겐 해석에 따르면, 전자 이중 슬릿 실험은 다음과 같이 해석됩니다.

"전자는 관측되기 전까지 확률적으로 존재 가능한 모든 위치에 동시에 존재하며, 관측되는 순간 하나의 위치로 결정된다."

이런 현상을 양자 중첩(Quantum superposition)이라고 합니다. 동시에 여러 상태가 중첩되어 있다는 말입니다. 관측되지 않은 전자는 이쪽에 있을 확률, 저쪽에 있을 확률 등등이 중첩되어 있었기 때문에 서로 간섭하는 파동처럼 행동했고, 관측되는 순간 다른 곳에 존재할 확률이 없어지고 하나의 위치로 결정되었기 때문에 그 뒤로는 입자처럼 행동했다는 것입니다.
`.paragraph(WaveFunctionGraphic)`
관측하기 전까지는 여러 상태가 중첩되어 있다가, 관측하는 순간 하나로 결정된다는 것이 무슨 의미일까요?

입자의 상태에 관한 확률은 '파동 함수'로부터 얻어집니다. 화면에서 보시는 것은, 아직 관측이 안된 전자가 특정 위치에 존재할 확률을 나타낸 파동 함수(정확히는 파동 함수의 절댓값의 제곱)를 시각화한 것입니다. 보시다시피 중간 부분에 존재할 확률이 가장 높고, 중간에서 멀어질 수록 점점 확률이 작아집니다. 하지만 관측을 하는 순간..
---
이렇게 위치가 결정되면서 다른 위치에 존재할 확률은 0에 수렴하게 되고 파동 함수가 '붕괴'합니다.

이는 마치, 여러분이 즉석 로또를 샀을 때 긁어보기 전에는 당첨되는 상태와 당첨되지 않는 상태가 중첩되어 있지만 긁는 순간 둘 중 하나로 결정되면서 다른 하나의 상태가 될 확률은 없어지는 것과 비슷합니다.
`.paragraph(DiceGraphic, "Dice graphic by Igor Volodin at poly.google.com")`
이런 확률론적 해석은 초기에 일부 물리학자들의 반발을 샀습니다. 특히, 역사상 가장 위대한 과학자 중 한 명인 알버트 아인슈타인 또한 코펜하겐 해석을 완강하게 부인했습니다. "신은 주사위를 던지지 않는다."와 같은 명언을 남기면서 말이죠. 코펜하겐 해석의 대표 주자 중 한 명인 보어는 이에 대해서 "신이 주사위 가지고 뭘 하든 상관하지 말라."라며 강경하게 대응하기도 했습니다.

현재 물리학계에서는 상당수의 과학자가 코펜하겐 해석을 받아들이고 있고, 아인슈타인이 틀렸었음을 인정하고 있습니다. 그렇지만 코펜하겐 해석이 완벽하게 옳은 이론이라는 것은 아니며, 논란의 여지가 많은 것 또한 사실입니다. 아직까지도 양자역학의 새로운 해석 방식이 끊임없이 연구되는 중입니다.
`.paragraph(MeasureGraphic)`
정리하자면, 양자 중첩은 양자 물질이 관측되기 전까지 가능한 상태가 모두 확률적으로 중첩되어있는 상태를 일컫는 말입니다.

화면에서 버튼을 눌러서 한 번 확인해보세요. 관측을 하기 전 우글우글거리는 물체는 빨간색인 상태와 파란색인 상태가 중첩되어있음을 나타낸 것이고, 버튼을 눌러 관측하면 두 상태 중 하나로 결정되게 됩니다.

이 양자 중첩은 양자역학의 굉장히 기본적인 원리이고, 양자 컴퓨터의 원리를 설명할 때도 중요한 역할을 하니 잘 알아두셨으면 좋겠습니다.
`.paragraph(EntanglementGraphic)`
양자 중첩 외에도 중요한 성질이 하나 더 있습니다. 바로 양자 얽힘(Quantum entanglement)입니다. 양자 얽힘은 말 그대로 양자 물질들이 서로 얽혀있는 현상인데요, 과연 얽혀있다는게 무슨 의미일까요?

여기에 두 개의 양자 물질이 있습니다. 이 양자 물질들은 빨간색이거나 파란색인 상태를 가질 수 있지만, 현재는 두 상태가 동시에 중첩되어있습니다.

두 물질은 서로 '얽혀' 있는데, 두 물질의 색은 항상 반대이도록, 즉 하나가 빨간색이면 나머지 하나는 파란색, 하나가 파란색이면 나머지 하나는 빨간색이 되는 방식으로 얽혀있습니다.
---
자, 이제 버튼을 눌러서 한 번 확인해보세요. 하나를 관측해서 색을 결정하면 나머지 하나는 관측을 하지 않았음에도 반대의 색으로 결정이 되는 모습을 볼 수 있습니다.

하나의 양자 상태를 결정하면 다른 하나의 양자 상태 또한 동시에 결정되는 것, 이것이 양자 얽힘입니다. 양자 얽힘이 놀라운 이유는, 이 현상이 거리에 무관하게 발생한다는 것입니다. 즉, 얽혀있는 두 양자 물질을 우주의 양 끝에 배치한다고 하더라도 하나를 관측하면 순식간에 우주 너머에 있는 다른 물질의 상태를 알 수 있게 된다는 것입니다.
---
이는 곧 '빛보다 빠른 무언가'을 의미했고, 광속을 넘어서는 정보의 전달은 특수 상대성이론에 위배되었기 때문에 아인슈타인은 양자 얽힘을 부정했습니다. 하지만 이후 '양자 얽힘을 통해 실제로 유의미한 정보가 전달되지는 않는다'라는 주장이 힘을 얻으면서 양자 얽힘 이론은 유지될 수 있었습니다.

어찌보면 양자 얽힘은 양자 중첩보다도 더 기묘한 현상이라고 볼 수 있습니다. 아인슈타인은 이를 으스스한 현상(spooky action)이라고 표현하기까지 했습니다. 아직 양자 얽힘이 어떤 이유에서 발생하는 것인지, 이에 대한 근본적이고 합리적인 해석을 내놓은 이론은 없습니다.
---
이제 양자역학의 기초적인 내용과 함께, 양자 컴퓨터를 받아들일 준비가 되신 것 같습니다. 양자역학의 대표적인 응용분야 중 하나인, 양자 컴퓨터에 대해서 알아가보도록 합시다!
`;

export default function Basic2Page() {
  return (
    <ContentViewer
      chapter={1}
      index={2}
      scenes={builder.build()}
      quote={{
        eng: "Stop telling God what to do with his dice.",
        kor: "신이 주사위 가지고 뭘 하든 상관하지 말라.",
        by: "Niels Bohr (닐스 보어)",
      }}
    />
  );
}
