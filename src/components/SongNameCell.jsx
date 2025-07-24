export default function SongNameCell({ songName, bandName }) {
  return (
    <td className="album-cell">
      <a href="" className="a-link">
        {songName}
      </a>
      <br></br>
      <a href="" className="a-link">
        <span className="band-name">{bandName}</span>
      </a>
    </td>
  );
}
