
//Changes the GitHub logo color scheme on mouse hover/unhover
let g = document.getElementsByClassName('github')[0];

let hover = function() {
  g.style.backgroundColor = 'crimson';
  g.src = 'images/gray-logo.png';
};

let unhover = function() {
  g.style.backgroundColor = '#B0B0B0';
  g.src = 'images/crimson-logo.png';
};

g.addEventListener('mouseenter', hover);
g.addEventListener('mouseleave', unhover);
