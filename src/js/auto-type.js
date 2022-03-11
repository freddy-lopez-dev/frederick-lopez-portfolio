const banner = document.querySelector('.banner')

banner.lastElementChild.addEventListener('click', function() {
  location.href='./pages/projects.html';
})

const autoType = document.getElementById('auto-type');
var buildWeb = "I build web interfaces";
var index = 0;

window.next_letter = function() {
  if (index <= buildWeb.length) {
    autoType.textContent = buildWeb.substr(0, index++);
    setTimeout("next_letter()", 70);
  } 
}

next_letter();

