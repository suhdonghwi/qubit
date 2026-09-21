# Qubit modernization

Work is kept on `codex/modernize-qubit` in focused commits. The original application is preserved in Git at `c34f300`.

## Baseline

Source audit: eight routes, approximately 6,100 source lines, no application tests. The original dice has 78,685 triangles and is 2,151,868 bytes. The old application uses React 17, CRA 4, Fiber 5, Three r124 and patched prerelease Spring packages. No original-device frame-time measurements have been captured; source findings must not be presented as measured speedups.

## Delivery sequence

1. Vite, supported React 19/Fiber 9/Three stack, compiler integration and API compatibility.
2. Declarative scene lifecycle, deterministic experiment state and time-based animation.
3. Graphics resource reuse, model/particle optimization and consistent presentation.
4. Accessible controls, mobile layout, route loading and resilient graphics boundaries.
5. Regression tests, CI, documentation and final verification.

React 19.2.8 is deliberate: Fiber 9.7.0 declares React >=19 and <19.3. Do not bypass that peer requirement. Dependencies are pinned in package.json and package-lock.json. Use Node 24.15+ LTS and npm ci.

Styling is initially retained during the renderer migration. Full CSS Modules conversion and build-time lesson prerendering are separate architectural changes and must be tracked honestly if deferred.
