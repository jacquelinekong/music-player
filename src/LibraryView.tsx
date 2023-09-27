import React, { useEffect } from "react";
import { APISong, Song, apiSongToSong } from "./Models";
import SongsTable from "./SongsTable";

const LibraryView: React.FunctionComponent = () => {
  const [data, setData] = React.useState<Song[]>([]);
  const [fetchFailed, setFetchFailed] = React.useState<boolean>(false);

  // If we were going to be fetching from multiple endpoints we would probably want
  // to create a custom hook, but do this for now.
  useEffect(() => {
    let ignore = false;
    fetch(
      "https://storage.googleapis.com/atticus-frontend-assessment/api/songs.json",
      { method: "GET" }
    )
      .then((res) => res.json())
      .then((apiData: { songs: APISong[] }) => {
        setFetchFailed(false);
        if (!ignore) {
          const apiSongs = apiData.songs;
          const songs = apiSongs.map((as) => apiSongToSong(as));
          setData(songs);
        }
      })
      .catch(() => setFetchFailed(true));
    return () => {
      ignore = true;
    };
  }, []); // TODO: Refresh logic. Refresh button? Autorefresh polling?

  // TODO: Handle empty state and error state; we have the info, just need to display something reasonable
  return (
    <React.Fragment>
      <SongsTable rows={data} />
      {fetchFailed && <p>ERROR</p>}
    </React.Fragment>
  );
};

export default LibraryView;
