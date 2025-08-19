import { createContext } from "react";
import data from "../js/data";

export const ArtistContext = createContext(null);

export const useDataArtist = () => {
  const artistInfo = data.artistUnion;
  const { profile, stats, visuals } = artistInfo;
  const { headerImage } = visuals;
  const { sources } = headerImage;
  const { url } = sources[0];

  const { name: artistName, verified } = profile;
  const { monthlyListeners } = stats;

  const albums = data.artistUnion.discography.albums;
  const albumsItems = albums.items;

  return { artistName, verified, monthlyListeners, url, albumsItems };
};

export const ArtistProvider = ({ children }) => {
  const contextValue = useDataArtist();
  return (
    <ArtistContext.Provider value={contextValue}>
      {children}
    </ArtistContext.Provider>
  );
};
