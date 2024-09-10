// make a slider script  
const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    // Handle scrollbar thumb drag
    scrollbarThumb.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;
        const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;

        // Update thumb position on mouse move
        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition = thumbPosition + deltaX;

            // Ensure the scrollbar thumb stays within bounds
            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

            scrollbarThumb.style.left = `${boundedPosition}px`;
            imageList.scrollLeft = scrollPosition;
        }

        // Remove event listeners on mouse up
        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }

        // Add event listeners for drag interaction
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    });

    // Slide images according to the slide button clicks
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });

    // Show or hide slide buttons based on scroll position
    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
    }
  
    // Update scrollbar thumb position based on image scroll
    const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
    }

    // Call these two functions when image list scrolls
    imageList.addEventListener("scroll", () => {
        updateScrollThumbPosition();
        handleSlideButtons();
    });
}

window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);



// make a counting section java script 

// make a count section    
// Animate Number Counter
const counterNum = document.querySelectorAll(".counter-numbers");

const speed = 80;

counterNum.forEach((curElem) => {
    const updateNumber = () => {
        const targetNumber = parseInt(curElem.dataset.number);
        console.log(targetNumber);
        const initialNum = parseInt(curElem.innerText);
        console.log(initialNum);
        const incrementNumber = Math.trunc(targetNumber / speed);

        if (initialNum < targetNumber) {
            curElem.innerText = `${initialNum + incrementNumber}`;
            setTimeout(updateNumber, 10);
        } else {
            curElem.innerText = `${targetNumber} %`;
        }
    };

    updateNumber();
});

// make a caraosel animation script 

const carousel = document.querySelector('#carouselExampleFade');

carousel.addEventListener('slide.bs.carousel', (event) => {
    // Custom actions or animations before the slide transition
});

carousel.addEventListener('slid.bs.carousel', (event) => {
    // Custom actions or animations after the slide transition
});


// make a carer page card script 
function toggleContent(id) {
    const content = document.getElementById(id);
    content.classList.toggle('content-hidden');
    content.classList.toggle('content-visible');
  }

//   make a navbar dropdowan script 





    