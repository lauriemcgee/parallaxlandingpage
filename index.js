var ypos,image,bottom;
function parallax() {
  ypos = window.pageYOffset;
  image = document.getElementById('image');
  bottom = document.getElementsByClassName('bottom');
  image.style.top = ypos * .5 + 'px';
  bottom.style.top = ypos * .9 + 'px';
}
window.addEventListener('scroll', parallax, bottom);

var bottomGradient;
function addGradient() {
  bottomGradient = document.getElementsByClassName('bottom');
  bottom.style
}
