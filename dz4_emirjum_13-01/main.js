const pros = document.getElementById('pros')
const cons = document.getElementById('cons')
const center = document.getElementById('center')
const reset = document.getElementById('reset')
let num = 0;
pros.onclick = () => {
	num++
	center.innerText = num.toString()
}
cons.onclick = () =>{
	num--
	if(num < 1){
		num = 0
	}
	center.innerText = num.toString()
}
reset.onclick = () => {
	num = 0
	center.innerText =  num.toString()
}