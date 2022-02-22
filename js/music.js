var music = new Audio();
music.src = "/musics/gims.mp3";
var music2 = new Audio();
music2.src = "/musics/conor.mp3";
var music3 = new Audio();
music3.src = "/musics/lenka.mp3";

const songArtist = document.getElementById("songArtist");
const songName = document.getElementById("songName");
const songPic = document.getElementById("songPic");
const play_icon = document.getElementById("play_icon");
const pause_icon = document.getElementById("pause_icon");
const pic = document.querySelector(".pic");
const white_mode = document.getElementById("whiteMode");
const dark_mode = document.getElementById("darkMode");
const music_box = document.getElementById("music_box");
function musicPlay() {
  songArtist.innerHTML = "Gims";
  songName.innerHTML = "Dans Son Sac";
  play_icon.style.display = "none";
  pause_icon.style.display = "flex";
  pic.style.animation = "picture 8s 0s forwards infinite";
  songPic.style.backgroundImage =
    "url('https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Ma%C3%AEtre_Gims_Cannes_2016.jpg/220px-Ma%C3%AEtre_Gims_Cannes_2016.jpg')";
  music.play();
}

function musicPause() {
  pause_icon.style.display = "none";
  play_icon.style.display = "flex";
  pic.style.animation = "none";
  music.pause();
  music2.pause();
  music3.pause();
}
function whiteMode() {
  white_mode.style.display = "none";
  dark_mode.style.display = "block";
  music_box.style.backgroundColor = "#383a36";
}

function darkMode() {
  white_mode.style.display = "block";
  dark_mode.style.display = "none";
  music_box.style.backgroundColor = "#1f1e28";
}

function leftMusics() {
  play_icon.style.display = "none";
  pause_icon.style.display = "flex";
  songArtist.innerHTML = "Conor Maynard";
  songName.innerHTML = "Dance with Somebody";
  songPic.style.backgroundImage =
    "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8dBvkg_VSg5nQT5blQgdpPsD1xj1LB8YTGg&usqp=CAU')";

  music.pause();
  music3.pause();
  music2.play();
}
function rightMusic() {
  play_icon.style.display = "none";
  pause_icon.style.display = "flex";
  songArtist.innerHTML = "Lenka";
  songName.innerHTML = "Everything at once";
  songPic.style.backgroundImage =
    "url('https://m.media-amazon.com/images/M/MV5BMTM4Mzg2NWEtYzMyMy00MWNhLWJkMjMtYzJiN2I5YmZkNDQyXkEyXkFqcGdeQXVyMzcyNDg4NA@@._V1_UY1200_CR165,0,630,1200_AL_.jpg')";

  music.pause();
  music2.pause();
  music3.play();
}
