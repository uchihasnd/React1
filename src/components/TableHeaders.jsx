export default function TableHeaders() {
  const headers = [
    { header: "trackNumber", cellContent: "#" },
    { header: "title", cellContent: "Title" },
    { header: "plays", cellContent: "Plays" },
    {
      header: "duration",
      cellContent: (
        <span className="material-symbols-outlined icon-header">schedule</span>
      ),
    },
  ];

  return (
    <thead className="header-table">
      <tr className="header-table">
        {headers.map(({ cellContent }, index) => (
          <th key={index} className="table-header-cell">
            {cellContent}
          </th>
        ))}
      </tr>
    </thead>
  );
}
