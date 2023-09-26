import React, { useEffect } from "react";
import {
  useReactTable,
  getCoreRowModel,
  createColumnHelper,
  flexRender,
} from "@tanstack/react-table";
import { APISong, Song, apiSongToSong } from "./Models";

const columnHelper = createColumnHelper<Song>();
const columns = [columnHelper.accessor("title", { id: "title" })];

const Table: React.FunctionComponent = () => {
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

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <table>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
