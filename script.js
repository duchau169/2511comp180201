const musicPlayer = document.getElementById('musicPlayer');
const playPauseBtn = document.getElementById('playPause');
const changeSongBtn = document.getElementById('changeSong');
const changeBgBtn = document.getElementById('changeBg');
const background = document.querySelector('.background');
let songs = ['binz.mp3', 'daybien.mp3', 'trtd.mp3'];
let currentSong = 0;
let playing = false;
let backgrounds = ['ho.avif', 'chill.jpg', 'deepsea.webp'];
let currentBg = 0;
playPauseBtn.addEventListener('click', () => {
  if (playing) {
    musicPlayer.pause();
    playing = false;
    playPauseBtn.textContent = '🎵 Phát nhạc';
  } else {
    musicPlayer.play();
    playing = true;
    playPauseBtn.textContent = '⏸️ Dừng nhạc';
  }
});
changeSongBtn.addEventListener('click', () => {
  currentSong = (currentSong + 1) % songs.length;
  musicPlayer.src = songs[currentSong];
  if (playing) musicPlayer.play();
});
changeBgBtn.addEventListener('click', () => {
  currentBg = (currentBg + 1) % backgrounds.length;
  background.src = backgrounds[currentBg];
});
