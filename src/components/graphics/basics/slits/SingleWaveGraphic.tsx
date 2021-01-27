import SingleSlit from "./SingleSlit";
import Wave from "./Wave";

export default function SingleWaveGraphic() {
  return (
    <>
      <SingleSlit />
      <Wave xOffset={0} yOffset={0} amplitude={0.1} frequency={1} />
    </>
  );
}
