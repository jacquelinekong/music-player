import React from "react";
import { createColumnHelper } from "@tanstack/react-table";
import { Song } from "./Models";
import Table from "./Table";

const columnHelper = createColumnHelper<Song>();
const columns = [
  columnHelper.accessor("title", { header: "Song", id: "title" }),
  columnHelper.accessor("album", { header: "Album", id: "album" }),
  columnHelper.accessor("artist", { header: "Artist", id: "artist" }),
  // TODO: Convert this to a readable time
  columnHelper.accessor("songLengthSeconds", {
    header: "Artist",
    id: "songLengthSeconds",
  }),
];

interface SongsTableProps {
  rows: Song[];
}

const SongsTable: React.FunctionComponent<SongsTableProps> = (
  props: SongsTableProps
) => {
  // TODO: Handle empty state and error state; we have the info, just need to display something reasonable
  return <Table rows={props.rows} columns={columns} />;
};

export default SongsTable;
