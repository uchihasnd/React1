import MillisecondsConverter from "./MillisecondsConverter";
import PlaycountCell from "./PlaycountCell";
import SongNameCell from "./SongNameCell";
import TrackNumberCell from "./TrackNumberCell";

export default function TableRow({ tracksInfo }) {
  const { track } = tracksInfo;
  const { artists } = track;
  const { items } = artists;
  const { profile } = items[0];

  const { trackNumber, name: trackName, playcount, duration } = track;
  const { totalMilliseconds } = duration;

  return (
    <>
      <tr className="row-album">
        <TrackNumberCell trackNumber={trackNumber} />
        <SongNameCell songName={trackName} bandName={profile.name} />
        <PlaycountCell playcount={Number(playcount).toLocaleString()} />
        <MillisecondsConverter totalMilliseconds={totalMilliseconds} />
      </tr>
    </>
  );
}
