import Header from "./components/Header";
import "./App.css";
import FollowBar from "./components/FollowBar";
import AlbumDetails from "./components/AlbumDetails";
import { ArtistProvider } from "./utils/context";

function App() {
  return (
    <>
      <ArtistProvider>
        <Header />
        <FollowBar />
        <div className="main-container">
          <AlbumDetails />
        </div>
      </ArtistProvider>
    </>
  );
}

export default App;
