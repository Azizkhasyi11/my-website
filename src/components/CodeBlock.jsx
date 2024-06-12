import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const highlightCode = (code) => {
  const keywords = /\b(const|let|var|function|return|if|else|for|while|import|export|default)\b/g;
  const strings = /(".*?"|'.*?'|`.*?`)/g;
  const comments = /(\/\/.*$|\/\*[\s\S]*?\*\/)/gm;
  const numbers = /\b(\d+)\b/g;

  return code
    .replace(comments, '<span class="comment">$&</span>')
    .replace(strings, '<span class="string">$&</span>')
    .replace(keywords, '<span class="keyword">$&</span>')
    .replace(numbers, '<span class="number">$&</span>');
    };

const CodeBlock = ({ code }) => {
  const [displayedCode, setDisplayedCode] = useState("");
  const highlightedCode = highlightCode(code);
  const lines = code.split("\n");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedCode(code.slice(0, index));
      index++;
      if (index > code.length) clearInterval(interval);
    }, 5); // Adjust typing speed here
    return () => clearInterval(interval);
  }, [code]);

  const highlightedDisplayedCode = highlightCode(displayedCode);

  return (
    <div className="code-container">
      <div className="line-numbers">
        {lines.map((_, i) => (
          <div key={i}>{i + 1}</div>
        ))}
      </div>
      <pre className="code-content">
        <code dangerouslySetInnerHTML={{ __html: highlightedDisplayedCode }} />
      </pre>
    </div>
  );
};

CodeBlock.propTypes = {
  code: PropTypes.string,
};

export default CodeBlock;
