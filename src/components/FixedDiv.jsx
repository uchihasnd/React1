import ButtonPlayAll from "./ButtonPlayAll";

export default function FixedDiv({ artistName }) {
  window.addEventListener("scroll", function () {
    const element = document.getElementById("divFixed");

    if (window.scrollY > 450) {
      element.style.opacity = "1";
    } else {
      element.style.opacity = "0";
    }
  });
  return (
    <div id="divFixed" className="div-play-fixed div-fixed">
      <ButtonPlayAll />
      <span className="artist-fixed">{artistName}</span>
    </div>
  );
}
