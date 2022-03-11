const darkTheme = document.getElementById('moon');
const lightTheme = document.getElementById('sun');
const hamburgerBg = document.getElementById('hamburger');
const pageName = document.querySelector('.page-name');
const viewMode = document.querySelector('.view-mode');


lightTheme.addEventListener('click', function(e) {
  e.preventDefault();
  lightTheme.style.backgroundColor = 'rgb(241,0,87)';
  lightTheme.lastElementChild.lastElementChild.style.color = 'white'
  darkTheme.style.backgroundColor = '#1e1e28';
  darkTheme.lastElementChild.lastElementChild.style.color = 'white'
  hamburgerBg.style.backgroundColor = 'rgb(72, 72, 99)';
  pageName.style.backgroundColor = '#f2f3f8'
  viewMode.style.backgroundColor = 'rgb(72, 72, 99)';
})

darkTheme.addEventListener('click', function(e) {
  e.preventDefault();
  lightTheme.style.backgroundColor = '#1e1e28';
  lightTheme.lastElementChild.lastElementChild.style.color = '#8c8c8e';
  darkTheme.style.backgroundColor = 'rgb(241,0,87)';
  darkTheme.lastElementChild.lastElementChild.style.color = '#1e1e28';
  hamburgerBg.style.backgroundColor = '#24242f';
  pageName.style.backgroundColor = '#20202a';
  viewMode.style.backgroundColor = 'rgb(36,36,47)';
})