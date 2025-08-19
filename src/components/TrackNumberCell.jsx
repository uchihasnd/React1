import ButtonPlaySong from "./ButtonPlaySong";

export default function TrackNumberCell({ trackNumber }) {
  return (
    <td className="centered-cell flex-relative playButtonHover pointer-element">
      <span className="number-absolute">{trackNumber}</span>
      <ButtonPlaySong />
    </td>
  );
}
