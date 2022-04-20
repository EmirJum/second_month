alert('можно мне 10/10')
const pros = document.getElementById('pros')
const cons = document.getElementById('cons')
const center = document.getElementById('center')
let num = 0;
pros.onclick = () => {
	num++
	center.innerText = num
}
cons.onclick = () =>{
	num--
	if(num < 1){
		num = 0
	}
	center.innerText = num
}
