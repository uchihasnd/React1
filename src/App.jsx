import Header from "./components/Header";
import "./App.css";
import FollowBar from "./components/FollowBar";
import AlbumDetails from "./components/AlbumDetails";
import { ArtistContext, useArtistContext } from "./utils/context";

function App() {
  return (
    <>
      <ArtistContext.Provider value={useArtistContext()}>
        <Header />
        <FollowBar />
        <div className="main-container">
          <AlbumDetails albumsItems={useArtistContext().albumsItems} />
        </div>
      </ArtistContext.Provider>
    </>
  );
}

export default App;
