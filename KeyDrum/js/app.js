window.addEventListener('keydown', (event) => {
	var key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
	if(!key){
		return;
	}

	//Sound effect
	var audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
	audio.currentTime = 0;
	audio.play();

	//Visual effects
	key.classList.add('playing');
});

window.addEventListener('keyup', (event) => {
	var key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
	if(!key){
		return;
	}

	key.classList.remove('playing');
});