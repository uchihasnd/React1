import Tooltip from "./tooltips/Tooltip";

export default function ButtonLikedSong() {
  return (
    <button className="button-table tooltip">
      <span className="material-symbols-outlined small-icon">add_circle</span>
      <Tooltip tooltipText={"Add to liked songs"} />
    </button>
  );
}
