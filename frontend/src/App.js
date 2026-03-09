import { useState } from "react";
import Editor from "@monaco-editor/react";
import axios from "axios";

function App() {

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [hint, setHint] = useState("");

  const executeQuery = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/query/execute", {
        query: query
      });

      setResults(res.data);
    } catch (err) {
      alert(err.response?.data?.error || "Query failed");
      console.error(err);
    }
  };

  const getHint = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/hint", {
        question: "Find users older than 25",
        userQuery: query
      });

      setHint(res.data.hint);
    } catch (err) {
      alert("Hint failed");
      console.error(err);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>CipherSQLStudio</h1>

      <h3>SQL Editor</h3>

      <Editor
        height="200px"
        defaultLanguage="sql"
        value={query}
        onChange={(value) => setQuery(value)}
      />

      <br />

      <button onClick={executeQuery}>Execute Query</button>
      <button onClick={getHint} style={{ marginLeft: "10px" }}>
        Get Hint
      </button>

      <h3>Hint</h3>
      <p>{hint}</p>

      <h3>Results</h3>

      <table border="1">
        <thead>
          <tr>
            {results.length > 0 &&
              Object.keys(results[0]).map((col) => <th key={col}>{col}</th>)}
          </tr>
        </thead>

        <tbody>
          {results.map((row, i) => (
            <tr key={i}>
              {Object.values(row).map((val, j) => (
                <td key={j}>{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default App;