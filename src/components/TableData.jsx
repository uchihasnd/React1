import data from "../js/data";
import DurationCell from "./DurationCell";
import MillisecondsConverter from "./MillisecondsConverter";
import PlaycountCell from "./PlaycountCell";
import SongNameCell from "./SongNameCell";
import TrackNumberCell from "./TrackNumberCell";

export default function TableData() {
  const albums = data.artistUnion.discography.albums.items;
  // const rowInfo = [];

  for (let i = 0; i < albums.length; i++) {
    const release = albums[i].releases.items[0].tracks.items;

    for (let index = 0; index < release.length; index++) {
      const trackNumbers = release[index];
      console.log(trackNumbers.track.trackNumber);
      console.log(trackNumbers.track.name);
      console.log(typeof trackNumbers.track.playcount);

      return (
        <>
          <TrackNumberCell track={trackNumbers.track.trackNumber} />
          <SongNameCell
            songName={trackNumbers.track.name}
            bandName={trackNumbers.track.artists.items[0].profile.name}
          />
          <PlaycountCell
            playcount={Number(trackNumbers.track.playcount).toLocaleString()}
          />
          <MillisecondsConverter
            totalMilliseconds={trackNumbers.track.duration.totalMilliseconds}
          />
        </>
      );
    }
    // return (
    //   // <TrackNumberCell track={trackNumbers.track.trackNumber} />
    //   //   {
    //   //   release.map(({ release }, index) => {
    //   //     const trackNumber = release;
    //   //     console.log(trackNumber);
    //   //     return <TrackNumberCell key={index} track={trackNumber} />;
    //   //   });
    //   // }
    // );
  }
}
