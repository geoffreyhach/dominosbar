import * as React from "react";

interface IFacebookBtnProps {
  color?: "white" | "black" | "red" | "blue" | "purple";
  width?: number;
  url?: string;
}

export default function FacebookBtn({
  width = 24,
  url = "https://www.facebook.com/dominosbarlemberg/",
}: IFacebookBtnProps): JSX.Element {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width={width}
        height={width}
        viewBox="0 0 30 30"
        className="transition-transform duration-300 hover:scale-110 cursor-pointer"
      >
        <path
          className={`fill-white`}
          d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h10v-9h-3v-3h3v-1.611C16,9.339,17.486,8,20.021,8 c1.214,0,1.856,0.09,2.16,0.131V11h-1.729C19.376,11,19,11.568,19,12.718V14h3.154l-0.428,3H19v9h5c1.105,0,2-0.895,2-2V6 C26,4.895,25.104,4,24,4z"
        ></path>
      </svg>
    </a>
  );
}
