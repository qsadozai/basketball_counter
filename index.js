let num1 = 0;
let num2 = 0;

let count = document.getElementById("counter");
let home = document.getElementById("home");
let guest = document.getElementById("guest");

///////////////////Home////////////////

function addOne() {
	let sum = (num1 += 1);
	home.textContent = sum;
}

function addTwo() {
	let sum = (num1 += 2);
	home.textContent = sum;
}

function addThree() {
	let sum = (num1 += 3);
	home.textContent = sum;
}

//////////////////////Guest//////////////////////////////

function addFour() {
	let sum = (num2 += 1);
	guest.textContent = sum;
}

function addFive() {
	let sum = (num2 += 2);
	guest.textContent = sum;
}

function addSix() {
	let sum = (num2 += 3);
	guest.textContent = sum;
}
