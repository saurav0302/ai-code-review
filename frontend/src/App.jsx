import { useState, useEffect } from "react";
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import prism from "prismjs";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import "./App.css";

function App() {
  const [code, setCode] = useState(`funtion add(a, b) {
                  return a + b
                }`);

  const [review, setReview] = useState("");

  useEffect(() => {
    prism.highlightAll();
  }, []);

  async function getReview() {
    const response = await axios.post(
      "http://localhost:5000/api/v1/ai/get-review",
      { code }
    );
    setReview(response.data.data);
    // console.log("kkkkkkkkk" , response.data.data)
  }

  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={(code) =>
                prism.highlight(code, prism.languages.javascript, "javascript")
              }
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                borderRadius: "5px",
                height: "100%",
                width: "100%",
                overflow: "auto", // Add this line
              }}
            />
          </div>
          <div onClick={getReview} className="review">
            Review
          </div>
        </div>
        <div className="right">
          <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
            {review}
          </ReactMarkdown>
        </div>
      </main>
    </>
  );
}

export default App;
