import React from "react";
import dynamic from "next/dynamic";

type LottieProps = {
  options: {
    loop: boolean;
    autoplay: boolean;
    path: string;
  };
};

const Lottie = dynamic<LottieProps>(() => import("react-lottie").then(module => module.default as unknown as React.ComponentType<LottieProps>), { ssr: false });

type Props = {
  animationPath: string;
};

const GreetingLottie = ({ animationPath }: Props) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    path: animationPath,
  };

  return (
    <div onClick={() => null}>
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default GreetingLottie;
