function myFunction(){
  let x = document.getElementById("name").value;
  let y = document.getElementById("address").value;
  if(x=="" || y==""){
    alert("Everything must be filled out")
  }
  else{
    alert("Submitted!");
  }
}

document.querySelector("a.navbar-brand").addEventListener("click", handleClick);
function handleClick(){
  alert("Enjoy your meal!");
}

function play() {
  var audio = new Audio('audio .mp3');
  audio.play();
}


function changeText(id) {
  id.innerHTML = "Choice for every taste!";
}

function mOver(obj) {
  obj.innerHTML = "Without joke!"
}

function mOut(obj) {
  obj.innerHTML = "We recommend only the best "
}



var modal = document.getElementById("modal1");
var btn = document.getElementById("b");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var string = "Recommendations";
var str = string.split("");
var el = document.getElementById('str');
(function animate() {
str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running);
var running = setTimeout(animate, 90);
})();
