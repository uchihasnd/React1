import { useContext } from "react";
import { ArtistContext } from "../utils/context";

export default function Header() {
  const { url, verified, monthlyListeners, artistName } =
    useContext(ArtistContext);
  return (
    <div
      className="flex-container-column"
      style={{
        backgroundImage: `url(${url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <span className="flex-container-relative">
        {verified && (
          <>
            <span className="material-symbols-outlined verified-icon filled-icon">
              verified
            </span>
            <span className="circle-white"></span>
            <span className="text-small-600">Verified Artist</span>
          </>
        )}
      </span>
      <h1 className="main-title flex-container-relative">{artistName}</h1>
      <span className="flex-container-relative text-small-600">
        {monthlyListeners.toLocaleString()} monthly listeners
      </span>
    </div>
  );
}
