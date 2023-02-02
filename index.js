var r1 = fetch('skills.json');
r1.then(raspuns => {
  var r2 = raspuns.json();
  r2.then(skills => {
    displaySkills(skills);
  });
});

function displaySkills(skills) {
  const skillsHTML = skills.map(function (skill) {
    return '<li>' + skill.name + ' ' + '-' + skill.endorcements + '</li>';
  });
  const skillsEl = document.getElementById('skills-list');
  skillsEl.innerHTML = skillsHTML.join('');
}

function hideAllPages() {
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => {
    hide(page.id);
  });
}

function show(id) {
  document.getElementById(id).style.display = 'block';
}
function hide(id) {
  document.getElementById(id).style.display = 'none';
}

function displayPage(id) {
  hideAllPages();
  show(id);
}

function initMenu() {
  document.getElementById('top-menu-bar').addEventListener('click', e => {
    if (e.target.matches('a')) {
      // var id =  e.target.getAttribute("data-page");
      const id = e.target.dataset.page;
      displayPage(id);
    }
  });
}

displayPage('home');
initMenu();

const f1 = function () {
  return 'arrow';
};
const f2 = () => {
  return 'arrow';
};
// music player

let progress = document.getElementById('progess');
const song = document.getElementById('song');
let ctrlIcon = document.getElementById('ctrlIcon');
let cover = document.getElementById('coverSong');
let currentTime = document.getElementById('currentTime');
let durationTime = document.getElementById('songDuration');
// song.addEventListener('timeupdates', songTimeUpdate);

let music = [
  { title: 'Everything She Wants', artist: 'Wham!', path: '/music/everything-she-wants.mp3', cover: '/images/everything-she-wants.jfif', duration: '05:10' },

  { title: 'Esti', artist: 'The Kryptonite Sparks', path: '/music/esti.mp3', cover: '/images/esti.jfif', duration: '03:14' },

  { title: 'Afraid To Feel', artist: 'LF System', path: '/music/afraid_to_feel.mp3', cover: '/images/afraid_to_feel.png', duration: '03:02' },

  { title: 'The Walker', artist: 'Fitz and the Tantrums', path: '/music/the_walker.mp3', cover: '/images/the_walker.jpg', duration: '03:59' },

  { title: 'Distant Dreamer', artist: 'Duffy', path: '/music/distant_dreamer.mp3', cover: '/images/distant_dreamer.jfif', duration: '05:13' },
];
let currentSongIndex = 0;

function nextSong() {
  currentSongIndex++;
  if (currentSongIndex >= music.length) {
    currentSongIndex = 0;
  }
  songTitle.innerHTML = music[currentSongIndex].title;
  artist.innerHTML = music[currentSongIndex].artist;
  song.src = music[currentSongIndex].path;
  coverSong.src = music[currentSongIndex].cover;
  songDuration.innerHTML = music[currentSongIndex].duration;
  playPause();
  song.play();
}

function prevSong() {
  currentSongIndex--;
  if (currentSongIndex < 0) {
    currentSongIndex = music.length - 1;
  }
  songTitle.innerHTML = music[currentSongIndex].title;
  artist.innerHTML = music[currentSongIndex].artist;
  song.src = music[currentSongIndex].path;
  coverSong.src = music[currentSongIndex].cover;
  playPause();
  song.play();
}

song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.curentTime;
};

function playPause() {
  if (ctrlIcon.classList.contains('fa-pause')) {
    song.pause();
    ctrlIcon.classList.remove('fa-pause');
    ctrlIcon.classList.add('fa-play');
  } else {
    song.play();
    ctrlIcon.classList.remove('fa-play');
    ctrlIcon.classList.add('fa-pause');
  }
}
if (song.play()) {
  setInterval(() => {
    progress.value = song.currentTime;
  }, 500);
}
progress.onchange = function () {
  song.play();
  song.currentTime = progress.value;
  ctrlIcon.classList.add('fa-pause');
  ctrlIcon.classList.remove('fa-play');
};
song.pause();

//time update
setInterval(() => {
  const minutes = Math.floor(song.currentTime / 60);
  const seconds = Math.floor(song.currentTime % 60);

  currentTime.innerHTML = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}, 1000);
