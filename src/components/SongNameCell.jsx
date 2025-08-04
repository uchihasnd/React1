export default function SongNameCell({ songName, bandName }) {
  return (
    <td className="centered-cell">
      <a href="" className="a-link-styles">
        {songName}
      </a>
      <br></br>
      <a href="" className="a-link-styles">
        <span className="title-small-gray">{bandName}</span>
      </a>
    </td>
  );
}
