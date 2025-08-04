export default function TableHeaders() {
  const headers = [
    { header: "trackNumber", cellContent: "#" },
    { header: "title", cellContent: "Title" },
    { header: "plays", cellContent: "Plays" },
    {
      header: "duration",
      cellContent: (
        <span className="material-symbols-outlined icon-small-centered">
          schedule
        </span>
      ),
    },
  ];

  return (
    <thead className="title-small">
      <tr>
        {headers.map(({ cellContent }, index) => (
          <th key={index} className="padding-10 cell-container">
            {cellContent}
          </th>
        ))}
      </tr>
    </thead>
  );
}
