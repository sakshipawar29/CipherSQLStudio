import Editor from "@monaco-editor/react";

export default function SQLEditor({ query, setQuery }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <Editor
        height="200px"
        defaultLanguage="sql"
        value={query}
        onChange={(value) => setQuery(value)}
      />
    </div>
  );
}