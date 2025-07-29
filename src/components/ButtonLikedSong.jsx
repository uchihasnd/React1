import LikedSongTooltip from "./tooltips/LikedSongTooltip";

export default function ButtonLikedSong() {
  return (
    <button className="button-table tooltip">
      <span className="material-symbols-outlined small-icon">add_circle</span>
      <LikedSongTooltip />
    </button>
  );
}
