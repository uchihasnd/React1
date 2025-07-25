import TableData from "./TableData";
import TableRow from "./TableRow";

export default function TableBody({ tracks }) {
  return (
    <tbody>
      <TableData tracks={tracks} />
    </tbody>
  );
}
