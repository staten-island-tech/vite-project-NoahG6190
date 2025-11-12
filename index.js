const songs = [
  { title: "Song 1", artist: "Artist A", cover: "cover1.jpg" },
  { title: "Song 2", artist: "Artist B", cover: "cover2.jpg" },
  { title: "Song 3", artist: "Artist C", cover: "cover3.jpg" },
  { title: "Song 4", artist: "Artist D", cover: "cover4.jpg" },
];

const playlistContainer = document.getElementById("playlist-container");
const songContainer = document.getElementById("song-container");
let playlist = [];

// Render a single song card into the song container
function injectSong(song) {
  if (!songContainer) return;

  songContainer.insertAdjacentHTML(
    "beforeend",
    `
    <div class="song-card">
      <img src="${song.cover}" alt="${song.title} Cover" class="song-cover"/>
      const songs = [
        { title: "Song 1", artist: "Artist A", cover: "cover1.jpg" },
        { title: "Song 2", artist: "Artist B", cover: "cover2.jpg" },
        { title: "Song 3", artist: "Artist C", cover: "cover3.jpg" },
        { title: "Song 4", artist: "Artist D", cover: "cover4.jpg" },
      ];

      const playlistContainer = document.getElementById("playlist-container");
      const songContainer = document.getElementById("song-container");
      let playlist = [];

      // Render a single song card into the song container
      function injectSong(song) {
        if (!songContainer) return;

        songContainer.insertAdjacentHTML(
          "beforeend",
          `
          <div class="song-card">
            <img src="${song.cover}" alt="${song.title} Cover" class="song-cover"/>
            <h2>${song.title}</h2>
            <p>${song.artist}</p>
            <button class="add-to-playlist-btn" data-title="${song.title}">Add to Playlist</button>
          </div>`
        );
      }

      // Render all songs
      songs.forEach(injectSong);

      // Event delegation for add-to-playlist buttons
      if (songContainer) {
        songContainer.addEventListener("click", (e) => {
          const btn = e.target.closest(".add-to-playlist-btn");
          if (!btn) return;
          const title = btn.getAttribute("data-title");
          const song = songs.find((s) => s.title === title);
          if (!song) return;
          // avoid duplicates
          if (!playlist.some((s) => s.title === song.title)) {
            playlist.push(song);
            renderPlaylist();
          }
        });
      }

      function renderPlaylist() {
        if (!playlistContainer) return;
        playlistContainer.innerHTML = "";
        playlist.forEach((s) => {
          const el = document.createElement("div");
          el.className = "playlist-item";
          el.textContent = `${s.title} — ${s.artist}`;
          playlistContainer.appendChild(el);
        });
      }
