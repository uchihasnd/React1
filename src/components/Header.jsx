import data from "../js/data";
import FixedDiv from "./FixedDiv";

export default function Header() {
  const backgroundheader = data.artistUnion.visuals.headerImage.sources[0].url;
  return (
    <>
      <div
        className="header-artist"
        style={{
          backgroundImage: `url(${backgroundheader})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <span className="header-info">
          <span className="material-symbols-outlined verified-icon filled-icon">
            verified
          </span>
          <span className="circle-white"></span>
          <span className="info-header-text">
            {data.artistUnion.profile.verified ? "Verified Artist" : ""}
          </span>
        </span>
        <h1 className="artist-title header-info">
          {data.artistUnion.profile.name}
        </h1>
        <span className="header-info info-header-text">
          {data.artistUnion.stats.monthlyListeners.toLocaleString()} monthly
          listeners
        </span>
      </div>
      <FixedDiv artistName={data.artistUnion.profile.name} />
    </>
  );
}
