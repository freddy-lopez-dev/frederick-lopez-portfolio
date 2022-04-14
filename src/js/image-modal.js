//button back projects
document.querySelector('.project-button').lastElementChild.addEventListener('click', function() {
  location.href='projects.html';
})

//image modal

const modal1 = document.getElementById("modal1");
const modal2 = document.getElementById("modal2");

const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");

const modalImg1 = document.getElementById("modalImg1");
const modalImg2 = document.getElementById("modalImg2");

const captionText1 = document.getElementById("caption1");
const captionText2 = document.getElementById("caption2");

img1.addEventListener('click', function() {
  modal1.style.display = "block";
  modalImg1.src = this.src;
  captionText1.innerHTML = this.alt;
})

img2.addEventListener('click', function() {
  modal2.style.display = "block";
  modalImg2.src = this.src;
  captionText2.innerHTML = this.alt;
})

const cross1 = document.getElementById('cross1')

cross1.addEventListener('click', function() {
  modal1.style.display = "none";
})

const cross2 = document.getElementById('cross2')

cross2.addEventListener('click', function() {
  modal2.style.display = "none";
})
