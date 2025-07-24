import data from "../js/data";
import AlbumDetailsIteration from "./AlbumDetailsIteration";

export default function AlbumDetails() {
  const albums = data.artistUnion.discography.albums;
  return <AlbumDetailsIteration albumsInfo={albums} />;
}
