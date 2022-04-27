

// class Dog {
// 	constructor(weight, height, color, gender, breed){
// 		this.weight = weight;
// 		this.height = height;
// 		this.color = color;
// 		this.gender = gender;
// 		this.breed = breed;
// 	}
// }

// const arez = new Dog(80, 1.5, "white", "domestic", "alabai")

// const bobik = new Dog(30, 50, "orange", "domestic", "chi-hua-hua")
// // console.log(arez);
// console.log(bobik);



// class Animal {
// 	constructor(type, gender, color,voice){
// 		this.type = type;
// 		this.gender = gender;
// 		this.color = color;
// 		this.voice = voice;
// 	}
// 	woice(){
// 		console.log(this.voice)
// 	}
// }
// class Cat extends Animal{
// 	constructor(type, gender, color,voice, height, weight){
// 			super(type, gender, color,voice,)
// 				this.height = height;
// 				this.weight = weight;
// 	}
// }

// const Kassy = new Cat(
// 	"pet",
// 	"male",
// 	"darkBlue",
// 	"myaaaauuu",
// 	30,
// 	7
// )
// console.log(Kassy) 

// const Tomka = new Cat(
// 	"хищник",
// 	"female",
// 	"white",
// 	"э не не",
// 	1.30,
// 	50,
// )

// Tomka.woice()
// console.log(Tomka)
// console.log(arez)

class cozyHome {
	constructor(height, width, matetial, roof, rooms, roofs_color, toilets, toilet_color,wardrobe, beds,){
		this.height = height;
		this.matetial = matetial;
		this.roof = roof,
		this.rooms = rooms;
		this.roofs_color = roofs_color;
		this.toilets = toilets;
		this.toilet_color = toilet_color;
		this.wardrobe = wardrobe;
		this.beds = beds;
	}
}
class stairs extends cozyHome {
	constructor(height, width, matetial, roof, rooms, roofs_color, toilets, toilet_color,wardrobe, beds, carpet, wallpaper, stairs, TV, sofa, monitors){
		super(height, width, matetial, roof, rooms, roofs_color, toilets, toilet_color,wardrobe, beds)
		this.carper = carpet;
		this.wallpaper = wallpaper;
		this.stairs = stairs;
		this.TV = TV;
		this.sofa = sofa;
		this.monitors = monitors;
	}
}
const first_stare = new stairs(
	200,
	50,
	"brick",
	"не нужно",
	2,
	1,
	"blue",
	4,
	"нет",
	6,
	"orange",
	22,
	2,
	2,
	0
)
const second_stare = new stairs(
	200,
	70,
	"brick",
	"2",
	3,
	"brown",
	2,
	"blue",
	5,
	4,
	"orange",
	22,
	1,
	0,
	3
)
console.log(first_stare)
console.log(second_stare)





