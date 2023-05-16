const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-next');
const prevButton = document.querySelector('.carousel-prev');

const slideWidth = slides[0].getBoundingClientRect().width;

// console.log(slideWidth);

//Arrange slides next to another

const setSlidePosition = (slide, index) => {
	slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
	//move to the next slide
	track.style.transform = 'translateX(-' + targetSlide.style.left + ')';

	//remove current-slide class from the current slide
	currentSlide.classList.remove('current-slide');

	//add the current-slide to the next slide
	targetSlide.classList.add('current-slide');
};

//move when next button is clicked
nextButton.addEventListener('click', (e) => {
	//find current slide
	const currentSlide = track.querySelector('.current-slide');
	const nextSlide = currentSlide.nextElementSibling;

	moveToSlide(track, currentSlide, nextSlide);
});

//move to prev slide when prev button is pressed
prevButton.addEventListener('click', (e) => {
	//find current slide
	const currentSlide = track.querySelector('.current-slide');
	const prevSlide = currentSlide.previousElementSibling;

	moveToSlide(track, currentSlide, prevSlide);
});
