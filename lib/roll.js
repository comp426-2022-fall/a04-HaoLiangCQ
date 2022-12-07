export function roll (side, dices, roll) {
    let result = []
	
	for(let i = 0; i < roll; i++){
		let total = 0
		
		for(let j = 0; j < dices; j++){
			total = total + Math.floor(Math.random() * side + 1)
		}
		
		result.push(total)
	}
	
	return {"sides": side, "dice": dices, "rolls": roll, "results": result}
}