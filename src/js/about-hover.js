const kid = document.querySelector('.kid')
const cafe = document.querySelector('.cafe')
const tour = document.querySelector('.tour')
const phone = document.querySelector('.phone')
const sneaker = document.querySelector('.sneaker')

kid.addEventListener('mouseover', function(e) {
  document.querySelector('.kiddo').style.display = 'block';
})
kid.addEventListener('mouseout', function(e) {
  document.querySelector('.kiddo').style.display = 'none';
})

cafe.addEventListener('mouseover', function(e) {
  document.querySelector('.coffee').style.display = 'block';
})
cafe.addEventListener('mouseout', function(e) {
  document.querySelector('.coffee').style.display = 'none';
})

tour.addEventListener('mouseover', function(e) {
  document.querySelector('.traveler').style.display = 'block';
})
tour.addEventListener('mouseout', function(e) {
  document.querySelector('.traveler').style.display = 'none';
})

phone.addEventListener('mouseover', function(e) {
  document.querySelector('.notif').style.display = 'block';
})
phone.addEventListener('mouseout', function(e) {
  document.querySelector('.notif').style.display = 'none';
})

sneaker.addEventListener('mouseover', function(e) {
  document.querySelector('.shoes').style.display = 'block';
})
sneaker.addEventListener('mouseout', function(e) {
  document.querySelector('.shoes').style.display = 'none';
})