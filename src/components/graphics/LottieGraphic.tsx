import React from "react";

import Lottie from "react-lottie-player";

interface LottieGraphicProps {
  data: object;
  loop?: boolean;
}

export default function LottieGraphic({ data, loop }: LottieGraphicProps) {
  return (
    <Lottie
      loop={loop}
      animationData={data}
      play={true}
      style={{ width: "100%" }}
    />
  );
}
