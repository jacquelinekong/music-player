import React, { useEffect } from "react";
import {
  useReactTable,
  getCoreRowModel,
  createColumnHelper,
  flexRender,
} from "@tanstack/react-table";
import { APISong, Song, apiSongToSong } from "./Models";
import Table from "./Table";

const columnHelper = createColumnHelper<Song>();
const columns = [
  columnHelper.accessor("title", { header: "Song", id: "title" }),
  columnHelper.accessor("album", { header: "Album", id: "album" }),
  columnHelper.accessor("artist", { header: "Artist", id: "artist" }),
  columnHelper.accessor("songLengthSeconds", {
    header: "Artist",
    id: "songLengthSeconds",
  }),
];

const SongsTable: React.FunctionComponent = () => {
  const [data, setData] = React.useState<Song[]>([]);

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
        if (!ignore) {
          const apiSongs = apiData.songs;
          const songs = apiSongs.map((as) => apiSongToSong(as));
          setData(songs);
        }
      });
    return () => {
      ignore = true;
    };
  }, [data]);

  return <Table rows={data} columns={columns} />;
};

export default SongsTable;
