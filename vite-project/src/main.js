import "./style.css";

const song = [
  { title: "Song 1", artist: "Artist A", cover: "cover1.jpg" },
  { title: "Song 2", artist: "Artist B", cover: "cover2.jpg" },
  { title: "Song 3", artist: "Artist C", cover: "cover3.jpg" },
  { title: "Song 4", artist: "Artist D", cover: "cover4.jpg" },
];

const playlistContainer = document.getElementById("playlist-container");
const songContainer = document.getElementById("song-container");
let playlist = [];

function injectsongs(song) {
  song.forEach((song) => {
    songContainer.insertAdjacentHTML(
      "afterbegin",
      `
      <div class="song-card">
        <img src="${song.cover}" alt="${song.title}" />
        <h2>${song.title}</h2>
        <p>${song.artist}</p>
        <button class="add-to-playlist-btn">Add to Playlist</button>
      </div>
    `
    );
  });
}
songs.forEach((song) => injectsongs(song));
