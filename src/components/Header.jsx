import data from "../js/data";

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
          {data.artistUnion.profile.verified ? (
            <>
              <span className="material-symbols-outlined verified-icon filled-icon">
                verified
              </span>
              <span className="circle-white"></span>
              <span className="info-header-text">Verified Artist</span>
            </>
          ) : (
            ""
          )}
        </span>
        <h1 className="artist-title header-info">
          {data.artistUnion.profile.name}
        </h1>
        <span className="header-info info-header-text">
          {data.artistUnion.stats.monthlyListeners.toLocaleString()} monthly
          listeners
        </span>
      </div>
    </>
  );
}
