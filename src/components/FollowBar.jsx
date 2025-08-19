import { useContext } from "react";
import ButtonPlayAll from "./ButtonPlayAll";
import FixedDiv from "./FixedDiv";
import Tooltip from "./tooltips/Tooltip";
import { ArtistContext } from "../utils/context";

export default function FollowBar() {
  const { artistName } = useContext(ArtistContext);
  const text = `More options for ${artistName}`;

  return (
    <>
      <div className="flex-container-row-background padding-20">
        <ButtonPlayAll />
        <button className="button-border-radius-20 mr-20 scale pointer-element">
          Follow
        </button>
        <button className="button-round-gray mr-20 scale pointer-element relative-container">
          <span className="material-symbols-outlined">more_horiz</span>
          <Tooltip tooltipText={text} />
        </button>
      </div>
      <FixedDiv />
    </>
  );
}
