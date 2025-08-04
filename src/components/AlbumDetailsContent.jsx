import AlbumButtons from "./AlbumButtons";
import TableAlbum from "./TableAlbum";

export default function DetailsContent({
  albumInfo: { albumName, coverArt, tracks, type, date },
}) {
  return (
    <div className="mt20-mb60">
      <div className="grid-container-columns">
        <div className="album-image-container">
          <img
            src={coverArt.sources[0].url}
            alt="Album cover"
            className="img-136px"
          />
        </div>
        <div className="mb-20">
          <a href="" className="title-big-bold link-text-white mt-mb-5">
            {albumName}
          </a>
          <p className="text-small-lowercase mt-mb-5">
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
