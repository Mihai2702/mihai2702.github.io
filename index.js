var skillsEl = document.getElementById("skills-list");

var skills = [
  {name: "HTML", endorcements: 5},
  {name: "CSS",  endorcements: 5},
  {name: "JS",  endorcements: 5},
  {name: "Drive",  endorcements: 5},
  ];
// var skills = [["HTML", 5], ["CSS",4], "JS", "Drive"];

var skillsHTML = " ";
var i = 0;



skills.forEach(function(skill){
skillsHTML += "<li>" + skill.name + " " + "-" + skill.endorcements +  "</li>";

})


skillsEl.innerHTML = skillsHTML;

function hideAllPages(){
  var pages = document.querySelectorAll(".page");
  pages.forEach(function(page){
    hide(page.id);
  });

}

function show(id){
  document.getElementById(id).style.display = 'block'; 
}
 function hide(id){
  document.getElementById(id).style.display = 'none'; 

 }

function displayPage(id){
hideAllPages();
show(id);
}

function initMenu() {
  document
  .getElementById('top-menu-bar')
  .addEventListener('click', function(e){

    if(e.target.matches('a')){
      // var id =  e.target.getAttribute("data-page");
      var id = e.target.dataset.page;
      console.warn("click", id, e.target);
      displayPage(id);
    }
  })
}

displayPage('skills');
initMenu();