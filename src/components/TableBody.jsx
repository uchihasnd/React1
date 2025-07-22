import data from "../js/data";
import TableRow from "./TableRow";

export default function  TableBody() {
     const items = data.artistUnion.discography.albums.items;
     return (
          <tbody>
               {items.map((tracks, index) => (
                    <TableRow key={index} track={tracks.trackNumber}/>
               ))}
          </tbody>
     )
}