import * as React from "react";
const KakaoSvg = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="none" {...props}>
    <g clipPath="url(#a)">
      <path
        fill="#000"
        fillRule="evenodd"
        d="M9 .6C4.03.6 0 3.713 0 7.552c0 2.388 1.558 4.493 3.932 5.745l-.999 3.648c-.088.322.28.579.563.392l4.377-2.889c.37.036.745.057 1.127.057 4.97 0 9-3.113 9-6.953C18 3.712 13.97.6 9 .6Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h18v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default KakaoSvg;
