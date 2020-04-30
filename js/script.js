
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
  title.removeChild(begin);
  let info = document.getElementsByClassName('info')[0];
  let header = document.getElementsByClassName('main-header')[0];
  header.style.fontSize = '1.5rem';
  title.style.marginTop = '40px';
  title.style.marginLeft = '230px';
  title.style.top = '0';
  title.style.left = '0';
  let sortButtons = document.getElementsByClassName('sort-button');
  sortButtons.item(0).style.backgroundColor = 'crimson';
  sortButtons.item(0).style.color = '#B0B0B0';
  setTimeout(function(){
    let sortTypes = document.getElementsByClassName('sort-types')[0];
    sortTypes.style.opacity = '100%';
    let data = document.getElementsByClassName('data')[0];
    data.style.opacity = '100%';
    let banner = document.getElementsByClassName('bottom-banner')[0];
    banner.style.opacity = '100%';
    banner.children[1].style.cursor = 'pointer';
    banner.children[2].style.cursor = 'pointer';
    for (let i = 0; i < sortButtons.length; i++){
      sortButtons.item(i).style.cursor = 'pointer';
    }
  }, 800);
};

begin.addEventListener('click', changePage);

//Changes the number display based on slider movement
let slider = document.getElementsByClassName('slider')[0];
let number = document.getElementById('number');
number.innerHTML = slider.value;

slider.oninput = function() {
  number.innerHTML = this.value;
};

//Enabled button clicking mechanism of sorting method buttons
