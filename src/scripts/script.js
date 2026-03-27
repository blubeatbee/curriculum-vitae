	// Used for mobile header nav button
const headerbar = document.querySelector(".b3-header-sticky");
const navMenu = document.querySelector(".b3-nav-menu");
const navMenuDivs = document.querySelectorAll(".b3-nav-menu > li");

// Used for easter egg 1
const body = this.document.body;


window.addEventListener('DOMContentLoaded', function() {

	// Change header color when scrolling down
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

	// Close mobile nav menu when resizing window
	window.addEventListener('resize', function() {
		if (window.matchMedia("(min-width: 481px)").matches) {
			navMenu.classList.remove("b3-open-menu");

			for (let i = 0; i < navMenuDivs.length; i++) {
				navMenuDivs[i].classList.add("hover-gradient-bottom");
				navMenuDivs[i].classList.remove("hover-highlight-light");
			}
		}
	});

	// Closes print window after print
	window.addEventListener("afterprint", () => self.close);
}, false);


// Displaying mobile nav menu function 
function openNavMenu() {
	if (!navMenu.classList.contains("b3-open-menu")) {
		navMenu.classList.add("b3-open-menu");
		
		for (let i = 0; i < navMenuDivs.length; i++) {
			navMenuDivs[i].classList.remove("hover-gradient-bottom");
			navMenuDivs[i].classList.add("hover-highlight-dark");
		}
	}
	else {
		navMenu.classList.remove("b3-open-menu");
	}
};


// Copy info to clipboard
function copyToClipboard(type) {
	switch(type) {
		case 'phone':
			navigator.clipboard.writeText("phone");
			console.log("Phone number copied to clipboard.");
			break;
		case 'email':
			navigator.clipboard.writeText("email");
			console.log("Email address copied to clipboard.");
			break;
		default:
			console.log("Failed to copy to clipboard.");
			break;
	}
}


// Portfolio Modal
// Dynamically takes info from a project specified in the Portfolio page and displays it to a modal.
// All you have to do is to send a number as an argument in showPortfolioModal() and it will look for
// the equivalent project in Portfolio page.
// So showPortfolioModal(2) will check for the project with the HTML id '2', etc.
const portfolioModal = document.querySelector("#portfolio-modal");
const imgPlaceholder = document.querySelector("#modal-img");
const titlePlaceholder = document.querySelector("#modal-title");
const descPlaceholder = document.querySelector("#modal-description");
const creditPlaceholder = document.querySelector("#modal-credit");
const linksPlaceholder = document.querySelector("#modal-links");

function setPortfolioModalImg(imgToReplace, imgNew) {
	imgToReplace.setAttribute('src', `${imgNew.getAttribute('src')}`);
	imgToReplace.setAttribute('alt', `${imgNew.getAttribute('alt')}`);
}
function showPortfolioModal(int) {
	if (int === null || int === NaN) {
		throw new Error("Unable to display contents on modal");
	}
	setPortfolioModalImg(imgPlaceholder, document.querySelector(`#project-${int}-img`));
	let title = document.querySelector(`#project-${int}`).cloneNode(true);
	let descr = document.querySelector(`#project-${int}-description`).cloneNode(true);
	let credit = document.querySelector(`#project-${int}-credit`).cloneNode(true);
	let links = document.querySelector(`#project-${int}-links`).cloneNode(true);
	
	titlePlaceholder.replaceWith(title);
	descPlaceholder.replaceWith(descr);
	creditPlaceholder.replaceWith(credit);
	linksPlaceholder.replaceWith(links);
}
function openPortfolioModal(projectNum) {
	switch(projectNum){
		case 1:
			showPortfolioModal(1);
			break;
		case 2:
			showPortfolioModal(2);
			break;
		default:
			throw new Error("Function did not recognise argument.")
	}
	portfolioModal.showModal();
	portfolioModal.scrollTop = 0;
	portfolioModal.scrollLeft = 0;
}


// Easter egg 1
function activateEasterEgg1(){
	console.log("Easter egg 1 activated; Background has changed.");
	if (body.classList.contains('b3-theme-dark')) {
		body.classList.replace('b3-theme-dark', 'b3-theme-light');
	}
	else if (body.classList.contains('b3-theme-light')) {
		body.classList.replace('b3-theme-light', 'b3-theme-dark');
	}
	else {
		body.classList.add('b3-theme-dark');
	}
}


// Easter egg 2
const modal = document.getElementById('modal');
let input = document.getElementById('secret-2');

function easterEgg2(){
	input.addEventListener('keyup', () => {
		if (input.value == '0451') {
			console.log("Code entered knowingly.");
			modal.showModal();
		}
	});
};
