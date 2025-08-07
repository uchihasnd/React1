import ButtonLikedSong from "./ButtonLikedSong";
import MoreOptionsSong from "./MoreOptionsSong";
import { convertMilliseconds } from "../js/convertMilliseconds";

export default function DurationCell({ totalMilliseconds }) {
  const { minutes, seconds } = convertMilliseconds(totalMilliseconds);

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
