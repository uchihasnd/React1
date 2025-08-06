import ButtonLikedSong from "./ButtonLikedSong";
import MoreOptionsSong from "./MoreOptionsSong";

export default function DurationCell({ minutes, seconds }) {
  return (
    <td className="centered-cell">
      <div className="flex-container-3-elements">
        <ButtonLikedSong />
        <span className="container-40px">
          {minutes}:{seconds}
        </span>
        <MoreOptionsSong />
      </div>
    </td>
  );
}
