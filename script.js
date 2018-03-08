const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".minute-hand");
const hourHand = document.querySelector(".hour-hand");

const setDate = () => {
	const date = new Date();
	
//	// Quartz watch
//	const second = date.getSeconds();
//	const secondDegrees = ((second / 60) * 360);
//	secondHand.style.transform = `rotate(${secondDegrees}deg)`;
	
	// Mechanical watch
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
	
setInterval(setDate, 250);