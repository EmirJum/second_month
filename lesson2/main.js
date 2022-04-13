const array = [
	{
		username:"Jack",
		fullname:"Jack kyrgys"
	},
	{
		username:"Joe",
		fullname:"Joe kyrgys"
	},
	{
		username:"John",
		fullname:"John kyrgys"
	}
]

// for(let i = 0; i < array.length; i++){
// 	if(i === 2) {
// 		break;
// 	} else {
// 		console.log(array[i].username, array[i].fullname)
// 	}
// }
// for(let user of array) { //элемент
// 	console.log(user)
// } 

// const obj = {
// 	key:'b1',
// 	key2:'b2',
// 	key3:'b3',
// 	key4:'b4',
// 	key5:'b5',
// 	key6:'b6',
// 	key7:'b7',
// 	key8:'b8',
// 	key9:'b9',
// 	key10:'b10',
// }
// console.log(obj.key1);
// console.log(obj.key2);
// console.log(obj.key3);
// console.log(obj.key4);
// console.log(obj.key5);
// for(let key in obj){
// 	console.log(obj[key])
// }
// let i = 0

// while(i < 5){
// 	console.log("Hello!")
// 	i--
// }
const users = [
	{
		username:'John',
		salary:500
	},
	{
		username:'Aman',
		salary:5000
	},
	{
		username:'Jack',
		salary:100000
	}
]
console.log(users)




const destructUsers = users.map(user => ({
	name: user.username,
	salary: user.salary
}))

console.log(destructUsers)



// const destructUsers = []
// for(let user of users){
// 	destructUsers.push({
// 		name: user.username,
// 		salary: user.salary
// 	})
// }
// console.log(destructUsers)




// const filteredUsers = users.filter(user => user.salary > 500);
// console.log(filteredUsers);

// 	for(let user of users){
// 		if(user.salary > 500){
// 			filteredUsers.push(user)
// 		}
// 	}

// console.log(filteredUsers)