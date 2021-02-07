export default function bell(
  spread: number,
  amplitude: number,
  xOffset: number,
  yOffset: number,
  x: number,
  y: number
) {
  return (
    -amplitude *
    Math.exp(
      -(
        (Math.pow(x - xOffset, 2) + Math.pow(y - yOffset, 2)) /
        (2 * Math.pow(spread, 2))
      )
    )
  );
}
