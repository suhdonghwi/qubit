export default function Plane() {
  return (
    <mesh position={[0, -3, 0]} rotation={[0, 0, 0]} receiveShadow>
      <boxBufferGeometry args={[7, 0.2, 7]} />
      <meshLambertMaterial color="#ced4da" />
    </mesh>
  );
}
