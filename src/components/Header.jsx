export default function Header({
  artistName,
  verified,
  monthlyListeners,
  url,
}) {
  return (
    <>
      <div
        className="header-artist"
        style={{
          backgroundImage: `url(${url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <span className="header-info">
          {verified ? (
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
        <h1 className="artist-title header-info">{artistName}</h1>
        <span className="header-info info-header-text">
          {monthlyListeners.toLocaleString()} monthly listeners
        </span>
      </div>
    </>
  );
}
