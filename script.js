document.addEventListener('DOMContentLoaded', () => {
    const dots = document.querySelectorAll('.dot');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    const slides = document.querySelectorAll('.slide');
    const imageSlides = document.querySelectorAll('.main-image');

    let currentSlideIndex = 0;
    let currentImageIndex = 0;

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            document.querySelector('.dot.active')?.classList.remove('active');
            document.querySelector('.slide.active')?.classList.remove('active');

            dot.classList.add('active');
            slides[index].classList.add('active');
            currentSlideIndex = index;
        });
    });

    leftArrow.addEventListener('click', () => {
        // Change Top Image
        imageSlides[currentImageIndex].classList.remove('active');
        currentImageIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : imageSlides.length - 1;
        imageSlides[currentImageIndex].classList.add('active');
    });

    rightArrow.addEventListener('click', () => {
        // Change Top Image
        imageSlides[currentImageIndex].classList.remove('active');
        currentImageIndex = (currentImageIndex < imageSlides.length - 1) ? currentImageIndex + 1 : 0;
        imageSlides[currentImageIndex].classList.add('active');
    });
});