const songs = [
    { title: "Song 1", artist: "Artist A", cover: "cover1.jpg"},
    { title: "Song 2", artist: "Artist B", cover: "cover2.jpg" },
    { title: "Song 3", artist: "Artist C",cover: "cover3.jpg" },
    { title: "Song 4", artist: "Artist D",cover: "cover4.jpg" },
  

const playlistContainer = document.getElementById('playlist-container');
const songContainer = document.getElementById('song-container');
let playlist = [];
 function inject(songs) {
    songContainer.insertAdjacentHTML'beforeend',
    
        <div class="card">
            <img src="${songs.cover}" alt="${songs.title} Cover" class="cover-image"/>

    )

