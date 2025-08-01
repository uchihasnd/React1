import AlbumDetailsContent from "./AlbumDetailsContent";

export default function AlbumDetails({ albumsItems }) {
  const albumsComponent = albumsItems.map(({ releases }, index) => {
    const release = releases.items[0];
    const { name: albumName, coverArt, tracks, type, date } = release;

    return (
      <AlbumDetailsContent
        albumInfo={{ albumName, coverArt: { ...coverArt }, tracks, type, date }}
        key={index}
      />
    );
  });
  return albumsComponent;
}
