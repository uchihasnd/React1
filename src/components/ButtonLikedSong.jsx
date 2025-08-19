import Tooltip from "./tooltips/Tooltip";

export default function ButtonLikedSong() {
  return (
    <button className="button-round-transparent pointer-element relative-container">
      <span className="material-symbols-outlined small-icon">add_circle</span>
      <Tooltip tooltipText={"Add to liked songs"} />
    </button>
  );
}
