const songs = [
  { title: "Song 1", artist: "Artist A", cover: "cover1.jpg" },
  { title: "Song 2", artist: "Artist B", cover: "cover2.jpg" },
  { title: "Song 3", artist: "Artist C", cover: "cover3.jpg" },
  { title: "Song 4", artist: "Artist D", cover: "cover4.jpg" },
];

const playlistContainer = document.getElementById("playlist-container");
const songContainer = document.getElementById("song-container");
let playlist = [];

function injectsongs(song) {
  songContainer.insertAdjacentHTML(
    "afterbegin",
    `
        <div class="song-card">
            <img src="${song.cover}" alt="${song.title} Cover" class="song-cover"/>
            <h2>${song.title}</h2>
            <p>${song.artist}</p>
            <button class="add-to-playlist-btn" data-title="${song.title}">Add to Playlist</button>
        </div>`
  );
  return songContainer;
}

console.log(injectsongs(song));
