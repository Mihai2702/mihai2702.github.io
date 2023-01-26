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
let song = document.getElementById('song');
let ctrlIcon = document.getElementById('ctrlIcon');
currentTime = document.getElementById('currentTime');
durationTime = document.getElementById('songDuration');

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

//  time updates

function songTimeUpdate() {
  if (song.duration) {
    let curmin = Math.floor(song.currentTime / 60);
    let cursec = Math.floor(song.currentTime - curmin * 60);
    let durdmin = Math.floor(song.currentTime / 60);
    let dursec = Math.floor(song.currentTime - durmin * 60);

    if (dursec < 10) {
      dursec = '0' + dursec;
    }
    if (durmin < 10) {
      durmin = '0' + durmin;
    }
    if (cursec < 10) {
      cursec = '0' + cursec;
    }
    if (curmin < 10) {
      curmin = '0' + curmin;
    }

    currentTime.innerHTML = curmin + ':' + cursec;
    songDuration.innerHTML = durdmin + ':' + dursec;
  } else {
    currentTime.innerHTML = '00' + ':' + '00';
    songDuration.innerHTML = durdmin + ':' + dursec;
  }
}
