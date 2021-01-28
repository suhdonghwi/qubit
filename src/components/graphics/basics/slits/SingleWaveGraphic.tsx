import SingleSlit from "./SingleSlit";
import Plane from "../../Plane";
import Wave from "./Wave";

export default function SingleWaveGraphic() {
  return (
    <>
      <SingleSlit />
      <Wave
        xOffset={0}
        yOffset={-2}
        amplitude={0.1}
        frequency={2}
        position={[0, -2.5, 2.3]}
        width={9}
        height={4}
      />
      
      <Wave
        xOffset={0}
        yOffset={-3}
        amplitude={0.1}
        frequency={2}
        position={[0, -2.5, -2]}
        width={9}
        height={5}
      />
    </>
  );
}
