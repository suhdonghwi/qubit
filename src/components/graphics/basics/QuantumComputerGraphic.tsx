import Plane from "../Plane";

export default function QuantumComputerGraphic() {
  return (
    <>
      <mesh castShadow position={[0, 0, 0]}>
        <boxBufferGeometry args={[1, 5, 1]} />
        <meshLambertMaterial color="pink" />
      </mesh>
      <Plane />
    </>
  );
}
