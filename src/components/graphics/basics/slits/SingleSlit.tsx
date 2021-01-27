export default function DoubleSlits() {
  return (
    <>
      <mesh position={[-2.4, -1.4, 0.5]} castShadow>
        <boxBufferGeometry args={[4.3, 3, 0.15]} />
        <meshLambertMaterial color="#ced4da" />
      </mesh>

      <mesh position={[2.4, -1.4, 0.5]} castShadow>
        <boxBufferGeometry args={[4.3, 3, 0.15]} />
        <meshLambertMaterial color="#ced4da" />
      </mesh>
    </>
  );
}
