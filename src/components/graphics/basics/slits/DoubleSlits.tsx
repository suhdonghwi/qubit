export default function DoubleSlits() {
  return (
    <>
      <mesh position={[-2.8, -1.4, 0.5]} castShadow>
        <boxBufferGeometry args={[3.3, 3, 0.15]} />
        <meshLambertMaterial color="#ced4da" />
      </mesh>

      <mesh position={[2.8, -1.4, 0.5]} castShadow>
        <boxBufferGeometry args={[3.3, 3, 0.15]} />
        <meshLambertMaterial color="#ced4da" />
      </mesh>

      <mesh position={[0, -1.4, 0.5]} castShadow>
        <boxBufferGeometry args={[1.5, 3, 0.15]} />
        <meshLambertMaterial color="#ced4da" />
      </mesh>
    </>
  );
}
