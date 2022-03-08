document.querySelector('.fa-bars').addEventListener('click', function(e) {
  e.preventDefault();
  openMenu();
  focusMenu();
 })
 
 document.querySelector('.fa-close').addEventListener('click', function(e) {
   e.preventDefault();
   closeMenu();
   clearOpacity();
  })
 
 function openMenu() {
   document.getElementById('menu').style.display = 'block';
 }
 
 function closeMenu() {
   document.getElementById('menu').style.display = 'none';
 }
 
 function focusMenu() {
   document.querySelector('.left-panel').style.opacity = '10%';
   document.querySelector('.middle-panel').style.opacity = '10%';
 }
 
 function clearOpacity() {
   document.querySelector('.left-panel').style.opacity = '100%';
   document.querySelector('.middle-panel').style.opacity = '100%';
 }