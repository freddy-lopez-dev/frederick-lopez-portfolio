const cssList = document.getElementById('listStyle');
cssList.addEventListener('click', function(e) {
  e.preventDefault();
  cssList.classList.add('current');
  htList.classList.remove('current');
  document.getElementById('html-code').style.display = 'none';
  document.getElementById('css-code').style.display = 'block';
})

const htList = document.getElementById('listHt');
htList.addEventListener('click', function(e) {
  e.preventDefault();
  cssList.classList.remove('current');
  htList.classList.add('current');
  document.getElementById('html-code').style.display = 'block';
  document.getElementById('css-code').style.display = 'none';
})