const ramen = document.querySelector('.ramen')
const tako = document.querySelector('.tako')
const free = document.querySelector('.free')
const everything = document.querySelector('.everything')
const computer = document.querySelector('.computer')
const music = document.querySelector('.music')



ramen.addEventListener('mouseover', function(e) {
  document.querySelector('.description').style.display = 'block';
  document.querySelector('#hover-text').textContent = 'Comfort food: Nothing beats a hot bowl of Ramen 🍜';
})
ramen.addEventListener('mouseout', function(e) {
  document.querySelector('.description').style.display = 'none';
})

tako.addEventListener('mouseover', function(e) {
  document.querySelector('.description').style.display = 'block';
  document.querySelector('#hover-text').textContent = 'ChoIchi: No ads intended here 😅';
})
tako.addEventListener('mouseout', function(e) {
  document.querySelector('.description').style.display = 'none';
})

free.addEventListener('mouseover', function(e) {
  document.querySelector('.description').style.display = 'block';
  document.querySelector('#hover-text').textContent = 'After work, chill and do some coding/creativity if possible. Remember to relax and take a break.';
})
free.addEventListener('mouseout', function(e) {
  document.querySelector('.description').style.display = 'none';
})

everything.addEventListener('mouseover', function(e) {
  document.querySelector('.description').style.display = 'block';
  document.querySelector('#hover-text').textContent = 'My Universe 👪';
})
everything.addEventListener('mouseout', function(e) {
  document.querySelector('.description').style.display = 'none';
})

computer.addEventListener('mouseover', function(e) {
  document.querySelector('.description').style.display = 'block';
  document.querySelector('#hover-text').textContent = `My rig. You already know what's going on 😉`;
})
computer.addEventListener('mouseout', function(e) {
  document.querySelector('.description').style.display = 'none';
})

music.addEventListener('mouseover', function(e) {
  document.querySelector('.description').style.display = 'block';
  document.querySelector('#hover-text').textContent = `Code/design while listening to Lofi beats 🎹`;
})
music.addEventListener('mouseout', function(e) {
  document.querySelector('.description').style.display = 'none';
})