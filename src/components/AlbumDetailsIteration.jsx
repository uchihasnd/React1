import AlbumButtons from "./AlbumButtons";
import TableAlbum from "./TableAlbum";

export default function DetailsIteration({ albumsInfo }) {
     return (
          <>
               {albumsInfo.items.map(({ releases }, index) => {
                    const release = releases.items[0];
                    const { name: albumName, coverArt, tracks, type, date } = release;

               return (
                    <div key={index} className="album-info">
                         <div className="album-content">
                              <div className="album-image-container">
                                   <img src={coverArt.sources[0].url} alt="Album cover" className="cover-album"/>
                              </div>
                              <div className="album-details">
                                   <a href="" className="album-title">{albumName}</a>
                                   <p className="details">
                                        {type} • {date.year} • {tracks.totalCount} Tracks
                                   </p>
                                   <AlbumButtons />
                              </div>
                         </div>
                         <div className="table-container">
                              <TableAlbum />
                         </div>
                    </div>
                    )
               })}
          </>
     )
}