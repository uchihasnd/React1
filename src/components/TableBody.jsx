import TableRow from "./TableRow";

export default function TableBody({ tracks }) {
  return (
    <tbody>
      {tracks.map((track, index) => (
        <TableRow key={index} tracksInfo={track} />
      ))}
    </tbody>
  );
}
