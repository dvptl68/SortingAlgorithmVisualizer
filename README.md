# [Sorting Algorithm Visualizer](https://dvptl68.github.io/SortingAlgorithmVisualizer.github.io/)
A website that can help visualize how the most popular and efficient sorting algorithms work.  
  
https://dvptl68.github.io/SortingAlgorithmVisualizer.github.io/

## How to use it:
Select the sort method you'd like to see, use the slider to select the data set size, reverse or randomize the data, and sort! You can press ***t*** to toggle space between data bars (not recommended for large data sizes).

### Algorithms shown:
- [Bubble sort](https://en.wikipedia.org/wiki/Bubble_sort) - Best case complexity: **O(n<sup>2</sup>)**, Worst case complexity: **O(n<sup>2</sup>)**
- [Insertion sort](https://en.wikipedia.org/wiki/Insertion_sort) - Best case complexity: **O(n)**, Worst case complexity: **O(n<sup>2</sup>)**
- [Selection sort](https://en.wikipedia.org/wiki/Selection_sort) - Best case complexity: **O(n<sup>2</sup>)**, Worst case complexity: **O(n<sup>2</sup>)**
- [Quick sort](https://en.wikipedia.org/wiki/Quicksort) - Best case complexity: **O(nlog(n))**, Worst case complexity: **O(n<sup>2</sup>)**
- [Merge sort](https://en.wikipedia.org/wiki/Merge_sort) - Best case complexity: **O(nlog(n))**, Worst case complexity: **O(nlog(n))**
- [Heap sort](https://en.wikipedia.org/wiki/Heapsort) - Best case complexity: **O(nlog(n))**, Worst case complexity: **O(nlog(n))**
######
Because the last three listed sort methods are complex recursive algorithms, using small data sizes is not recommended for them. It can be confusing, and they can be better understood with large data sizes.

### Supported browsers:
This website works well on: 
- Google Chrome
- Firefox
- Safari
######
It **does not** work well on:
- Microsoft Edge
- Internet Explorer
######
I have not tested it on other browsers, so there is no guarantee that it will work on browsers other than the three working ones listed above.

## How it works:
This website was completed using minimal HTML and CSS. Its functionality comes from JavaScript. The sort methods sort the data  with a delay after each iteration/recursive call so that the visualization doesn't happen too fast to see. Getting the algorithms to delay was tricky, but I found that I could use this built-in function: ```setTimeout(function(){ }, time);``` in order to delay the algorithm without messing with the data.

## Contribute:
There may be bugs that I missed, so if you find a bug, you can create an issue or fork this repository, fix the bug, and create a pull request!
