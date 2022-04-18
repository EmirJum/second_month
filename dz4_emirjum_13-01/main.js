const pros = document.getElementById('pros')
const cons = document.getElementById('cons')
const main_center = document.getElementById('main_center')
const reset = document.getElementById('reset')
let num = 0;
pros.onclick = () => {
	num++
	main_center.innerText = num.toString()
}
cons.onclick = () => {
	num--
	if(num < 1){
		num = 0
	}
	main_center.innerText = num.toString()
}
reset.onclick = () => {
	num = 0;
	main_center.innerText = num.toString()
}