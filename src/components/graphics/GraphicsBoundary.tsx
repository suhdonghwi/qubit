import { Component, type ReactNode } from "react";

export default class GraphicsBoundary extends Component<
  { children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    return this.state.failed ? (
      <div className="graphics-message" role="status">
        <p>3D 그래픽을 불러오지 못했습니다. 설명은 계속 읽을 수 있습니다.</p>
        <button onClick={() => this.setState({ failed: false })}>다시 시도</button>
      </div>
    ) : this.props.children;
  }
}
