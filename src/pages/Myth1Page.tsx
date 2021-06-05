import MythViewer from "../components/MythViewer";
import MythBuilder from "../types/MythBuilder";

const builder = new MythBuilder();

builder.myth("양자역학은 난해함 때문에 진전이 더디다")`
아닙니다. 양자역학은 진전이 더디기는 커녕 오히려 근대에 등장한 학문 중에서 가장 성공한 과학 분야 중 하나입니다. 컴퓨터부터 시작해서 전자기기 중 90% 이상은 양자역학의 발전에 영향을 직간접적으로 받았다고 할 수 있습니다. 양자역학에서 탄생한 이론들은 현실에서의 실험 결과를 매우 잘 예측하며, 그 값도 아주 정확한 편에 속합니다.


다만 양자역학이 난해하다는 것 만큼은 사실인데, 이는 양자역학의 비직관성을 두고 하는 말입니다. 양자역학은 기존의 지식과 너무나도 다른 실험 결과를 내놓았으며, 이를 인정하지 않는 과학자들도 있었습니다. 그리고 그 기묘한 현상 중에는 아직까지도 해석이 되지 않은 부분들이 많습니다.

그래도 양자역학에서 사용되는 공식들의 결과만큼은 정확합니다. 본질이 뭔지는 모르겠지만, 계산은 잘 되니 일단 써먹자는 것이죠. 양자역학의 본질을 읽어내기 위해서, 이론적으로 사용되는 값들과 개념들이 현실에서 어떤 의미를 지니는지 밝혀내기 위한 과학자들의 노력은 계속되고 있습니다.
`.myth("뉴턴의 고전역학은 양자역학에 의해 대체되었다")`
양자역학은 고전역학의 일반화입니다. 양자역학에서 사용되는 공식에서 특정한 변수에 아주 큰 값(거시적인 값)을 취하면 고전역학과 아주 유사한 결과가 나옵니다. 이것을 대응 원리(Correspondence theorem)라고 합니다.

엄밀히 말하자면, 양자역학에 의해서 뉴턴의 고전역학에 아주 작은 오차가 있음이 증명된 것은 맞습니다. 하지만 그 오차는 원자 단위의 수준이며 실용적으로는 그냥 무시해도 될 수준의 오차입니다.

우리가 사람의 키를 잴 때 상대성 이론 공식을 반영하여 신장을 산출하지는 않습니다. 거시 세계의 현상에 있어서는 뉴턴의 고전역학으로도 충분히 정밀한 결과를 내놓을 수 있기 때문입니다. 따라서 양자역학에 의해 고전역학이 대체되었다는 말은 옳지 않습니다.
`.myth("아인슈타인은 양자역학을 부정했다")`
아인슈타인은 양자역학을 만든 사람 중 한 명입니다. 아인슈타인은 광전 효과 이론과 함께 광자라는 개념을 도입하여 양자역학의 시대를 열었습니다.

아인슈타인이 양자역학 자체를 부정했다기 보다는, 당시에 유력한 이론으로 떠올랐던 양자역학의 해석 중 하나인 코펜하겐 해석을 부정했다고 보는 것이 맞습니다. 특히 그는 그가 주창한 특수 상대성 이론에 위배되는 비국소성(non-locality)에 대한 내용을 적극적으로 반박했습니다.

하지만 현재는 코펜하겐 해석을 받아들이는 과학자가 절대적인 다수이며, 아인슈타인의 논리는 틀렸음이 밝혀졌습니다. 하지만 그런 과학적인 토론이 오가는 과정에서 양자역학 이론의 부족한 부분들이 많이 강화되었으며 역설적이게도 아인슈타인은 양자역학에 가장 많은 공헌을 한 과학자 중 한 명으로 남게 되었습니다.
`;

export default function Myth1Page() {
  return <MythViewer chapter={3} index={1} myths={builder.build()} />;
}
