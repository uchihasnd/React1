import Tooltip from "./tooltips/Tooltip";

export default function MoreOptionsSong({ songName }) {
  const text = `More options for ${songName}`;
  return (
    <button className="button-table tooltip">
      <span className="material-symbols-outlined small-icon">more_horiz</span>
      <Tooltip tooltipText={text} />
    </button>
  );
}
