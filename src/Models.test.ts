import { APISong, Song, apiSongToSong } from "./Models";

test("apiSongToSong converts APISong to Song", () => {
  const apiSong: APISong = {
    title: "She Works Hard For The Money",
    album: "She Works Hard For The Money",
    artist: "Donna Summer",
    song_length: "320",
  };

  const song: Song = {
    title: "She Works Hard For The Money",
    album: "She Works Hard For The Money",
    artist: "Donna Summer",
    songLengthSeconds: 320,
  };

  expect(apiSongToSong(apiSong)).toEqual(song);
});
