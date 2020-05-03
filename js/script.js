
//Changes the GitHub logo color scheme on mouse hover/unhover
let g = document.getElementsByClassName('github')[0];

let hoverLogo = function() {
  g.style.backgroundColor = 'crimson';
  g.src = 'images/gray-logo.png';
};

let unhoverLogo = function() {
  g.style.backgroundColor = '#B0B0B0';
  g.src = 'images/crimson-logo.png';
};

g.addEventListener('mouseenter', hoverLogo);
g.addEventListener('mouseleave', unhoverLogo);

//Changes the number display based on slider movement
let slider = document.getElementsByClassName('slider')[0];
let number = document.getElementById('number');
number.innerHTML = slider.value;

slider.oninput = function() {
  number.innerHTML = this.value;
  generateElements();
};

//Adds data to random positions in the array based on the slider value
let begin = document.getElementsByClassName('begin')[0];
let arr = [];

function generateElements(){
  arr = [];
  for (let i = 0; i < slider.value; i++){
    const min = 0;
    const max = arr.length;
    const index = Math.floor(Math.random() * ((max - min) + 1)) + min;
    arr.splice(index, 0, i + 30);
  }
  updateData();
}

function generateReverse(){
  arr = [];
  for (let i = 0; i < slider.value; i++){
    arr.unshift(i + 30);
  }
  updateData();
}

//Updates data div to represent the data in the array
let data = document.getElementsByClassName('data')[0];

function getNewValue(oldValue, oldMin = Math.min(...arr), oldMax = Math.max(...arr), newMin = 5, newMax = 100){
  return (((oldValue - oldMin) * (newMax - newMin)) / (oldMax - oldMin)) + newMin;
}

let areLines = false;
function updateData(){
  data.innerHTML = '';
  const widthPercent = 100 / arr.length;
  for (let i = 0; i < arr.length; i++){
    const heightPercent = getNewValue(arr[i]);
    let c = document.createElement('DIV');
    c.style.backgroundColor = 'black';
    c.style.width = widthPercent + '%';
    c.style.height = heightPercent + '%';
    c.style.display = 'inline-block';
    addBarLines(c);
    data.appendChild(c);
  }
}

//Adds/removes line spaces between bars
function addBarLines(event){
  if (event.target && event.keyCode == 84){
    areLines = !areLines;
    if (areLines){
      for (let i = 0; i < arr.length; i++){
        data.children[i].style.setProperty('transition-duration', '0s');
        data.children[i].style.boxSizing = 'border-box';
        data.children[i].style.borderStyle = 'solid';
        data.children[i].style.borderWidth = '0px 1px 0px 1px';
        data.children[i].style.borderColor = '#B0B0B0';
      }
    }else{
      for (let i = 0; i < arr.length; i++){
        data.children[i].style.setProperty('transition-duration', '0s');
        data.children[i].style.setProperty('box-sizing', 'initial');
        data.children[i].style.setProperty('border-style', 'initial');
        data.children[i].style.setProperty('border-width', 'initial');
        data.children[i].style.setProperty('border-color', 'initial');
      }
    }
  }else{
    if (areLines){
      event.style.boxSizing = 'border-box';
      event.style.borderStyle = 'solid';
      event.style.borderWidth = '0px 1px 0px 1px';
      event.style.borderColor = '#B0B0B0';
    }
  }

}

document.addEventListener('keydown', addBarLines);

//Changes page structure after 'begin' is clicked
let changePage = function() {
  let title = document.getElementsByClassName('center-welcome')[0];
  title.removeChild(begin);
  let info = document.getElementsByClassName('info')[0];
  let header = document.getElementsByClassName('main-header')[0];
  header.style.fontSize = '1.5rem';
  title.style.marginTop = '120px';
  title.style.marginLeft = '230px';
  title.style.top = '0';
  title.style.left = '0';
  let sortButtons = document.getElementsByClassName('sort-button');
  sortButtons.item(0).style.backgroundColor = 'crimson';
  sortButtons.item(0).style.color = '#B0B0B0';
  for (let i = 0; i < sortButtons.length; i++){
    sortButtons.item(i).style.display = 'inline-block';
  }
  let banner = document.getElementsByClassName('bottom-banner')[0];
  banner.children[0].style.display = 'inline-block';
  banner.children[1].style.display = 'inline-block';
  banner.children[2].style.display = 'inline-block';
  banner.children[3].style.display = 'inline-block';
  generateElements();
  setTimeout(function(){
    let sortTypes = document.getElementsByClassName('sort-types')[0];
    sortTypes.style.opacity = '100%';
    data.style.opacity = '100%';
    banner.style.opacity = '100%';
    banner.children[1].style.cursor = 'pointer';
    banner.children[2].style.cursor = 'pointer';
    banner.children[3].style.cursor = 'pointer';
    for (let i = 1; i < sortButtons.length; i++){
      sortButtons.item(i).style.cursor = 'pointer';
    }
  }, 800);
};

begin.addEventListener('click', changePage);

//Changes button color scheme on hover
let sortButtons = document.getElementsByClassName('sort-button');
let banner = document.getElementsByClassName('bottom-banner')[0];
for (let i = 1; i < sortButtons.length; i++){
  sortButtons.item(i).addEventListener('mouseenter', hoverButton);
  sortButtons.item(i).addEventListener('mouseleave', unhoverButton);
}
for (let i = 1; i < banner.children.length; i++){
  banner.children[i].addEventListener('mouseenter', hoverButtonBottom);
  banner.children[i].addEventListener('mouseleave', unhoverButtonBottom);
}

//Enabled 'radio button' feature to sorting method buttons
let selectedButton = 'bubble';

function updateSortButtons(event){
  generateElements();
  selectedButton = event.target.id;
  for (let i = 0; i < sortButtons.length; i++){
    let current = sortButtons.item(i);
    if (current.isSameNode(event.target)){
      current.style.color = '#B0B0B0';
      current.style.backgroundColor = 'crimson';
      current.removeEventListener('mouseenter', hoverButton);
      current.removeEventListener('mouseleave', unhoverButton);
      current.removeEventListener('click', updateSortButtons);
      current.style.cursor = 'default';
    }else{
      current.style.color = 'crimson';
      current.style.backgroundColor = '#B0B0B0';
      current.addEventListener('mouseenter', hoverButton);
      current.addEventListener('mouseleave', unhoverButton);
      current.addEventListener('click', updateSortButtons);
      current.style.cursor = 'pointer';
    }
  }
}

function hoverButton(event) {
  event.target.style.color = '#B0B0B0';
  event.target.style.backgroundColor = 'crimson';
}

function unhoverButton(event) {
  event.target.style.color = 'crimson';
  event.target.style.backgroundColor = '#B0B0B0';
}

function hoverButtonBottom(event){
  event.target.style.color = '#919DAA';
  event.target.style.backgroundColor = 'crimson';
}

function unhoverButtonBottom(event){
  event.target.style.color = 'crimson';
  event.target.style.backgroundColor = '#919DAA';
}

for (let i = 1; i < sortButtons.length; i++){
  let current = sortButtons.item(i);
  current.addEventListener('click', updateSortButtons);
}

//Enables "randomize" button
let randomize = document.getElementsByClassName('random')[0];
randomize.addEventListener('click', generateElements);

//Enables "reverse" button
let reverse = document.getElementsByClassName('reverse')[0];
reverse.addEventListener('click', generateReverse);

//Enables "sort" button
let s = document.getElementsByClassName('sort')[0];
s.addEventListener('click', sortCall);

//Selects the proper sort method based on which sort button is pressed
var totalTime = 0;
function sortCall(){
  totalTime = 0;
  enableButtons(false);
  //Finds the pause time based on amount of data
  let time = 0;
  if (arr.length <= 30){
    if (arr.length === 10){
      time = 200;
    }else{
      time = 100;
    }
  }else{
    time = 11 - getNewValue(arr.length, 10, 300, 1, 10);
  }
  //Calls the correct sort method
  if (selectedButton === 'bubble'){
    bubbleSort(time);
  }else if(selectedButton === 'insert'){
    insertionSort(time);
  }else if (selectedButton === 'select'){
    selectionSort(time);
  }
  //Adds a verification visualization after sorting is complete
  time = 2000 / arr.length;
  for (let i = 0; i < arr.length; i++){
    totalTime += time;
    setTimeout(function(){
      data.children[i].style.backgroundColor = 'green';
    }, totalTime);
  }
  setTimeout(function(){
    for (let i = 0; i < arr.length; i++){
      data.children[i].style.transitionDuration = '1s';
      data.children[i].style.backgroundColor = 'black';
    }
    enableButtons(true);
  }, totalTime + 500);
  setTimeout(function() { updateData(); }, totalTime + 1500);
}

//Bubble sort algorithm
function bubbleSort(time){
  const n = arr.length;
  for (let i = 0; i < n - 1; i++){
    for (let j = 0; j < n - i - 1; j++){
      totalTime += time;
      setTimeout(function(){
        if (arr[j] > arr[j+1]){
          let temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;
          data.children[j].style.height = getNewValue(arr[j]) + '%';
          data.children[j+1].style.height = getNewValue(arr[j+1]) + '%';
        }
        data.children[j].style.backgroundColor = 'crimson';
        data.children[j+1].style.backgroundColor = '#4169E1';
      }, totalTime);
      setTimeout(function(){
        data.children[j].style.backgroundColor = 'black';
        data.children[j+1].style.backgroundColor = 'black';
      }, totalTime + time);
    }
  }
}

//Insertion sort algorithm
function insertionSort(time){
  const n = arr.length;
  for (let i = 1; i < n; i++){
    for (let j = i - 1; j >= 0 && arr[j] > arr[j+1]; j--){
      let temp = arr[j];
      arr[j] = arr[j+1];
      arr[j+1] = temp;
      data.children[j].style.height = getNewValue(arr[j]) + '%';
      data.children[j+1].style.height = getNewValue(arr[j+1]) + '%';
    }
  }
}

// var i = 1;
// function insertionSortRecursive(time){
//   const n = arr.length;
//   if (i < n){
//     let k = arr[i];
//     let j = i - 1;
//     j = insertionSortRecursive1(j, k);
//     arr[j+1] = k;
//     i++;
//     insertionSort(time);
//   }
// }
//
// function insertionSortRecursive1(j, k, time){
//   if (j >= 0 && arr[j] > k){
//     arr[j + 1] = arr[j];
//     j--;
//     j = insertionSortRecursive1(j, k);
//   }
//   return j;
// }

//Selection sort algorithm
function selectionSort(time){
  const n = arr.length;
  for (let i = 0; i < n - 1; i++){
    setTimeout(function(){
      data.children[i].style.backgroundColor = '#4169E1';
    }, totalTime);
    let min = i;
    for (let j = i + 1; j < n; j++){
      totalTime += time;
      if (arr[j] < arr[min]){
        min = j;
      }
      setTimeout(function(){
        data.children[j].style.backgroundColor = 'crimson';
      }, totalTime);
      setTimeout(function(){
        data.children[j].style.backgroundColor = 'black';
      }, totalTime + time);
    }
    let temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp;
    setTimeout(function(){
      data.children[i].style.backgroundColor = 'black';
      data.children[i].style.height = getNewValue(arr[i]) + '%';
      data.children[min].style.height = getNewValue(arr[min]) + '%';
    }, totalTime + time);
  }
}

//Function to enable/disable all buttons for sorting to take place
function enableButtons(enable){
  if (enable){
    for (let i = 0; i < sortButtons.length; i++){
      sortButtons.item(i).disabled = false;
      sortButtons.item(i).style.opacity = '100%';
      if (!(selectedButton === sortButtons.item(i).id)){
        sortButtons.item(i).style.cursor = 'pointer';
      }
      if (!(selectedButton === sortButtons.item(i).id)){
        sortButtons.item(i).addEventListener('mouseenter', hoverButton);
        sortButtons.item(i).addEventListener('mouseleave', unhoverButton);
      }
    }
    for (let i = 1; i < banner.children.length; i++){
      banner.children[i].disabled = false;
      banner.children[i].style.opacity = '100%';
      banner.children[i].style.cursor = 'pointer';
      banner.children[i].addEventListener('mouseenter', hoverButtonBottom);
      banner.children[i].addEventListener('mouseleave', unhoverButtonBottom);
    }
    banner.children[0].children[0].style.display = 'inline-block';
    document.addEventListener('keydown', addBarLines);
  }else{
    for (let i = 0; i < sortButtons.length; i++){
      sortButtons.item(i).disabled = true;
      sortButtons.item(i).style.opacity = '50%';
      sortButtons.item(i).style.cursor = 'default';
      sortButtons.item(i).removeEventListener('mouseenter', hoverButton);
      sortButtons.item(i).removeEventListener('mouseleave', unhoverButton);
    }
    for (let i = 1; i < banner.children.length; i++){
      banner.children[i].disabled = true;
      banner.children[i].style.opacity = '50%';
      banner.children[i].style.cursor = 'default';
      banner.children[i].style.color = 'crimson';
      banner.children[i].style.backgroundColor = '#919DAA';
      banner.children[i].removeEventListener('mouseenter', hoverButtonBottom);
      banner.children[i].removeEventListener('mouseleave', unhoverButtonBottom);
    }
    banner.children[0].children[0].style.display = 'none';
    document.removeEventListener('keydown', addBarLines);
  }
}
