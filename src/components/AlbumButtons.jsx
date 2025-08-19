import Tooltip from "./tooltips/Tooltip";

export default function AlbumButtons({ albumName }) {
  const text = `More options for ${albumName}`;
  return (
    <div>
      <button className="button-round-white scale filled-icon mt-mb-5 pointer-element">
        <span className="material-symbols-outlined">play_arrow</span>
      </button>
      <button className="button-round-gray scale pointer-element relative-container">
        <span className="material-symbols-outlined">add_circle</span>
        <Tooltip tooltipText={"Add to your library"} />
      </button>
      <button className="button-round-gray scale pointer-element relative-container">
        <span className="material-symbols-outlined">enable</span>
        <Tooltip tooltipText={"Download"} />
      </button>
      <button className="button-round-gray scale pointer-element relative-container">
        <span className="material-symbols-outlined">more_horiz</span>
        <Tooltip tooltipText={text} />
      </button>
    </div>
  );
}
