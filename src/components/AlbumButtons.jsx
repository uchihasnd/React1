import Tooltip from "./tooltips/Tooltip";

export default function AlbumButtons({ albumName }) {
  return (
    <div className="album-buttons-container">
      <button className="album-play-button filled-icon">
        <span className="material-symbols-outlined">play_arrow</span>
      </button>
      <button className="album-button-details scale tooltip">
        <span className="material-symbols-outlined">add_circle</span>
        <Tooltip tooltipText={"Add to your library"} />
      </button>
      <button className="album-button-details scale tooltip">
        <span className="material-symbols-outlined">enable</span>
        <Tooltip tooltipText={"Download"} />
      </button>
      <button className="album-button-details scale tooltip">
        <span className="material-symbols-outlined">more_horiz</span>
        <Tooltip tooltipText={albumName} />
      </button>
    </div>
  );
}
