const cvs = document.getElementById('canvas');
const ctx = cvs.getContext('2d');

const bird = new Image();
const bg = new Image();
const fg = new Image();
const top_palka = new Image();
const bottom_palka = new Image();

bird.src = "img/bird.png";
bg.src = "img/background.png";
fg.src = "img/pol.png";
top_palka.src = "img/top_palka.png";
bottom_palka.src = "img/bottom_palka.png";

// звук
const fly = new Audio();
const best_audio = new Audio();

fly.src = "sounds/fly.mp3";
best_audio.src = "sounds/score.mp3";

let gap = 90;


document.addEventListener("keydown", moveUp);

function moveUp() {
	yPos -= 25;
	fly.play();
}


// *******
let palka = [];
palka[0] = {
	x : cvs.width,
	y : 0
}
let score = 0;
// ****
let xPos = 20;
let yPos = 180;
let grav = 1.2;


function draw() {
	
	ctx.drawImage(bg, 0, 0);
	
	for(let i = 0; i < palka.length; i++){
		ctx.drawImage(top_palka, palka[i].x, palka[i].y);
		ctx.drawImage(bottom_palka, palka[i].x, palka[i].y + top_palka.height + gap);

		palka[i].x--;

		if(palka[i].x == 30) {
			palka.push({
				x : cvs.width,
				y : Math.floor(Math.random() * top_palka.height) - top_palka.height
			});
		}
		if(xPos + bird.width >= palka[i].x
			&& xPos <= palka[i].x + top_palka.width
			&& (yPos <= palka[i].y + top_palka.height
				|| yPos + bird.height >= palka[i].y + top_palka.height + 
				gap) || yPos + bird.height >= cvs.height - fg.height
				|| yPos + bird.height <= 0) {
					location.reload()
				}

				if(palka[i].x == -15) {
					score++;
					best_audio.play();
				}
	}
	ctx.drawImage(fg, 0, cvs.height - fg.height);
	ctx.drawImage(bird, xPos, yPos);

	yPos += grav; 

	ctx.fillStyle = "#000";
	ctx.font = "26px sans-serif";
	ctx.fillText("Score: " + score, 10, cvs.height - 20);
	requestAnimationFrame(draw);
}
bottom_palka.onload = draw; 