import Header from "./components/Header";
import "./App.css";
import FollowBar from "./components/FollowBar";
import AlbumDetails from "./components/AlbumDetails";
import FixedDiv from "./components/FixedDiv";

function App() {
  return (
    <>
      <Header />
      <FollowBar />
      {/* <FixedDiv /> */}
      <div className="artist-container">
        <AlbumDetails />
      </div>
    </>
  );
}

export default App;
