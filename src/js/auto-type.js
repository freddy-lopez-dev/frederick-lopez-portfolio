const banner = document.querySelector('.banner')

banner.lastElementChild.addEventListener('click', function() {
  location.href='projects.html';
})

const autoType = document.getElementById('auto-type');
var buildWeb = "Let's make it possible";
var index = 0;

window.next_letter = function() {
  if (index <= buildWeb.length) {
    autoType.textContent = buildWeb.substr(0, index++);
    setTimeout("next_letter()", 70);
  } 
}

next_letter();

