export default function TrackNumberCell({ track }) {
  return (
    <td className="album-cell track-cell">
      <span className="track-number">{track}</span>
    </td>
  );
}
