function openMenu() {
	let nav = document.querySelectorAll('nav')[0],
		container = nav.parentElement;

	if(!document.querySelectorAll('.nav-background').length) {

		navBackground = document.createElement('DIV');
		navBackground.classList.add('nav-background');
		navBackground.addEventListener('click', closeWindow);
		container.insertBefore(navBackground, nav);

	} else {
		navBackground = document.querySelectorAll('.nav-background')[0];
	}
	
	nav.classList.add('right-menu');
	navBackground.style.display = 'block';
	navBackground.classList.remove('nav-background-closed');
}

function closeWindow() {
	let nav = document.querySelectorAll('nav')[0],
		navBackground = document.querySelectorAll('.nav-background')[0];

	nav.classList.remove('right-menu');
	navBackground.classList.add('nav-background-closed');

	setTimeout(() => {
		navBackground.style.display = 'none';
		navBackground.classList.remove('nav-background-closed');
	}, 300);
}