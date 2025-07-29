import ButtonPlaySong from "./ButtonPlaySong";

export default function TrackNumberCell({ trackNumber }) {
  return (
    <td className="album-cell track-cell playButtonHover">
      <span className="track-number">{trackNumber}</span>
      <ButtonPlaySong />
    </td>
  );
}
