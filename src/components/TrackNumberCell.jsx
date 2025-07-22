export default function TrackNumberCell({trackNumberSong}) {
     return (
          <td className="album-cell track-cell">
               <span className="track-number">
                    {trackNumberSong}
               </span>
          </td>
     )
}