export default function TrackNumberCell({ trackNumber }) {
  // console.log(trackNumber);

  return (
    <td className="album-cell track-cell">
      <span className="track-number">{trackNumber}</span>
    </td>
  );
}
