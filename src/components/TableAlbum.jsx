import TableBody from "./TableBody";
import TableData from "./TableData";
import TableHeaders from "./TableHeaders";

export default function TableAlbum() {
  return (
    <table className="album-table">
      <TableHeaders />
      <TableBody />
    </table>
  );
}
