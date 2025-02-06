console.log("Welcome to Spotify");


let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songInfo = document.querySelector('.songInfo span');
let prev = document.getElementById('pre');
let next = document.getElementById('next');


const songs = [
  { songName: "Let Me Love You", filePath: "songs/1.mp3", coverPath: "cover/1.jpg" },
  { songName: "Alone", filePath: "songs/2.mp3", coverPath: "cover/2.jpg" },
  { songName: "Faded", filePath: "songs/3.mp3", coverPath: "cover/3.jpg" },
  { songName: "On & On", filePath: "songs/4.mp3", coverPath: "cover/4.jpg" },
  { songName: "Spectre", filePath: "songs/5.mp3", coverPath: "cover/5.jpg" },
  { songName: "sadiya", filePath: "songs/6.mp3", coverPath: "cover/6.jpg" },
  { songName: "Fade", filePath: "songs/7.mp3", coverPath: "cover/7.jpg" },
  { songName: "Koye", filePath: "songs/8.mp3", coverPath: "cover/8.jpg" },
  { songName: "Aye", filePath: "songs/9.mp3", coverPath: "cover/9.jpg" },
  { songName: "Fyana", filePath: "songs/10.mp3", coverPath: "cover/10.jpg" },
];


masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause");
    masterPlay.classList.add("fa-play");
    gif.style.opacity = 0;
  }
});


audioElement.addEventListener("timeupdate", () => {
  let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});


myProgressBar.addEventListener("change", () => {
  audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
});

const playSong = (index) => {
  songIndex = index;
  audioElement.src = songs[index].filePath;
  songInfo.textContent = songs[index].songName;
  gif.style.opacity = 1;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play");
  masterPlay.classList.add("fa-pause");
};


Array.from(document.getElementsByClassName("fa-play")).forEach((element, i) => {
  element.addEventListener("click", () => {
    playSong(i);
  });
});


prev.addEventListener("click", () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  playSong(songIndex);
});


next.addEventListener("click", () => {
  songIndex = (songIndex + 1) % songs.length;
  playSong(songIndex);
});