import MoreOptionsSongTooltip from "./tooltips/MoreOptionsSongTooltip";

export default function MoreOptionsSong(songName) {
  return (
    <button className="button-table tooltip">
      <span className="material-symbols-outlined small-icon">more_horiz</span>
      <MoreOptionsSongTooltip songName={songName.songName} />
    </button>
  );
}
