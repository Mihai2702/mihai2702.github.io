var skillsEl = document.getElementById('skills-list');

var skills = [
  { name: 'HTML', endorcements: 5 },
  { name: 'CSS', endorcements: 5 },
  { name: 'JS', endorcements: 5 },
  { name: 'Drive', endorcements: 5 },
];
// var skills = [["HTML", 5], ["CSS",4], "JS", "Drive"];

var skillsHTML = ' ';

var s = skills.map(function (skill) {
  return '<li>' + skill.name + ' ' + '-' + skill.endorcements + '</li>';
});
console.warn('s', s);
skillsEl.innerHTML = s.join('');

function hideAllPages() {
  var pages = document.querySelectorAll('.page');
  pages.forEach(function (page) {
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
  document.getElementById('top-menu-bar').addEventListener('click', function (e) {
    if (e.target.matches('a')) {
      // var id =  e.target.getAttribute("data-page");
      var id = e.target.dataset.page;
      console.warn('click', id, e.target);
      displayPage(id);
    }
  });
}

displayPage('home');
initMenu();

// music player

let progress = document.getElementById('progess');
let song = document.getElementById('song');
let ctrlIcon = document.getElementById('ctrlIcon');
let btn = document.querySelector('playBot');
// songCurTime = document.querySelector('currentTime');
// songDurTime = document.querySelector('songDuration');
// song.addEventListener('timeUpdates', songTimeUpdate);
var cover = document.querySelector('cover');
var rotate = false;
var runner;
var degrees = 0;

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

// rotate

//  time updates

// function songTimeUpdate() {
//   if (song.duration) {
//     let curmin = Math.floor(song.currentTime / 60);
//     let cursec = Math.floor(song.currentTime - curmin * 60);
//     let durdmin = Math.floor(song.currentTime / 60);
//     let dursec = Math.floor(song.currentTime - durmin * 60);

//     if (dursec < 10) {
//       dursec = '0' + dursec;
//     }
//     if (durmin < 10) {
//       durmin = '0' + durmin;
//     }
//     if (cursec < 10) {
//       cursec = '0' + cursec;
//     }
//     if (curmin < 10) {
//       curmin = '0' + curmin;
//     }

//     songCurTime.innerHTML = curmin + ':' + cursec;
//     songDurTime.innerHTML = durdmin + ':' + dursec;
//   } else {
//     songCurTime.innerHTML = '00' + ':' + '00';
//     songDurTime.innerHTML = durdmin + ':' + dursec;
//   }
// }
