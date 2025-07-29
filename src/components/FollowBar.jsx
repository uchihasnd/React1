import ButtonPlayAll from "./ButtonPlayAll";

export default function FollowBar() {
  return (
    <div className="div-play-follow">
      <ButtonPlayAll />
      <button className="button-follow div-follow-element scale">Follow</button>
      <button className="album-button-details div-follow-element scale tooltip">
        <span className="material-symbols-outlined">more_horiz</span>
      </button>
    </div>
  );
}
