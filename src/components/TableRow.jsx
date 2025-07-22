import data from "../js/data";
import TrackNumberCell from "./TrackNumberCell";

export default function TableRow() {
      const track = data.artistUnion.discography.albums.items;
      console.log(track.trackNumber);
      
     return(
          <tr className="row-album">
               <TrackNumberCell trackNumberSong={track.trackNumber}/>
          </tr>
     )
}