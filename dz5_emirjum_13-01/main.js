const main = prompt('color?')

switch (main){
	case 'red': 
		document.getElementsByClassName('red_inner')[0].style.background = 'red'
		document.getElementsByClassName('red_inner')[0].innerText = 'STOP'
		alert('STOP!!!')
		break;
	case 'green':
		document.getElementsByClassName('green_inner')[0].style.background = 'green'
		document.getElementsByClassName('green_inner')[0].innerText = 'GO'
		alert('GO!!!')
		break;
	case 'yellow':
		document.getElementsByClassName('yellow_inner')[0].style.background = 'yellow'
		document.getElementsByClassName('yellow_inner')[0].innerText = 'please WAIT'
		alert('WAIT')
		break;
	default:
		alert('undefined')
		break;
}
