import TableBody from "./TableBody";
import TableHeaders from "./TableHeaders";

export default function TableAlbum({ tracks }) {
  return (
    <table className="album-table">
      <TableHeaders />
      <TableBody tracks={tracks} />
    </table>
  );
}
