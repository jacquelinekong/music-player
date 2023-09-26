export interface APISong {
  title: string;
  album: string;
  artist: string;
  song_length: string;
}

export interface Song {
  title: string;
  album: string;
  artist: string;
  songLengthSeconds: number;
}

export const apiSongToSong = (apiSong: APISong): Song => ({
  title: apiSong.title,
  album: apiSong.album,
  artist: apiSong.artist,
  songLengthSeconds: parseInt(apiSong.song_length),
});
