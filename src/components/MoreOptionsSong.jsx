import Tooltip from "./tooltips/Tooltip";
import { useContext } from "react";
import { SongContext } from "../utils/context";

export default function MoreOptionsSong() {
  const songName = useContext(SongContext);
  const text = `More options for ${songName}`;
  return (
    <button className="button-round-transparent pointer-element relative-container">
      <span className="material-symbols-outlined small-icon">more_horiz</span>
      <Tooltip tooltipText={text} />
    </button>
  );
}
