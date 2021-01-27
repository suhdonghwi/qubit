export default function Plane() {
  return (
    <mesh position={[0, -3, 0]} rotation={[0, 0, 0]} receiveShadow>
      <boxBufferGeometry args={[9, 0.2, 9]} />
      <meshLambertMaterial color="#ced4da" />
    </mesh>
  );
}
