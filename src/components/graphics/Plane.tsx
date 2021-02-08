interface PlaneProps {
  opacity?: number;
}

export default function Plane({ opacity }: PlaneProps) {
  return (
    <mesh position={[0, -3, 0]} rotation={[0, 0, 0]} receiveShadow>
      <boxBufferGeometry args={[9, 0.2, 9]} />
      {opacity ? (
        <meshLambertMaterial color="#ced4da" transparent opacity={opacity} />
      ) : (
        <meshLambertMaterial color="#ced4da" />
      )}
    </mesh>
  );
}
