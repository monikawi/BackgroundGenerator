var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector(".rand");


function setGradient() {
 	body.style.background = "linear-gradient(to right, " 
 	+ color1.value + "," + color2.value + ")";

 	css.textContent = body.style.background + ";";
}

function getRandom() {
	var letters = "0123456789ABCDEF"; 
    var color = '#'; 
    for (var i = 0; i < 6; i++) {
       color += letters[(Math.floor(Math.random() * 16))];
    }
    return color;
}

function setRandom() {
	color1.value =  getRandom();
	color2.value = getRandom();
	setGradient();
}

body.addEventListener("onload", setGradient());
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", setRandom);