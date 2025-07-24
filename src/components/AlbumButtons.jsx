export default function AlbumButtons() {
  return (
    <div className="album-buttons-container">
      <button className="album-play-button filled-icon">
        <span className="material-symbols-outlined">play_arrow</span>
      </button>
      <button className="album-button-details scale">
        <span className="material-symbols-outlined">add_circle</span>
      </button>
      <button className="album-button-details scale">
        <span className="material-symbols-outlined">enable</span>
      </button>
      <button className="album-button-details scale">
        <span className="material-symbols-outlined">more_horiz</span>
      </button>
    </div>
  );
}
