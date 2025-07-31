import data from "../js/data";
import AlbumDetailsIteration from "./AlbumDetailsIteration";

export default function AlbumDetails() {
  const albums = data.artistUnion.discography.albums;
  const albumsComponent = albums.items.map(({ releases }, index) => {
    const release = releases.items[0];
    const { name: albumName, coverArt, tracks, type, date } = release;

    return (
      <AlbumDetailsIteration
        albumInfo={{ albumName, coverArt: { ...coverArt }, tracks, type, date }}
        key={index}
      />
    );
  });
  return albumsComponent;
}
