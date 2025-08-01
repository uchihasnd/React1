import Header from "./components/Header";
import "./App.css";
import FollowBar from "./components/FollowBar";
import AlbumDetails from "./components/AlbumDetails";
import data from "./js/data";

function App() {
  function headerInfo() {
    const artistInfo = data.artistUnion;
    const { profile, stats, visuals } = artistInfo;
    const { headerImage } = visuals;
    const { sources } = headerImage;
    const { url } = sources[0];

    const { name: artistName, verified } = profile;
    const { monthlyListeners } = stats;

    return { artistName, verified, monthlyListeners, url };
  }

  const { artistName, verified, monthlyListeners, url } = headerInfo();

  function albumsInfo() {
    const albums = data.artistUnion.discography.albums;
    const albumsItems = albums.items;

    return albumsItems;
  }

  const albumsItems = albumsInfo();

  return (
    <>
      <Header
        artistName={artistName}
        verified={verified}
        monthlyListeners={monthlyListeners}
        url={url}
      />
      <FollowBar artistName={artistName} />
      <div className="artist-container">
        <AlbumDetails albumsItems={albumsItems} />
      </div>
    </>
  );
}

export default App;
