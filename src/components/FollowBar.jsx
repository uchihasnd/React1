import ButtonPlayAll from "./ButtonPlayAll";
import ArtistTooltip from "./tooltips/ArtistTooltip";

export default function FollowBar(artistName) {
  return (
    <div className="div-play-follow">
      <ButtonPlayAll />
      <button className="button-follow div-follow-element scale">Follow</button>
      <button className="album-button-details div-follow-element scale tooltip">
        <span className="material-symbols-outlined">more_horiz</span>
        <ArtistTooltip artistName={artistName.artistName} />
      </button>
    </div>
  );
}
