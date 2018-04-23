const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".minute-hand");
const hourHand = document.querySelector(".hour-hand");
const mechanical = document.querySelector("#mechanical");
const quartz = document.querySelector("#quartz");
const clockFace = document.querySelector(".clock-face");
const h2 = document.querySelector("h2");
let mechInterval = 0;
let quartzInterval = 0;

const mechDate = () => {
	clockFace.style.display = "block";
	h2.style.display = "none";
	const date = new Date();
	
	const second = date.getSeconds();
	const milliSecond = date.getMilliseconds();
	const secondDegrees = (second * 6) + (milliSecond * 0.006);
	secondHand.style.transform = `rotate(${secondDegrees}deg)`;

	const minute = date.getMinutes();
	const minuteDegrees = ((minute / 60) * 360);
	minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

	let hour = date.getHours();
	if (hour >= 12) {
		hour -= 12;
	}
	const hourDegrees = (hour * 30) + (minute * 0.5);
	hourHand.style.transform = `rotate(${hourDegrees}deg)`;
};
const quartzDate = () => {
	clockFace.style.display = "block";
	h2.style.display = "none";
	const date = new Date();

	const second = date.getSeconds();
	const secondDegrees = ((second / 60) * 360);
	secondHand.style.transform = `rotate(${secondDegrees}deg)`;

	const minute = date.getMinutes();
	const minuteDegrees = ((minute / 60) * 360);
	minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

	let hour = date.getHours();
	if (hour >= 12) {
		hour -= 12;
	}
	const hourDegrees = (hour * 30) + (minute * 0.5);
	hourHand.style.transform = `rotate(${hourDegrees}deg)`;
};

const animateMech = () => {
	clearInterval(mechInterval);
	clearInterval(quartzInterval);
	mechInterval = setInterval(mechDate, 250);
};
const animateQuartz = () => {
	clearInterval(mechInterval);
	clearInterval(quartzInterval);
	quartzInterval = setInterval(quartzDate, 250);
};

mechanical.addEventListener("click", animateMech);
quartz.addEventListener("click", animateQuartz);