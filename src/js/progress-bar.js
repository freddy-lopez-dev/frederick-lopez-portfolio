let i = 0;

function loadBar () {
  if (i == 0) {
    i = 1;
    const elem = document.querySelectorAll("#progress");
    elem.forEach(div => {
      var width = 1;
      var id = setInterval(frame, 20);
      function frame() {
        if (width >= 75) {
          clearInterval(id);
          i = 0;
        } else {
          width++;
          div.style.width = width + "%";
        }
      }
    });    
  }
}

window.onload = loadBar();
