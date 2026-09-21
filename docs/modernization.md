# Qubit modernization

Work is kept on `codex/modernize-qubit` in focused commits. The original application is preserved in Git at `c34f300`.

## Baseline and scope

The source audit found eight routes, approximately 6,100 source lines and no application tests. The original dice contained 78,685 triangles and occupied 2,151,868 bytes. The old application used React 17, CRA 4, Fiber 5, Three r124 and patched prerelease Spring packages.

No original-device frame-time measurements were captured. Asset sizes, source-level reductions in work, and bundle sizes must not be described as measured FPS improvements.

Preserve the existing visible interface and copy. Do not introduce controls, helper text, status messages, or other product UI without an explicit request. The initially added playback controls and hints were removed in a dedicated correction commit.

## Implemented architecture

- Vite 8 and strict TypeScript 6 replace CRA. React Compiler uses the official Vite/Babel integration; its lint rules are enabled. Generated bundles contain compiler memoization code.
- React 19.2.8 is deliberate: Fiber 9.7.0 declares React >=19 and <19.3. Dependencies are pinned in package.json and package-lock.json. Use Node 24.15+ LTS and npm ci.
- Route modules load lazily. Text-only pages do not initialize graphics or fetch models.
- A build-only React server render resolves lazy routes and generates complete lesson HTML. The browser hydrates matching routes. Both clean `.html` paths and directory indexes are emitted for static hosts; an SPA fallback must not override these files.
- styled-components is retained, upgraded, and configured with stable SSR identifiers. This preserves the existing design without mixing a CSS rewrite into the renderer migration.
- Viewer state is local to a lesson. A single spring moves all scenes together, so forward and reverse scrolling share continuous movement. Scenes stay mounted and retain paragraph and experiment state; distant scene animations pause. Landing previews mount ahead of scrolling instead of being recreated on viewport entry.
- Geometry uses modern buffer attributes. Arbitrary function surfaces avoid recomputing settled geometry. Double-slit waves use GPU displacement with analytic normals. Custom gradient shaders own their resources declaratively and include output color conversion.
- Particles and impact patterns are instanced. The dice is generated procedurally, removing the original model download. Smaller spheres use fewer segments.
- Motion uses delta time, cancellation-aware springs, and visibility/reduced-motion handling. The original 3D buttons support keyboard activation through the existing canvas; the existing menu supports touch and keyboard navigation.
- Measurements sample at interaction time and remain stable across rerenders. Probability-to-angle conversion now keeps the 20% example consistent with the Bloch sphere.
- Pretendard is bundled locally for page text and 3D labels, with its license included. Page text uses variable Unicode subsets to avoid downloading unused glyphs.

## Verification

Use `npm run typecheck`, `npm run lint`, and `npm run build`. Manually inspect landing previews and lesson scrolling in both directions, including reversing during a transition. There is no automated browser suite, unit-test framework, or CI setup; maintenance stays lightweight for this project.

Real-device frame times and Safari/Firefox behavior have not been measured. Source optimizations are not FPS benchmarks.

## Deliberate follow-ups

- CSS Modules conversion is optional and deferred; current styled-components already works with the modern build, compiler, and static rendering.
- Graphics folders retain their existing numeric chapter grouping to keep this migration reviewable. A semantic feature-folder reorganization can be done independently.
- A comprehensive scientific/content review is separate from the concrete probability correction. Existing educational metaphors and prose are retained.
- WebGPU/TSL is not part of this migration; existing GLSL shaders use the supported WebGL renderer.
- Full GPU profiling on target devices should precede additional postprocessing, higher geometry budgets, or renderer changes.
