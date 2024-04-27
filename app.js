/*******
 * TESTIMONIAL SLIDER
*****/
function testimonialSlider() {
  const carouselOne = document.getElementById('carouselOne')
  if (carouselOne) {
    carouselOne.addEventListener('slid.bs.carousel', () => {
      const activeItem  = carouselOne.querySelector(".active");
      console.log(activeItem)
      document.querySelector(".js-testimonial-img").src = activeItem.getAttribute("data-js-testimonial-img")
    })
  }
  
}
testimonialSlider()