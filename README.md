# [Qubit](https://qubit.donghwi.dev)

양자 컴퓨터의 원리에 대해서 3D 대화형 그래픽과 함께 단계별로 알아갈 수 있는 웹사이트입니다.

```
✏️ 만약 잘못된 내용/수정이 필요한 내용을 발견하셨다면, 본 레포에 이슈를 올려주시면 감사하겠습니다.
```

![Example content image](https://user-images.githubusercontent.com/8275026/107494245-e63c9900-6bd1-11eb-90cf-8aeb0acf8fdd.png)

## 🔗 주요 라이브러리

- [three.js](https://threejs.org)
- [react-three-fiber](https://github.com/pmndrs/react-three-fiber)
- [react-intersection-observer](https://github.com/thebuilder/react-intersection-observer)
- [react-spring](https://www.react-spring.io)

## Development

Use Node 24.15+ LTS (`nvm use`) and npm. The supported React/Fiber versions are pinned together; Fiber 9.7 currently requires React below 19.3.

```sh
npm ci
npm run dev
```

The app uses Vite 8, TypeScript 6, React 19.2 with React Compiler, React Three Fiber 9, Three.js, Drei, and React Spring. Fonts are bundled locally; their licenses are in `public/font-licenses`.

```sh
npm run typecheck
npm run lint
npm run build
```

`npm run build` generates a static site in `dist`, including HTML for all eight routes. `npm run preview` serves the production output locally. Hosting must serve emitted files before applying an SPA fallback: each lesson is emitted both as a clean-URL `.html` file and a directory `index.html`. No application server is required in production. Unknown routes retain the original redirect behavior.

Verification stays lightweight: type-checking, linting, a production build, and manual browser checks.

## Graphics maintenance

- Keep high-frequency animation in `useSceneFrame`; it supplies a capped delta and a zero delta when motion is paused. Do not sample measurements during rendering.
- `World3D` manages visibility, reduced motion, pixel density, camera sizing, and renderer errors without adding controls or copy.
- Lesson scenes stay mounted on a shared sliding strip, preserving experiment state and moving together in either scroll direction. Offscreen landing previews stay mounted so scrolling does not trigger a fresh canvas load.
- Use declarative geometry/material ownership. Shared GLTF resources are loader-owned; generated model components intentionally retain `dispose={null}`.
- Particles use instancing, the dice is procedural, and double-slit waves deform in a vertex shader. Keep shader color-space conversion and normals consistent when editing materials.
- Preserve existing visible content and interface elements unless a product change is explicitly requested.

See [modernization notes](docs/modernization.md) for decisions, verification scope, and remaining work.
