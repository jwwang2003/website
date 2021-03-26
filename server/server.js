import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import expressStaticGzip from 'express-static-gzip';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import vscDarkPlus from 'react-syntax-highlighter/dist/cjs/styles/prism/vsc-dark-plus';

const renderers = {
  code: ({ language, value }) => {
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

const PORT = 8080;

const STATIC = path.resolve(__dirname,'../', 'build');
const INDEX = path.resolve(STATIC, 'index.html');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/test', async function(req, res) {
  const context = {};
  const app = ReactDOMServer.renderToString(
    <ReactMarkdown renderers={renderers} children={markdown} />
  )
  return res.send(app);
})

// Static content
// app.use(express.static(STATIC));
app.use(expressStaticGzip(STATIC, {
  enableBrotli: true
})) 

// All GET request handled by INDEX file
app.get('*', function (req, res) {
  res.sendFile(INDEX);
});

// Start server
app.listen(PORT, function () {
  console.log('Server up and running on ', `http://localhost:${PORT}/`);
});