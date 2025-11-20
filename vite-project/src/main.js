import "./style.css";

const song = [
  { title: "Song 1", artist: "Artist A", cover: "cover1.jpg" },
  { title: "Song 2", artist: "Artist B", cover: "cover2.jpg" },
  { title: "Song 3", artist: "Artist C", cover: "cover3.jpg" },
  { title: "Song 4", artist: "Artist D", cover: "cover4.jpg" },
  { title: "Song 5", artist: "Artist E", cover: "cover5.jpg" },
  { title: "Song 6", artist: "Artist F", cover: "cover6.jpg" },
  { title: "Song 7", artist: "Artist G", cover: "cover7.jpg" },
  { title: "Song 8", artist: "Artist H", cover: "cover8.jpg" },
  { title: "Song 9", artist: "Artist I", cover: "cover9.jpg" },
  { title: "Song 10", artist: "Artist J", cover: "cover10.jpg" },
];

const playlistContainer = document.getElementById("playlist-container");
const songContainer = document.getElementById("song-container");
let playlist = [];

function injectSongs(songs) {
  songs.forEach((track) => {
    songContainer.insertAdjacentHTML(
      "beforeend",
      `
      <div class="song-card">
        <img src="${track.cover}" alt="${track.title}" />
        <h2>${track.title}</h2>
        <p>${track.artist}</p>
        <button class="add-to-playlist-btn">Add to Playlist</button>
        <button class="remove-from-playlist-btn">Remove from Playlist</button>
      </div>
    `
    );
  });
}

injectSongs(song);

songContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("add-to-playlist-btn")) {
    const card = e.target.closest(".song-card");
    const title = card.querySelector("h2").textContent;
    const artist = card.querySelector("p").textContent;
    const cover = card.querySelector("img").src;

    playlist.push({ title, artist, cover });
    console.log("Added to playlist:", playlist);
  }
});
renderPlaylist();

function renderPlaylist() {
  playlistContainer.innerHTML = "";

  playlist.forEach((track) => {
    playlistContainer.insertAdjacentHTML(
      "beforeend",
      `
      <div class="playlist-item">
        <img src="${track.cover}" />
        <h3>${track.title}</h3>
        <p>${track.artist}</p>
      </div>
      `
    );
  });
}
const goToPlaylistBtn = document.getElementById("go-to-playlist-btn");

goToPlaylistBtn.addEventListener("click", () => {
  renderPlaylist();
  songContainer.style.display = "none";
  playlistContainer.style.display = "block";
});

removePlaylistBtn.addEventListener("click", () => {
  playlist = [];
  renderPlaylist();
});

const removePlaylistBtn = document.getElementById("remove-from-playlist-btn");

function removeSongs(songs) {
  songs.forEach((track) => {
    songContainer.insertAdjacentHTML(
      "beforeend",
      `
      <div class="song-card">
        <img src="${track.cover}" alt="${track.title}" />
        <h2>${track.title}</h2>
        <p>${track.artist}</p>
        <button class="add-to-playlist-btn">Add to Playlist</button>
        <button class="remove-from-playlist-btn">Remove from Playlist</button>
      </div>
    `
    );
  });
}

removeSongs(song);
