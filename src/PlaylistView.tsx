import { useState, useMemo } from "react";
import { Song } from "./Models";
import SongsTable from "./SongsTable";
import Table from "./Table";
import { Playlist } from "./Models";
import { createColumnHelper } from "@tanstack/react-table";

const columnHelper = createColumnHelper<Playlist>();
// TODO: Actions column for editing and deleting
const columns = [columnHelper.accessor("name", { header: "Name", id: "name" })];
const testPlaylists: Playlist[] = [
  {
    name: "apple",
    songs: [
      {
        title: "She Works Hard For The Money",
        album: "She Works Hard For The Money",
        artist: "Donna Summer",
        songLengthSeconds: 320,
      },
      {
        title: "Stop, Look And Listen",
        album: "She Works Hard For The Money",
        artist: "Donna Summer",
        songLengthSeconds: 353,
      },
    ],
  },
  {
    name: "banana",
    songs: [
      {
        title: "She Works Hard For The Money",
        album: "She Works Hard For The Money",
        artist: "Donna Summer",
        songLengthSeconds: 320,
      },
      {
        title: "Stop, Look And Listen",
        album: "She Works Hard For The Money",
        artist: "Donna Summer",
        songLengthSeconds: 353,
      },
    ],
  },
];

function PlaylistView() {
  const [playlists, setPlaylists] = useState<Playlist[]>(testPlaylists);
  const [currentPlaylist, setCurrentPlaylist] = useState<Playlist | undefined>(
    testPlaylists[0]
  );
  const playlistTable = useMemo(() => {
    return <Table<Playlist> rows={playlists} columns={columns} />;
  }, [playlists]);
  const currentPlaylistTable = useMemo(() => {
    return (
      <div>
        <h2>{currentPlaylist!.name}</h2>
        <SongsTable rows={currentPlaylist!.songs} />
      </div>
    );
  }, [currentPlaylist]);

  return (
    <div className="playlist-view">
      <h2>Playlists</h2>
      {playlistTable}
      {currentPlaylist !== undefined && currentPlaylistTable}
    </div>
  );
}
export default PlaylistView;
