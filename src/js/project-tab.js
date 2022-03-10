const webDevProjects = document.getElementById('webDev');
const listWeb = document.getElementById('listWeb');
const uxDesign = document.getElementById('designUX');
const listUX = document.getElementById('listUX');
const miniG = document.getElementById('miniG');
const listMini = document.getElementById('listMini');
const allCat = document.getElementById('allCat');

webDevProjects.addEventListener('click', function(e) {
  e.preventDefault();
  listWeb.classList.add("current");
  allCat.classList.remove("current");
  listUX.classList.remove("current");
  listMini.classList.remove("current");
  logo.style.display = "block";
  logo.firstElementChild.style.left = "370px"
  lrover.style.display = "none";
  minigame.style.display = "none";
  outlet.style.display = "none";
  kraft.style.display = "none";
  portal.style.display = "none";
  shift.style.display = "none";
  crypt.style.display = "block";
  lumen.style.display = "block";
  crypt.firstElementChild.style.top = "50px"
  hovercrypt.style.top = "50px"
  lumen.firstElementChild.style.top = "50px"
  lumen.firstElementChild.style.left = "710px"
  hoverlumen.style.top = "50px"
  hoverlumen.style.left = "710px"
})

uxDesign.addEventListener('click', function(e) {
  e.preventDefault();
  listUX.classList.add("current");
  allCat.classList.remove("current");
  listWeb.classList.remove("current");
  listMini.classList.remove("current");
  logo.style.display = "none";
  minigame.style.display = "none";
  crypt.style.display = "none";
  lumen.style.display = "none";
  lrover.style.display = "block";
  kraft.style.display = "block";
  portal.style.display = "block";
  shift.style.display = "block";
  outlet.style.display = "block";
  outlet.firstElementChild.style.top = "300px";
  hoveroutlet.style.top = "300px"
  portal.firstElementChild.style.top = "50px";
  portal.firstElementChild.style.left = "30px";
  hoverportal.style.top = "50px";
  hoverportal.style.left = "30px";
  shift.firstElementChild.style.top = "50px"
  hovershift.style.top = "50px";
  kraft.firstElementChild.style.top = "300px"
  kraft.firstElementChild.style.height = "500px"
  kraft.firstElementChild.style.right = "40px"
  hoverkraft.style.top = "300px";
  hoverkraft.style.right = "40px";
})

miniG.addEventListener('click', function(e) {
  e.preventDefault();
  listUX.classList.remove("current");
  allCat.classList.remove("current");
  listWeb.classList.remove("current");
  listMini.classList.add("current");
  logo.style.display = "none";
  lrover.style.display = "none";
  minigame.style.display = "block";
  outlet.style.display = "none";
  kraft.style.display = "none";
  portal.style.display = "none";
  shift.style.display = "none";
  crypt.style.display = "none";
  lumen.style.display = "none";
  minigame.firstElementChild.style.left = "30px";
  hovergame.style.left = "30px";
})