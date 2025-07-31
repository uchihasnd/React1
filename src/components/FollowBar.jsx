import ButtonPlayAll from "./ButtonPlayAll";
import FixedDiv from "./FixedDiv";
import Tooltip from "./tooltips/Tooltip";

export default function FollowBar({ artistName }) {
  const text = `More options for ${artistName}`;

  return (
    <>
      <div className="div-play-follow">
        <ButtonPlayAll />
        <button className="button-follow div-follow-element scale">
          Follow
        </button>
        <button className="album-button-details div-follow-element scale tooltip">
          <span className="material-symbols-outlined">more_horiz</span>
          <Tooltip tooltipText={text} />
        </button>
      </div>
      <FixedDiv artistName={artistName} />
    </>
  );
}
