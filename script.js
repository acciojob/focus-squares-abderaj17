//your JS code here. If required.
const squares = document.querySelectorAll(".square");

for(let i = 1; i<=squares; i++){

	squares.addEventListener('mouseover', ()=>{
		squares.style.backgroudColor = "#E6E6FA";
	})
}