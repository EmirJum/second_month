// function sayHello() {
// 	console.log("Hello")
// }

// sayHello();



// function getFullName(user, age) {
// 	console.log(user, age)
// 	if(age < 18) {
// 		console.log("CLOSE!")
// 	}else {
// 		console.log(user.first_name, user.last_name)
// 	}
// }

// const user = {
// 	fist_name: "John",
// 	last_name: "Barbaro"
// }

// const user2 = {
// 	fist_name: "Vito",
// 	last_name: "Scalette"
// }


// getFullName(user, 15);
// getFullName(user2, 19);

// const anonim = function(user) {
// 	console.log(user.first_name, user.last_name)
// }
// anonim();

function getNumber (user1, user2){
	console.log(user1, user2)
	if (user1.length < user2.length){
		console.log(user2)
	}else if (user2.length < user1.length){
		console.log(user1)
	}
}
const user1 = [3433, 6363,]
const user2 = [3433, 6363, 7575757]

getNumber(user1, user2);

function lotNumbers (number1, number2){
	console.log(number1, number2)
	if (number1<number2){
		console.log("намбер 1 лучше")
	}else {
		console.log("намбер 2 лучше")
	}
}
const number = {
	number1: 8,
	number2: 3
}

lotNumbers(number)