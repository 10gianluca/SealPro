$(document).ready(function(){
    $('.slider-1').slick({
        dots: false,  // Show navigation dots
        infinite: true,  // Infinite looping of slides
        speed: 500,  // Transition speed
        slidesToShow: 1,  // Number of slides to show at once
        slidesToScroll: 1,  // Number of slides to scroll at once
        autoplay: true,  // Enable autoplay
        autoplaySpeed: 3000,  // Autoplay speed (3 seconds)
        arrows: true,  // Show next/prev arrows
    });
});
function openLightbox(src) {
    document.getElementById("lightbox-img").src = src;
    document.getElementById("lightbox").style.display = "block";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

// Prevent clicks on the image itself from closing the lightbox
document.getElementById('lightbox-img').addEventListener('click', function(event) {
    event.stopPropagation();
});


