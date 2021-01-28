export default function StartFlag() {
  return (
    <>
      <mesh position={[0, -2, 0]}>
        <cylinderBufferGeometry args={[0.1, 0.1, 2, 32]} />
        <meshLambertMaterial color="#ffe066" />
      </mesh>

      <mesh position={[0.5, -1.5, 0.5]} rotation={[0, -Math.PI / 4, 0]}>
        <boxBufferGeometry args={[1.2, 0.8, 0.1]} />
        <meshLambertMaterial color="#fa5252" />
      </mesh>

      <mesh position={[0, -3, 0]}>
        <cylinderBufferGeometry args={[0.3, 0.3, 0.03, 32]} />
        <meshLambertMaterial color="#868e96" />
      </mesh>

      {[1, 2, 3, 4, 5].map((n) => (
        <mesh key={n} position={[n, -3, n]}>
          <cylinderBufferGeometry args={[0.15, 0.15, 0.03, 32]} />
          <meshLambertMaterial color="#868e96" />
        </mesh>
      ))}
    </>
  );
}
