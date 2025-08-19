import { useContext } from "react";
import ButtonPlayAll from "./ButtonPlayAll";
import { ArtistContext } from "../utils/context";

export default function FixedDiv() {
  const { artistName } = useContext(ArtistContext);

  window.addEventListener("scroll", function () {
    const element = document.getElementById("divFixed");

    if (window.scrollY > 450) {
      element.style.opacity = "1";
    } else {
      element.style.opacity = "0";
    }
  });
  return (
    <div id="divFixed" className="flex-container-fixed padding-10-20 div-fixed">
      <ButtonPlayAll />
      <span className="title-big-bold">{artistName}</span>
    </div>
  );
}
