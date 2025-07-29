import ButtonLikedSong from "./ButtonLikedSong";
import MoreOptionsSong from "./MoreOptionsSong";

export default function DurationCell({ minutes, seconds }) {
  return (
    <td className="album-cell">
      <div className="duration-container">
        <ButtonLikedSong />
        <span className="duration-time">
          {minutes}:{seconds}
        </span>
        <MoreOptionsSong />
      </div>
    </td>
  );
}
