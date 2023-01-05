var skillsEl = document.getElementById("skills-list");

var skills = ["HTML", "CSS", "JS", "Drive"];

var skillsHTML = " ";
var i = 0;


for (var i = 0; i < skills.length; i++) {
  skillsHTML += "<li>" + skills[i] + "</li>";
}

skillsEl.innerHTML = skillsHTML;

//display home

function hideAllPages(){
  document.getElementById("home").style.display = 'none';
  document.getElementById("skills").style.display = 'none';
  document.getElementById("languages").style.display = 'none';
  document.getElementById("projects").style.display = 'none';
}

function show(id){
  document.getElementById(id).style.display = 'block'; 
}

function displayHome() {
  hideAllPages();
  show("home");

}
function displaySkills() {
  hideAllPages();
  show("skills");
}
displayLanguages();

function displayLanguages(){
  hideAllPages();
  show("languages");
}
function displayProjects(){
  hideAllPages();
  show("projects");
}
