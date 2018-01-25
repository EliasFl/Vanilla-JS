var panels = document.querySelectorAll('.panel');

function toggleOpen(){
	this.classList.toggle('open');
}

function toggleOpenActive(e){
	if (e.propertyName.includes('flex')){
		this.classList.toggle('open-active');
	}
}

panels.forEach((panel) => {
	panel.addEventListener('click', toggleOpen);
	panel.addEventListener('transitionend', toggleOpenActive);
});