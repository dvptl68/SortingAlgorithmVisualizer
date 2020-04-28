
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


//Changes page structure after 'begin' is clicked
let begin = document.getElementsByClassName('begin')[0];

let changePage = function() {
  let title = document.getElementsByClassName('center-welcome')[0];
  let info = document.getElementsByClassName('info')[0];
  title.style.opacity = '0';
  info.style.opacity = '0';
  setTimeout(function() {
    title.style.display = 'none';
    info.style.display = 'none';
  }, 1000);
};

begin.addEventListener('click', changePage);
