export default function DurationCell({ minutes, seconds }) {
  return (
    <td className="album-cell">
      {minutes}:{seconds}
    </td>
  );
}
