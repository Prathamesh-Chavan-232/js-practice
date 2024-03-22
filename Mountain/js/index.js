let one = document.getElementById("one");
let two = document.getElementById("two");
let text = document.getElementById("text");

window.addEventListener('scroll', function(event){
  var value = window.scrollY;

  one.style.top = value * 0.7 + 'px';
  two.style.bottom = value * 0.7 + 'px';
  text.style.top = value * 1 + 'px';
})

