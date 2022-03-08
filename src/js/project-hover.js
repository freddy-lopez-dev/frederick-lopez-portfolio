const logo = document.getElementById('logo');
const hiddenDiv = document.getElementById('hoverlogo');
const lrover = document.getElementById('lrover');
const hoverlrover = document.getElementById('hoverlrover');
const minigame = document.getElementById('match');
const hovergame = document.getElementById('hovergame');
const outlet = document.getElementById('outlet');
const hoveroutlet = document.getElementById('hoveroutlet');
const lumen = document.getElementById('lumen8');
const hoverlumen = document.getElementById('hoverlumen');
const kraft = document.getElementById('kraft');
const hoverkraft = document.getElementById('hoverkraft');
const portal = document.getElementById('portal');
const hoverportal = document.getElementById('hoverportal');
const shift = document.getElementById('shift');
const hovershift = document.getElementById('hovershift');
const crypt = document.getElementById('crypt');
const hovercrypt = document.getElementById('hovercrypt');

logo.addEventListener('mouseover', function(e) {
  hiddenDiv.style.display = 'block';
})
logo.addEventListener('mouseout', function(e) {
  hiddenDiv.style.display = 'none';
})

lrover.addEventListener('mouseover', function(e) {
  hoverlrover.style.display = 'block';
})
hoverlrover.addEventListener('mouseout', function(e) {
  hoverlrover.style.display = 'none';
})

minigame.addEventListener('mouseover', function(e) {
  hovergame.style.display = 'block';
})
hovergame.addEventListener('mouseout', function(e) {
  hovergame.style.display = 'none';
})

outlet.addEventListener('mouseover', function(e) {
  hoveroutlet.style.display = 'block';
})
hoveroutlet.addEventListener('mouseout', function(e) {
  hoveroutlet.style.display = 'none';
})

lumen.addEventListener('mouseover', function(e) {
  hoverlumen.style.display = 'block';
})
hoverlumen.addEventListener('mouseout', function(e) {
  hoverlumen.style.display = 'none';
})

kraft.addEventListener('mouseover', function(e) {
  hoverkraft.style.display = 'block';
})
hoverkraft.addEventListener('mouseout', function(e) {
  hoverkraft.style.display = 'none';
})

portal.addEventListener('mouseover', function(e) {
  hoverportal.style.display = 'block';
})
hoverportal.addEventListener('mouseout', function(e) {
  hoverportal.style.display = 'none';
})

shift.addEventListener('mouseover', function(e) {
  hovershift.style.display = 'block';
})
hovershift.addEventListener('mouseout', function(e) {
  hovershift.style.display = 'none';
})

crypt.addEventListener('mouseover', function(e) {
  hovercrypt.style.display = 'block';
})
hovercrypt.addEventListener('mouseout', function(e) {
  hovercrypt.style.display = 'none';
})

hovercrypt.lastElementChild.addEventListener('click', function() {
  location.href='crypt.html';
})