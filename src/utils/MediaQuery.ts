export const maxWidth = (x: number) =>
  `@media screen and (orientation: portrait) and (max-width: ${x}px), screen and (orientation: landscape) and (max-width: ${
    x * 2
  }px)`;

export const maxHeight = (x: number) =>
  `@media screen and (orientation: portrait) and (max-height: ${
    x * 2
  }px), screen and (orientation: landscape) and (max-height: ${x}px)`;
