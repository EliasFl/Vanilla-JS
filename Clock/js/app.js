function getTime(){
	var time = new Date();

	var seconds = time.getSeconds();
	var secondsDeg = ((seconds / 60) * 360) + 90;
	var secondsArrow = document.getElementById('second');
	secondsArrow.style.transform = `rotate(${secondsDeg}deg)`;

	var minutes = time.getMinutes();
	var minutesDeg = ((minutes / 60) * 360) + 90;
	var minutesArrow = document.getElementById('min');
	minutesArrow.style.transform = `rotate(${minutesDeg}deg)`;

	var hours = time.getHours();
	if (hours <= 12) {
		var hoursDeg = ((hours / 12) * 360) + 90;
		var hoursArrow = document.getElementById('hour');
		hoursArrow.style.transform = `rotate(${hoursDeg}deg)`;
	} else {
		hours -= 12;
		var hoursDeg = ((hours / 12) * 360) + 90;
		var hoursArrow = document.getElementById('hour');
		hoursArrow.style.transform = `rotate(${hoursDeg}deg)`;
	}

	console.log(seconds);
}

setInterval(getTime, 1000);