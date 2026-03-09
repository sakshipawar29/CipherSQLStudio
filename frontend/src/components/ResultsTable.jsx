export default function ResultsTable({ rows }) {
  if (!rows || rows.length === 0) return <p>No Results</p>;

  const columns = Object.keys(rows[0]);

  return (
    <table border="1" style={{ marginTop: "20px", width: "100%" }}>
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col}>{col}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            {columns.map((col) => (
              <td key={col}>{row[col]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}