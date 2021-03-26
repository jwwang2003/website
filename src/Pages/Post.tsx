import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import vscDarkPlus from 'react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus';
import { Card } from 'react-bootstrap';

const renderers = {
  code: ({ language, value }: any) => {
    return (
      <SyntaxHighlighter
        style={vscDarkPlus}
        language={language}
        children={value}
      />
    );
  },
};

// Did you know you can use tildes instead of backticks for code in markdown? ✨
const markdown = `Here is some JavaScript code:
# Test
***
~~~js
console.log('It works!')
~~~
`;

export default function () {
  const [ready, setReady] = useState<Boolean>(false);
  const [mark, setMark] = useState<string>('');

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <>
      <textarea style={{'width': '100%', 'height': '300px'}} value={mark} onChange={e => setMark(e.target.value)}></textarea>
      {ready ? (
        <Card body>
          <ReactMarkdown renderers={renderers} children={mark} />
        </Card>
      ) : (
        <></>
      )}
    </>
  );
}
