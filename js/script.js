let g = document.getElementById('github');

let hover = function() {
  g.style.backgroundColor = 'crimson';
};

let unhover = function() {
  g.style.backgroundColor = '#B0B0B0';
};

g.addEventListener('mouseenter', hover);
g.addEventListener('mouseleave', unhover);
