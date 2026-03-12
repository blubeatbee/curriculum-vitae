const headerbar = document.querySelector(".b3-header-sticky");

window.addEventListener('scroll', function() {
	// Get the Y px offset from top of screen (default Y=0px)
	let scrollY = this.window.pageYOffset;

	// Returns a boolean whether or not this class exists
	let banner = !!this.document.querySelector(".b3-banner-wrapper");

	if (banner === true) {
		if (scrollY >= 166) {
			headerbar.classList.replace('inactive', 'active');
		}
		else {
			headerbar.classList.replace('active', 'inactive');
		}
	}
	else {
		if (scrollY >= 1) {
			headerbar.classList.replace('inactive', 'active');
		}
		else if (scrollY <= 100) {
			headerbar.classList.replace('active', 'inactive');
		}
	}
});


const navMenu = document.querySelector(".b3-nav-menu");
const navMenuDivs = document.querySelectorAll(".b3-nav-menu > li");

window.addEventListener('resize', function() {
	
	if (window.matchMedia("(min-width: 481px)").matches) {
		navMenu.classList.remove("b3-open-menu");

		for (let i = 0; i < navMenuDivs.length; i++) {
			navMenuDivs[i].classList.add("hover-gradient-bottom");
			navMenuDivs[i].classList.remove("hover-highlight-light");
		}
	}
});

function openNavMenu() {
	if (!navMenu.classList.contains("b3-open-menu")) {
		navMenu.classList.add("b3-open-menu");
		
		for (let i = 0; i < navMenuDivs.length; i++) {
			navMenuDivs[i].classList.remove("hover-gradient-bottom");
			navMenuDivs[i].classList.add("hover-highlight-light");
		}
	}
	else {
		navMenu.classList.remove("b3-open-menu");
	}
};
function activateEasterEgg1() {
	alert("Easter egg 1");
}