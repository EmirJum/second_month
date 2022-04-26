	const mass1 = [1, 2, 3, 4, 5, 6];
	const mass2 = [1, 2, 3, 4, 5];
	const mass3 = [1, 2, 3, 4];
	const mass4 = [1, 2, 3];
	const mass6 = [1, 2];
	const main = [...mass1, mass2,mass3,mass4,mass6];
	console.log(main)
//



const obj = {
	nickname: 'emka',
	level: 89,
	skill: 'good_player',
	division: 'champion',
	scin: 'gool_trouper'
}
const new_obj = {
	...obj,
	key3: 'fortnite',
	key1: 'pubg',
	key2: 'world_of_tanks'
}
console.log(new_obj)

// ************************************************

const list = []

function render() {
	const MainDiv = document.createElement('div');
	MainDiv.setAttribute("class", "list");
	for(let i = 0; i < list.length; i++ ) {
			const divList = document.createElement('div');
			divList.setAttribute("class", "burger");
			const p = document.createElement("p");
			p.innerHTML = list[i].text;
			divList.append(p);
			MainDiv.append(divList);
	}

	const form = document.querySelector(".main");

	document.querySelector(".list").remove();
	form.append(MainDiv)

}

knopka.onclick = function() {
	const name = document.getElementById('name')
	const obj = {
			id: list.length,
			text: "hello   " + name.value
	}
	this.append(list);
	list.push(obj);
	render()
}

