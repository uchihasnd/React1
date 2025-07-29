import Header from "./components/Header";
import "./App.css";
import FollowBar from "./components/FollowBar";
import AlbumDetails from "./components/AlbumDetails";
import data from "./js/data";

function App() {
  const artistName = data.artistUnion.profile.name;

  return (
    <>
      <Header />
      <FollowBar artistName={artistName} />
      <div className="artist-container">
        <AlbumDetails />
      </div>
    </>
  );
}

export default App;
