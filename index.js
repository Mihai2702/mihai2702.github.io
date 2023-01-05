var skillsEl = document.getElementById("skills-list");

var skills = ["HTML", "CSS", "JS", "Drive"];

var skillsHTML = " ";
var i = 0;


for (var i = 0; i < skills.length; i++) {
  skillsHTML += "<li>" + skills[i] + "</li>";
}

skillsEl.innerHTML = skillsHTML;

//display home


function displayHome() {
   document.getElementById("skills").style.display = 'none';
   document.getElementById("languages").style.display = 'none';
   document.getElementById("projects").style.display = 'none';
  document.getElementById("home").style.display = 'block';

}
function displaySkills() {
  document.getElementById("home").style.display = 'none';
  document.getElementById("languages").style.display = 'none';
  document.getElementById("projects").style.display = 'none';
  document.getElementById("skills").style.display = 'block';
}
displayLanguages();

function displayLanguages(){
  document.getElementById("skills").style.display = 'none';
  document.getElementById("home").style.display = 'none';
  document.getElementById("projects").style.display = 'none';
  document.getElementById("languages").style.display = 'block';
}
function displayProjects(){
  document.getElementById("home").style.display = 'none';
  document.getElementById("skills").style.display = 'none';
  document.getElementById("languages").style.display = 'none';
  document.getElementById("projects").style.display = 'block';
}