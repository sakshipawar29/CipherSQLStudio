import { useState } from "react";
import api from "../api/api";
import SQLEditor from "../components/SQLEditor";
import ResultsTable from "../components/ResultsTable";

export default function AssignmentPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [hint, setHint] = useState("");
  const [loading, setLoading] = useState(false);

  const assignment = {
    title: "Find users older than 25",
    question: "Write a SQL query to return users older than 25",
  };

  // STEP 15 - EXECUTE QUERY BUTTON
  const executeQuery = async () => {
    try {
      setLoading(true);

      const response = await api.post("/query/execute", {
        query: query,
      });

      setResults(response.data);
    } catch (error) {
      alert(error.response?.data?.error || "Query execution failed");
    } finally {
      setLoading(false);
    }
  };

  // STEP 17 - GET HINT BUTTON
  const getHint = async () => {
    try {
      const response = await api.post("/hint", {
        question: assignment.question,
        userQuery: query,
      });

      setHint(response.data.hint);
    } catch (error) {
      alert("Failed to fetch hint");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>{assignment.title}</h2>
      <p>{assignment.question}</p>

      <SQLEditor query={query} setQuery={setQuery} />

      <div style={{ marginTop: "20px" }}>
        <button onClick={executeQuery} style={{ marginRight: "10px" }}>
          {loading ? "Running..." : "Execute Query"}
        </button>

        <button onClick={getHint}>Get Hint</button>
      </div>

      {hint && (
        <div style={{ marginTop: "20px", background: "#f3f3f3", padding: "10px" }}>
          <h4>Hint</h4>
          <p>{hint}</p>
        </div>
      )}

      <ResultsTable rows={results} />
    </div>
  );
}