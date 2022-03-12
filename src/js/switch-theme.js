const darkTheme = document.getElementById('moon');
const lightTheme = document.getElementById('sun');
const hamburgerBg = document.getElementById('hamburger');
const pageName = document.querySelector('.page-name');
const viewMode = document.querySelector('.view-mode');
const leftIcon = document.querySelector('.profile-icon');
const persnlInfo = document.querySelector('.personal-info');
const skillInfo = document.querySelector('.skill-info');
const socialbutn = document.querySelector('.social-buttons');
const skillColor = document.querySelectorAll('.skill');
const bodyBackground = document.querySelector('.middle-panel');
const myServices = document.querySelector('#my-services');
const myRecom = document.querySelector('.recommendations');
const myComp = document.querySelector('.company-images');



lightTheme.addEventListener('click', function(e) {
  e.preventDefault();
  lightTheme.style.backgroundColor = 'rgb(241,0,87)';
  lightTheme.lastElementChild.lastElementChild.style.color = 'white'
  darkTheme.style.backgroundColor = '#1e1e28';
  darkTheme.lastElementChild.lastElementChild.style.color = 'white'
  hamburgerBg.style.backgroundColor = 'rgb(72, 72, 99)';
  pageName.style.backgroundColor = '#f2f3f8'
  viewMode.style.backgroundColor = 'rgb(72, 72, 99)';
  leftIcon.style.backgroundColor = 'rgb(72, 72,99)';
  skillInfo.style.backgroundColor = '#f2f3f8';
  socialbutn.style.backgroundColor = 'rgb(72, 72,99)';
  persnlInfo.style.color = '#4a4a4a';
  skillColor.forEach(element => {
    element.firstElementChild.style.color = '#4a4a4a';
  });
  document.body.style.backgroundColor = 'rgb(200,200,226)';
  bodyBackground.style.backgroundImage = 'url()';
  bodyBackground.style.backgroundColor = '#f2f3f8';
  bodyBackground.style.border = '0.5px solid rgba(200,200,226,0.3)';
  myServices.firstElementChild.style.color = '#4a4a4a';
  myRecom.firstElementChild.style.color = '#4a4a4a';
  myComp.firstElementChild.style.color = '#4a4a4a';
  myComp.lastElementChild.style.backgroundColor = 'rgb(36,36,47)';
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
  leftIcon.style.backgroundColor = 'rgb(36,36,47)';
  skillInfo.style.backgroundColor = 'rgb(32,32,42)';
  socialbutn.style.backgroundColor = 'rgb(36,36,47)';
  persnlInfo.style.color = 'white';
  skillColor.forEach(element => {
    element.firstElementChild.style.color = 'white';
  });
  document.body.style.backgroundColor = 'rgb(30, 30, 41)';
  bodyBackground.style.backgroundImage = 'url(images/middle-panel-wallpaper.jpg)';
  bodyBackground.style.border = '';
  myServices.firstElementChild.style.color = 'white';
  myRecom.firstElementChild.style.color = 'white';
  myComp.firstElementChild.style.color = 'white';
  myComp.lastElementChild.style.backgroundColor = '';
})