

// There's only one h3 so we don't need to be more specific
var css = document.querySelector("h3");

// Here using the Class name to identify the specific tag we want
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");

// below using the tag ID 
var body = document.getElementById("gradient");
var button = document.getElementById("randomColor");


// set the Gradient when the page is loaded.
setGradient();


// The color will change from left to right
function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}


// Generate random colors
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


function assignRandomColors(){
	color1.value = getRandomColor();
	color2.value = getRandomColor();

	setGradient();
}


button.addEventListener("click", assignRandomColors);


// instead of passing the function, the setGradient is executed immediately. 
// this gives it the effect that colors are changing as the user hovers 
// over the color pallet. 
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);













