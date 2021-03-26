import React, {useState, useEffect} from "../../_snowpack/pkg/react.js";
import ReactMarkdown from "../../_snowpack/pkg/react-markdown.js";
import {Prism as SyntaxHighlighter} from "../../_snowpack/pkg/react-syntax-highlighter.js";
import vscDarkPlus from "../../_snowpack/pkg/react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus.js";
import {Card} from "../../_snowpack/pkg/react-bootstrap.js";
const renderers = {
  code: ({language, value}) => {
    return /* @__PURE__ */ React.createElement(SyntaxHighlighter, {
      style: vscDarkPlus,
      language,
      children: value
    });
  }
};
const markdown = `Here is some JavaScript code:
# Test
***
~~~js
console.log('It works!')
~~~
`;
export default function() {
  const [ready, setReady] = useState(false);
  const [mark, setMark] = useState("");
  useEffect(() => {
    setReady(true);
  }, []);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("textarea", {
    style: {width: "100%", height: "300px"},
    value: mark,
    onChange: (e) => setMark(e.target.value)
  }), ready ? /* @__PURE__ */ React.createElement(Card, {
    body: true
  }, /* @__PURE__ */ React.createElement(ReactMarkdown, {
    renderers,
    children: mark
  })) : /* @__PURE__ */ React.createElement(React.Fragment, null));
}
