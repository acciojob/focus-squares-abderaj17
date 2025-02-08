const squares = document.querySelectorAll(".square");

for(let i = 0; i < squares.length; i++){
	squares[i].addEventListener('mouseover', ()=>{
		// loop over all squares
		for(let j = 0; j < squares.length; j++){
			// if it's not the current square, change color
			if(i !== j){
				squares[j].style.backgroundColor = "#6F4E37"; // coffee color
			}
		}
	})

	squares[i].addEventListener('mouseout', ()=>{
		// loop over all squares and change color back to original
		for(let j = 0; j < squares.length; j++){
			squares[j].style.backgroundColor = "#E6E6FA"; // lavender color
		}
	})
}