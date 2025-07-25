import TableRow from "./TableRow";

export default function TableData({ tracks }) {
  return (
    <>
      {tracks.map((track, index) => (
        <TableRow key={index} tracksInfo={track} />
      ))}
    </>
  );
}
