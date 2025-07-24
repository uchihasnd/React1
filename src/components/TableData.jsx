import data from "../js/data";
import TrackNumberCell from "./TrackNumberCell";

export default function TableData() {
  const albums = data.artistUnion.discography.albums.items;

  for (let i = 0; i < albums.length; i++) {
    const release = albums[i].releases.items[0].tracks.items;

    for (let index = 0; index < release.length; index++) {
      const trackNumbers = release[index];
      console.log(trackNumbers.track.trackNumber);
      return (
        <>
          <TrackNumberCell track={trackNumbers.track.trackNumber} />
        </>
      );
    }
    // {
    //   release.map(({ release }, index) => {
    //     const trackNumber = release;
    //     console.log(trackNumber);
    //     return <TrackNumberCell key={index} track={trackNumber} />;
    //   });
    // }
  }
}
