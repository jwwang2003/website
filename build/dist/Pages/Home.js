import React, {useState} from "../../_snowpack/pkg/react.js";
import {Card, Spinner} from "../../_snowpack/pkg/react-bootstrap.js";
import image from "../static/me2.jpg.proxy.js";
export default function Home() {
  const [img, setImg] = useState(false);
  return /* @__PURE__ */ React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      height: "100%",
      alignItems: "center",
      padding: "20px 10px 20px 10px",
      overflow: "auto"
    }
  }, /* @__PURE__ */ React.createElement("div", {
    style: {
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      width: "100%"
    }
  }, /* @__PURE__ */ React.createElement(Card, {
    className: "text-center",
    style: {width: "80%", maxWidth: "500px"}
  }, /* @__PURE__ */ React.createElement(Card.Img, {
    alt: "Picture of myself",
    id: "img",
    variant: "top",
    src: image,
    onLoad: () => setImg(true),
    style: {display: "none"}
  }), !img ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Spinner, {
    animation: "border",
    variant: "secondary",
    style: {alignSelf: "center"}
  })) : /* @__PURE__ */ React.createElement(React.Fragment, null, document.getElementById("img").removeAttribute("style")), /* @__PURE__ */ React.createElement(Card.Body, null, /* @__PURE__ */ React.createElement(Card.Text, null, "Hi, my name is Jimmy Wang and I am currently a graduating high school student residing in Surrey, Canada, who wishes to persue computer science. This is also my firstself-hosted website built with ", /* @__PURE__ */ React.createElement(SnowPackLOGO, null), "Snowpack, ", /* @__PURE__ */ React.createElement(ReactLOGO, null), " React, and ", /* @__PURE__ */ React.createElement(NodeJSLOGO, null), ".")), /* @__PURE__ */ React.createElement(Card.Footer, {
    className: "text-muted"
  }, "Updated March 2021"))));
}
function SnowPackLOGO() {
  return /* @__PURE__ */ React.createElement("svg", {
    className: "snow-logo-icon",
    viewBox: "0 0 640 512",
    height: "18px",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("g", {
    transform: "translate(-1.000000, 0.000000)",
    fill: "#2e5e82"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M635.92,462.7 L347.92,14.7 C342.03,5.54 331.89,0 321,0 C310.11,0 299.97,5.54 294.08,14.7 L6.08,462.7 C-0.250773249,472.547007 -0.699487627,485.064987 4.91,495.34 C10.522069,505.612419 21.2945349,512 33,512 L609,512 C620.71,512 631.48,505.61 637.09,495.33 C642.699457,485.058495 642.250708,472.543372 635.92,462.7 Z M321,91.18 L406.39,224 L321,224 L257,288 L218.94,249.94 L321,91.18 Z",
    id: "Shape"
  })));
}
function ReactLOGO() {
  return /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "18",
    height: "18",
    viewBox: "0 0 32 32"
  }, /* @__PURE__ */ React.createElement("g", {
    transform: "matrix(.05696 0 0 .05696 .647744 2.43826)",
    fill: "none",
    fillRule: "evenodd"
  }, /* @__PURE__ */ React.createElement("circle", {
    r: "50.167",
    cy: "237.628",
    cx: "269.529",
    fill: "#00d8ff"
  }), /* @__PURE__ */ React.createElement("g", {
    stroke: "#00d8ff",
    strokeWidth: "24"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M269.53 135.628c67.356 0 129.928 9.665 177.107 25.907 56.844 19.57 91.794 49.233 91.794 76.093 0 27.99-37.04 59.503-98.083 79.728-46.15 15.29-106.88 23.272-170.818 23.272-65.554 0-127.63-7.492-174.3-23.44-59.046-20.182-94.61-52.103-94.61-79.56 0-26.642 33.37-56.076 89.415-75.616 47.355-16.51 111.472-26.384 179.486-26.384z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M180.736 186.922c33.65-58.348 73.28-107.724 110.92-140.48C337.006 6.976 380.163-8.48 403.43 4.937c24.248 13.983 33.042 61.814 20.067 124.796-9.8 47.618-33.234 104.212-65.176 159.6-32.75 56.788-70.25 106.82-107.377 139.272-46.98 41.068-92.4 55.93-116.185 42.213-23.08-13.3-31.906-56.92-20.834-115.233 9.355-49.27 32.832-109.745 66.8-168.664z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M180.82 289.482C147.075 231.2 124.1 172.195 114.51 123.227c-11.544-59-3.382-104.11 19.864-117.566 24.224-14.024 70.055 2.244 118.14 44.94 36.356 32.28 73.688 80.837 105.723 136.173 32.844 56.733 57.46 114.21 67.036 162.582 12.117 61.213 2.31 107.984-21.453 121.74-23.057 13.348-65.25-.784-110.24-39.5-38.013-32.71-78.682-83.253-112.76-142.115z"
  }))));
}
function NodeJSLOGO() {
  return /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 442.4 270.9",
    height: "20px"
  }, /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "b",
    x1: "180.7",
    y1: "80.7",
    x2: "142.6",
    y2: "158.4",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    offset: "0",
    stopColor: "#3f873f"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: ".3",
    stopColor: "#3f8b3d"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: ".6",
    stopColor: "#3e9637"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: ".9",
    stopColor: "#3da92e"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#3dae2b"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "d",
    x1: "157.2",
    y1: "121.3",
    x2: "264",
    y2: "42.4",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    offset: ".1",
    stopColor: "#3f873f"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: ".4",
    stopColor: "#529f44"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: ".7",
    stopColor: "#63b649"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: ".9",
    stopColor: "#6abf4b"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "a",
    x1: "114.6",
    y1: "53.8",
    x2: "212",
    y2: "53.8",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    offset: ".1",
    stopColor: "#6abf4b"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: ".3",
    stopColor: "#63b649"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: ".6",
    stopColor: "#529f44"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: ".9",
    stopColor: "#3f873f"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "e",
    x1: "114.9",
    y1: "115.7",
    x2: "212.3",
    y2: "115.7"
  }), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "f",
    x1: "114.6",
    y1: "143.4",
    x2: "212",
    y2: "143.4"
  }), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "g",
    x1: "114.9",
    y1: "156",
    x2: "212.3",
    y2: "156"
  }), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "h",
    x1: "226.5",
    y1: "78.4",
    x2: "166.4",
    y2: "201"
  }), /* @__PURE__ */ React.createElement("clipPath", {
    id: "c",
    transform: "translate(-.3)"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M166.1 62.6a5 5 0 00-5 0L118.8 87a5 5 0 00-2.5 4.4V140a5 5 0 002.5 4.4l42.1 24.3a5 5 0 005 0l42.2-24.3a5 5 0 002.6-4.4V91.3a5 5 0 00-2.6-4.4z",
    fill: "url(#b)",
    clipRule: "evenodd"
  }))), /* @__PURE__ */ React.createElement("path", {
    d: "M218.7 271a8.4 8.4 0 01-4.2-1.2l-13.3-7.9c-2-1.1-1-1.5-.4-1.7a26.3 26.3 0 006-2.8 1 1 0 011 .1l10.2 6a1.3 1.3 0 001.3 0l40-23a1.3 1.3 0 00.5-1v-46.2a1.3 1.3 0 00-.6-1l-40-23a1.2 1.2 0 00-1.1 0l-40 23a1.3 1.3 0 00-.6 1v46.1a1.2 1.2 0 00.6 1.1l11 6.3c6 3 9.6-.5 9.6-4v-45.5a1.1 1.1 0 011.1-1.2h5a1.1 1.1 0 011.2 1.2v45.5c0 8-4.3 12.5-11.8 12.5-2.3 0-4.1 0-9.2-2.5l-10.5-6a8.5 8.5 0 01-4.2-7.3v-46.1a8.4 8.4 0 014.2-7.3l40-23.1a8.8 8.8 0 018.3 0l40 23a8.4 8.4 0 014.2 7.4v46a8.5 8.5 0 01-4.1 7.3l-40 23.1a8.4 8.4 0 01-4.2 1.1z",
    fill: "#679e63"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M231 239.2c-17.5 0-21.2-8-21.2-14.8a1.1 1.1 0 011.2-1.1h5.2a1.1 1.1 0 011.1 1c.8 5.2 3.1 7.9 13.7 7.9 8.4 0 12-2 12-6.4 0-2.6-1-4.5-14.1-5.8-11-1-17.7-3.5-17.7-12.2 0-8 6.8-12.9 18.2-12.9 12.8 0 19.1 4.5 20 14a1.1 1.1 0 01-.4 1 1.2 1.2 0 01-.8.3H243a1.1 1.1 0 01-1.1-1c-1.3-5.5-4.3-7.2-12.5-7.2-9.2 0-10.3 3.2-10.3 5.6 0 2.9 1.3 3.7 13.7 5.4s18.1 3.9 18.1 12.5-7.2 13.7-20 13.7zm57.6-48.4a7.7 7.7 0 11-7.7-7.7 7.7 7.7 0 017.7 7.7zm-14.2 0a6.5 6.5 0 106.5-6.4 6.5 6.5 0 00-6.5 6.4zm3.6-4.3h3c1 0 3 0 3 2.3a2 2 0 01-1.6 2.1c1.1 0 1.2.9 1.4 2a8.5 8.5 0 00.4 2.3h-1.8l-.3-2.7c-.1-.5-.3-.8-1-.8h-1.4v3.5H278zm1.6 3.8h1.4a1.2 1.2 0 001.3-1.2c0-1.2-.8-1.2-1.3-1.2h-1.4z",
    fill: "#679e63"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M95 90.5a5.1 5.1 0 00-2.6-4.4L50 61.7a5.1 5.1 0 00-2.3-.6h-.5a5.2 5.2 0 00-2.3.6L2.6 86.1A5.1 5.1 0 000 90.6v65.6a2.5 2.5 0 001.4 2.2 2.5 2.5 0 002.5 0L29.1 144a5.2 5.2 0 002.6-4.5V109a5.1 5.1 0 012.5-4.4L45 98.3a5.1 5.1 0 012.5-.7 5 5 0 012.6.7l10.7 6.2a5.1 5.1 0 012.5 4.4v30.6A5.2 5.2 0 0066 144l25 14.4a2.5 2.5 0 002.6 0 2.6 2.6 0 001.3-2.2zM298.7.3a2.6 2.6 0 00-3.8 2.3v65a1.8 1.8 0 01-1 1.5 1.8 1.8 0 01-1.7 0L281.6 63a5.1 5.1 0 00-5 0L234 87.5a5 5 0 00-2.5 4.4v48.9a5.1 5.1 0 002.6 4.4l42.3 24.5a5.1 5.1 0 005.1 0l42.4-24.5a5.1 5.1 0 002.6-4.4v-122a5.1 5.1 0 00-2.7-4.4zm-4 124.4a1.3 1.3 0 01-.6 1.1l-14.5 8.4a1.3 1.3 0 01-1.3 0l-14.5-8.4a1.3 1.3 0 01-.7-1v-16.9a1.3 1.3 0 01.6-1l14.6-8.5a1.3 1.3 0 011.3 0l14.5 8.4a1.3 1.3 0 01.7 1.1zm145.1-17.2a5.1 5.1 0 002.6-4.4V91.2a5.1 5.1 0 00-2.6-4.4l-42.1-24.5a5.1 5.1 0 00-5.1 0l-42.4 24.5a5 5 0 00-2.5 4.4v49a5.1 5.1 0 002.6 4.4l42 24a5.1 5.1 0 005 0l25.5-14.2a2.6 2.6 0 000-4.5l-42.6-24.4a2.6 2.6 0 01-1.3-2.2V108a2.5 2.5 0 011.3-2.2l13.3-7.7a2.5 2.5 0 012.5 0l13.3 7.7a2.5 2.5 0 011.3 2.2v12a2.5 2.5 0 003.8 2.2z",
    fill: "#333",
    fillRule: "evenodd"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M394.5 105.2a1 1 0 011 0l8.2 4.7a1 1 0 01.5.8v9.4a1 1 0 01-.5.9l-8.1 4.7a1 1 0 01-1 0l-8.2-4.7a1 1 0 01-.4-.9v-9.4a1 1 0 01.4-.8z",
    fill: "#679e63",
    fillRule: "evenodd"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M166.1 62.6a5 5 0 00-5 0L118.8 87a5 5 0 00-2.5 4.4V140a5 5 0 002.5 4.4l42.1 24.3a5 5 0 005 0l42.2-24.3a5 5 0 002.6-4.4V91.3a5 5 0 00-2.6-4.4z",
    transform: "translate(-.3)",
    fillRule: "evenodd",
    fill: "url(#b)"
  }), /* @__PURE__ */ React.createElement("g", {
    clipPath: "url(#c)"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M160.6 62.6l-42.2 24.3a5.3 5.3 0 00-2.7 4.4V140a4.9 4.9 0 001.3 3.2l47.4-81.1a5.2 5.2 0 00-3.8.5zm4.1 106.6a5 5 0 001.2-.5l42.1-24.3a5.2 5.2 0 002.7-4.4V91.3a5 5 0 00-1.5-3.5z",
    fill: "none"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M208.3 87l-42.2-24.4a5 5 0 00-1.3-.5l-47.5 81.1a6 6 0 001.4 1.2l42.4 24.3a5.2 5.2 0 003.9.5l44.5-81.4a6 6 0 00-1.2-.9z",
    transform: "translate(-.3)",
    fill: "url(#d)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M210.7 140V91.3A5.2 5.2 0 00208 87l-42.2-24.3a5 5 0 00-1.6-.6l46.3 79.1a4.5 4.5 0 00.2-1.1zm-92.3-53.1a5.3 5.3 0 00-2.7 4.4V140a5.3 5.3 0 002.7 4.4l42.3 24.3a5.1 5.1 0 003.3.7l-45.3-82.6z",
    fill: "none"
  }), /* @__PURE__ */ React.createElement("path", {
    fill: "url(#a)",
    d: "M159.3 53.6l-.6.4h.8l-.2-.4z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M208.3 144.4a5.3 5.3 0 002.5-3.2L164.5 62a5.2 5.2 0 00-3.6.6L119 86.8l45.3 82.6a5.2 5.2 0 001.9-.7z",
    transform: "translate(-.3)",
    fill: "url(#e)"
  }), /* @__PURE__ */ React.createElement("path", {
    fill: "url(#f)",
    d: "M212 143.6l-.3-.5v.7l.3-.2z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M208.3 144.4l-42.1 24.3a5.2 5.2 0 01-1.9.7l.8 1.5 46.9-27.1v-.7l-1.2-2a5.3 5.3 0 01-2.5 3.3z",
    transform: "translate(-.3)",
    fill: "url(#g)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M208.3 144.4l-42.1 24.3a5.2 5.2 0 01-1.9.7l.8 1.5 46.9-27.1v-.7l-1.2-2a5.3 5.3 0 01-2.5 3.3z",
    transform: "translate(-.3)",
    fill: "url(#h)"
  })));
}
