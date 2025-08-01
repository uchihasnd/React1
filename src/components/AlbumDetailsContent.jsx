import AlbumButtons from "./AlbumButtons";
import TableAlbum from "./TableAlbum";

export default function DetailsContent({
  albumInfo: { albumName, coverArt, tracks, type, date },
}) {
  return (
    <div className="album-info">
      <div className="album-content">
        <div className="album-image-container">
          <img
            src={coverArt.sources[0].url}
            alt="Album cover"
            className="cover-album"
          />
        </div>
        <div className="album-details">
          <a href="" className="album-title">
            {albumName}
          </a>
          <p className="details">
            {type} • {date.year} • {tracks.totalCount} Tracks
          </p>
          <AlbumButtons albumName={albumName} />
        </div>
      </div>
      <div className="table-container">
        <TableAlbum tracks={tracks.items} />
      </div>
    </div>
  );
}
