const squares = document.querySelectorAll(".square");

for(let i = 0; i < squares.length; i++){
	squares[i].addEventListener('mouseover', ()=>{
		squares[i].style.backgroundColor = "#6F4E37";
	})
}

for(let i = 0; i <squares.length; i++){
	squares[i].addEventListener('mouseout', ()=>{
		squares[i].style.backgroundColor = "#E6E6FA";
	})
}