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
const columns = [columnHelper.accessor("title", { id: "title" })];

const SongsTable: React.FunctionComponent = () => {
  const [data, setData] = React.useState<Song[]>([]);

  useEffect(() => {
    fetch(
      "https://storage.googleapis.com/atticus-frontend-assessment/api/songs.json",
      { method: "GET" }
    )
      .then((res) => res.json())
      .then((apiData: { songs: APISong[] }) => {
        const apiSongs = apiData.songs;
        const songs = apiSongs.map((as) => apiSongToSong(as));
        setData(songs);
      });
  }, []);

  return <Table rows={data} columns={columns} />;
};

export default SongsTable;
