import TableBody from "./TableBody";
import TableHeaders from "./TableHeaders";

export default function TableAlbum({ tracks }) {
  return (
    <table className="table-container">
      <TableHeaders />
      <TableBody tracks={tracks} />
    </table>
  );
}
