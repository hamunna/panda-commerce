// Task-1 :: Connecting External JS and Checking by Alert.
// alert('JS is Connected!');


// Task-2 :: Select all the <h2> tags and change the text color into "lightblue"

const h2List = document.getElementsByTagName('h2');

for (const h2 of h2List) {
	// h2.style.color = 'lightblue';
	h2.style.color = 'green';
}


// Task-3 :: Select "backpack" ID Section and Change its Background color into "tomato"

document.getElementById('backpack').style.background = 'tomato';


// Task-4 :: To the all "card" classes give the border-radius: 30px;
const cards = document.getElementsByClassName('card');

for (const card of cards) {
	card.style.borderRadius = '30px';
}


// Task-5 :: Clickable btn where will be a console output on click

function clickConsole() {
	console.log('Button is Clicked!');
}


// Task-6 :: Add an Event Handler to All Buy Now Button so that when the button clicks, it will remove from the website

const buyNowBtns = document.getElementsByClassName('buy-now-btn');
for (const buyNow of buyNowBtns) {
	buyNow.addEventListener('click', (event) => {
		const targets = event.target;
		targets.parentNode.removeChild(event.target);
	});
}


// Task-7 From Newsletter Section, btn will be disabled. When you write 'email' word in the input btn will be enabled.

const nlInput = document.getElementById('nl-input');

nlInput.addEventListener('keyup', () => {

	const nlBtn = document.getElementById('nl-btn');
	if (nlInput.value === 'email') {
		nlBtn.removeAttribute('disabled');
	} else {
		nlBtn.setAttribute('disabled', true);
	}
});


// Task-8 :: Change Image when mouseenter or Hover an Image

const changeableImg = document.getElementById('changeable-img');

changeableImg.addEventListener('mouseenter', () => {
	changeableImg.setAttribute('src', 'assets/images/bags/bag-1.png');
});

changeableImg.addEventListener('mouseout', () => {
	changeableImg.setAttribute('src', 'assets/images/shoes/shoe-1.png');
});


// Task-9 Background Color will be changed on double click on a section.

const newsLetter = document.getElementById('newsletter-2');
// console.log(newsLetter);
newsLetter.addEventListener('dblclick', () => {
	newsLetter.style.background = 'indigo';
	newsLetter.style.color = '#fff';
});