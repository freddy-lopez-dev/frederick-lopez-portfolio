
const jsChecker = document.querySelector('.code-tab').lastElementChild.className
const cssList = document.getElementById('listStyle');
const htList = document.getElementById('listHt');
const jsList = document.getElementById('listScrpt');

if (jsChecker == 'scrpt') {
  jsList.addEventListener('click', function(e) {
    e.preventDefault();
    cssList.classList.remove('current');
    htList.classList.remove('current');
    jsList.classList.add('current');
    document.getElementById('html-code').style.display = 'none';
    document.getElementById('css-code').style.display = 'none';
    document.getElementById('js-code').style.display = 'block';
  });

  cssList.addEventListener('click', function(e) {
    e.preventDefault();
    cssList.classList.add('current');
    htList.classList.remove('current');
    jsList.classList.remove('current');
    document.getElementById('html-code').style.display = 'none';
    document.getElementById('css-code').style.display = 'block';
  });

  htList.addEventListener('click', function(e) {
    e.preventDefault();
    jsList.classList.remove('current');
    cssList.classList.remove('current');
    htList.classList.add('current');
    document.getElementById('html-code').style.display = 'block';
    document.getElementById('css-code').style.display = 'none';
  })

} else {
  cssList.addEventListener('click', function(e) {
    e.preventDefault();
    cssList.classList.add('current');
    htList.classList.remove('current');
    document.getElementById('html-code').style.display = 'none';
    document.getElementById('css-code').style.display = 'block';
  })
  
  
  htList.addEventListener('click', function(e) {
    e.preventDefault();
    cssList.classList.remove('current');
    htList.classList.add('current');
    document.getElementById('html-code').style.display = 'block';
    document.getElementById('css-code').style.display = 'none';
  })
}




