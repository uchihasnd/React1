// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Header from './components/Header'
import './App.css'
import FollowBar from './components/FollowBar'
import AlbumDetails from './components/AlbumDetails'

function App() {

  return (
    <>
    <Header />
      <FollowBar />
      <div className="album-info">
        <div className="album-content">
          <AlbumDetails/>
        </div>
      </div>
    </>
  )
}

export default App
