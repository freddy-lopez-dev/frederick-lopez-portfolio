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
  flix.style.display = "flex";
  lrover.style.display = "none";
  minigame.style.display = "none";
  pig.style.display = "none";
  outlet.style.display = "none";
  kraft.style.display = "none";
  portal.style.display = "none";
  crypt.style.display = "flex";
  lumen.style.display = "flex";
})

uxDesign.addEventListener('click', function(e) {
  e.preventDefault();
  listUX.classList.add("current");
  allCat.classList.remove("current");
  listWeb.classList.remove("current");
  listMini.classList.remove("current");
  flix.style.display = "none";
  minigame.style.display = "none";
  pig.style.display = "none";
  crypt.style.display = "none";
  lumen.style.display = "none";
  lrover.style.display = "flex";
  kraft.style.display = "flex";
  portal.style.display = "flex";
  outlet.style.display = "flex";
})

miniG.addEventListener('click', function(e) {
  e.preventDefault();
  listUX.classList.remove("current");
  allCat.classList.remove("current");
  listWeb.classList.remove("current");
  listMini.classList.add("current");
  flix.style.display = "none";
  lrover.style.display = "none";
  minigame.style.display = "flex";
  pig.style.display = "flex";
  outlet.style.display = "none";
  kraft.style.display = "none";
  portal.style.display = "none";
  crypt.style.display = "none";
  lumen.style.display = "none";
})