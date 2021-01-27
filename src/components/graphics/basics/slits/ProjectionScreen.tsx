export default function ProjectionScreen() {
  return (
    <mesh position={[0, -0.5, -4.3]}>
      <boxBufferGeometry args={[9, 5, 0.3]} />
      <meshLambertMaterial color="#ced4da" />
    </mesh>
  );
}
