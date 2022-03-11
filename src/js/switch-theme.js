const darkTheme = document.getElementById('moon');
const lightTheme = document.getElementById('sun');

lightTheme.addEventListener('click', function(e) {
  e.preventDefault();
  lightTheme.style.backgroundColor = 'rgb(241,0,87)';
  lightTheme.lastElementChild.lastElementChild.style.color = 'white'
  darkTheme.style.backgroundColor = '#1e1e28';
  darkTheme.lastElementChild.lastElementChild.style.color = 'white'
})

darkTheme.addEventListener('click', function(e) {
  e.preventDefault();
  lightTheme.style.backgroundColor = '#1e1e28';
  lightTheme.lastElementChild.lastElementChild.style.color = '#8c8c8e'
  darkTheme.style.backgroundColor = 'rgb(241,0,87)';
  darkTheme.lastElementChild.lastElementChild.style.color = '#1e1e28'
})