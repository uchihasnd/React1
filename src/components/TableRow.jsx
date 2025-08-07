import PlaycountCell from "./PlaycountCell";
import SongNameCell from "./SongNameCell";
import TrackNumberCell from "./TrackNumberCell";
import { SongContext } from "../utils/context";
import DurationCell from "./DurationCell";

export default function TableRow({ tracksInfo }) {
  const { track } = tracksInfo;
  const { artists } = track;
  const { items } = artists;
  const { profile } = items[0];

  const { trackNumber, name: trackName, playcount, duration } = track;
  const { totalMilliseconds } = duration;

  return (
    <>
      <tr className="color-hover opacity">
        <TrackNumberCell trackNumber={trackNumber} />
        <SongNameCell songName={trackName} bandName={profile.name} />
        <PlaycountCell playcount={Number(playcount).toLocaleString()} />
        <SongContext.Provider value={trackName}>
          <DurationCell totalMilliseconds={totalMilliseconds} />
        </SongContext.Provider>
      </tr>
    </>
  );
}
