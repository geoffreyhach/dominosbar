import * as React from "react";

interface ILogoProps {
  color?: "white" | "black" | "red" | "blue" | "purple";
  width?: number;
}

export default function Logo({
  color = "white",
  width = 2560,
}: ILogoProps): JSX.Element {
  const height = width * (1440 / 2560);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2560 1440"
      height={height}
      width={width}
      className="group transition-colors duration-600"
    >
      <g transform="matrix(1.3333333,0,0,-1.3333333,0,1440)">
        <path
          className={`fill-${color}`}
          d="M 1005.3177,142.3488 L 1286.0127,282.6958 V 937.6508 L 1005.3177,844.0858 Z"
        />
        <path
          className={`fill-${color}`}
          d="m 927.5353,220.1318 v 330.419 c -25.479,10.948 -53.539,17.033 -83.027,17.033 -116.268,0 -210.521,-94.254 -210.521,-210.521 0,-116.268 94.253,-210.521 210.521,-210.521 44.361,0 85.494,13.753 119.434,37.183 z"
        />
      </g>
    </svg>
  );
}
