let autoType = document.getElementById('auto-type');

let buildWeb = "I Build web interfaces";
let designWeb = "I Design web interfaces"
let index = 0;

window.next_letter = function() {
  if (index <= buildWeb.length) {
    autoType.textContent = buildWeb.substr(0, index++);
    setTimeout("next_letter()", 40);
  } 
}

next_letter();

