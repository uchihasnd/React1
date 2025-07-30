import DurationCell from "./DurationCell";

export default function MillisecondsConverter({ totalMilliseconds, songName }) {
  const minutes = Math.floor(totalMilliseconds / 60000);
  const seconds = ((totalMilliseconds / 1000) % 60).toFixed(0).padStart(2, "0");
  return (
    <DurationCell minutes={minutes} seconds={seconds} songName={songName} />
  );
}
