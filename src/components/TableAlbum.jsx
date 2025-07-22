import TableBody from "./TableBody";
import TableHeaders from "./TableHeaders";

export default function TableAlbum() {
     return (
          <table className="album-table">
               <TableHeaders />
               <TableBody />
          </table>
     )
}