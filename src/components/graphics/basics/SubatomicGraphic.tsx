export default function SubatomicGraphic() {
  return (
    <mesh position={[0, -3, 0]} rotation={[0, Math.PI / 4, 0]}>
      <boxBufferGeometry args={[7, 0.3, 7]} />
    </mesh>
  );
}
