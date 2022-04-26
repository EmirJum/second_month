// console.log(a)
// const a = 0;
//
//
// let b = 10;
// console.log(c)
// var c;
//
// c = "hello"

// string expression - интерполяция строк

// const first_name = "Jack";
// const last_name = "Barbaro";
// console.log(first_name + " " + last_name);
//
// console.log(${first_name} ${last_name});
//

// const getFullName = (user) => {
    // return "First Name: " + user.first_name + "\n" + "Last Name: " + user.last_name;
    // return First Name: ${user.first_name}\nLast Name: ${user.last_name};
// }

// const user = {
//     first_name: "Jack",
//     last_name: "Vorobey"
// }
//
// console.log(getFullName(user))

//spread operator

// const mass = [1, 2, 3, 4, 5];
// const mass2 = [...mass];

//es5

// for(let i =0; i<mass.length; i++){
//     mass2.push(mass[i])
// }
// console.log(mass2)
//
const obj = {
    username: "Jack",
    age: 20,
    last_name: "barbaro",
    full_name: "Jack barbaro"
}

const obj2 = {
    ...obj,
    key: "value",
    key2: "value2"
}
console.log(obj2)

// деструктуризация

// const props = {
//     onSubmit: () => {
//         console.log("Submit")
//     },
//     data: [
//         {
//             key: "value"
//         },
//         {
//             key2: "value2"
//         },
//         {
//             key3: "value3"
//         },
//     ]
// }


// const {data, onSubmit} = props; // из ключей переменную

// console.log(data[1].key2) 

// onSubmit();
