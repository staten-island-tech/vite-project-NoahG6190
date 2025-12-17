import "./style.css";

const songs = [
  { title: "Lady of Namek", artist: "Tory Lanez", cover: "/lady of namek.jpg" },
  {
    title: "Girls Want Girls",
    artist: "Drake",
    cover: "/Girls want Girls.webp",
  },
  {
    title: "Nothing Like Uuu",
    artist: "Nettspend",
    cover: "Nothing Like Uuu.jpg",
  },
  { title: "crush", artist: "2hollis", cover: "/crush.jpg" },
  { title: "ATTITUDE", artist: "Don Toliver", cover: "/ATTITUDE.webp" },
  { title: "Rather Lie", artist: "Playboi Carti", cover: "/i am music.png" },
  { title: "poison", artist: "jaydes", cover: "/poison.webp" },
  { title: "Snooze", artist: "SZA", cover: "/snoooze.webp" },
  { title: "yes", artist: "Ken Carson", cover: "/yes.jpg" },
  {
    title: "Spin Bout U",
    artist: "Drake feat. 21 Savage",
    cover: "/spin bout you.jpg",
  },
  { title: "Die For You", artist: "The Weeknd", cover: "/die for you.jpg" },
  { title: "jeans", artist: "2hollis", cover: "/jeans.webp" },
  {
    title: "Whole Lotta Red",
    artist: "Playboi Carti",
    cover: "whole lotta red.jpg",
  },
  {
    title: "overseas",
    artist: "Ken Carson",
    cover: "/overseas.webp",
  },
  {
    title: "White Ferrari",
    artist: "Frank Ocean",
    cover: "/channel orange.webp",
  },
  {
    title: "convenience",
    artist: "jaydes",
    cover: "/convience.jpg",
  },
];

const playlistContainer = document.getElementById("playlist-container");
const songContainer = document.getElementById("song-container");
const goToPlaylistBtn = document.getElementById("go-to-playlist-btn");
const backToSongsBtn = document.getElementById("back-to-songs-btn");
const searchInput = document.getElementById("search-input");

let playlist = [];

function injectSongs() {
  const query = searchInput.value.toLowerCase();
  songContainer.innerHTML = "";

  const filtered = songs.filter(
    (song) =>
      song.title.toLowerCase().includes(query) ||
      song.artist.toLowerCase().includes(query)
  );

  filtered.forEach((track) => {
    songContainer.insertAdjacentHTML(
      "beforeend",
      `
    <div class="song-card">
      <img src="${track.cover}" alt="${track.title}" />
      <h2>${track.title}</h2>
      <p>${track.artist}</p>
      <button class="add-to-playlist-btn">Add</button>
    </div>
  `
    );
  });
}

injectSongs();
searchInput.addEventListener("input", injectSongs);

songContainer.addEventListener("click", (e) => {
  if (!e.target.classList.contains("add-to-playlist-btn")) return;

  const card = e.target.closest(".song-card");
  const title = card.querySelector("h2").textContent;
  const artist = card.querySelector("p").textContent;
  const cover = card.querySelector("img").src;

  if (!playlist.some((item) => item.title === title)) {
    playlist.push({ title, artist, cover });
  }
});

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
      <button class="remove-from-playlist-btn">Remove</button>
    </div>
  `
    );
  });
}

playlistContainer.addEventListener("click", (e) => {
  if (!e.target.classList.contains("remove-from-playlist-btn")) return;

  const item = e.target.closest(".playlist-item");
  const title = item.querySelector("h3").textContent;

  playlist = playlist.filter((track) => track.title !== title);
  renderPlaylist();
});

const coverSection = document.getElementById("playlist-cover-section");
const coverInput = document.getElementById("playlist-cover-input");
const setCoverBtn = document.getElementById("set-cover-btn");
const coverDisplay = document.getElementById("playlist-cover");

let playlistCoverUrl = "";

setCoverBtn.addEventListener("click", () => {
  const url = coverInput.value.trim();
  if (!url) return;

  playlistCoverUrl = url;

  coverDisplay.innerHTML = `
    <img src="${playlistCoverUrl}" alt="Playlist Cover" />
  `;
});
goToPlaylistBtn.addEventListener("click", () => {
  renderPlaylist();
  songContainer.classList.add("hidden");
  playlistContainer.classList.remove("hidden");
  coverSection.classList.remove("hidden");
  goToPlaylistBtn.classList.add("hidden");
  backToSongsBtn.classList.remove("hidden");
});

backToSongsBtn.addEventListener("click", () => {
  playlistContainer.classList.add("hidden");
  songContainer.classList.remove("hidden");
  coverSection.classList.add("hidden");
  goToPlaylistBtn.classList.remove("hidden");
  backToSongsBtn.classList.add("hidden");
});
const toggleBtn = document.getElementById("theme-toggle-btn");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
