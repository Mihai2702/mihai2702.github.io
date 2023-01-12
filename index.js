var skillsEl = document.getElementById("skills-list");

var skills = ["HTML", "CSS", "JS", "Drive"];

var skillsHTML = " ";
var i = 0;


for (var i = 0; i < skills.length; i++) {
  skillsHTML += "<li>" + skills[i] + "</li>";
}

skillsEl.innerHTML = skillsHTML;
var pageIds = ["home", "skills", "languages", "projects"];




function hideAllPages(){
 pageIds.forEach(function hidePage(pageId){
  hide(pageId);
}); 

}

function show(id){
  document.getElementById(id).style.display = 'block'; 
}
 function hide(id){
  document.getElementById(id).style.display = 'none'; 

 }

function displayLanguages(){
  hideAllPages();
  show("languages");
}
function displayProjects(){
  hideAllPages();
  show("projects");
}

function displayPage(id){
hideAllPages();
show(id);
}

displayPage('home');
