$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

// ============================================================================
document.querySelector('.popup-vedio').addEventListener('click', function(event) {
    event.preventDefault(); 
    document.getElementById('videoPlayer').style.display = 'block';
    document.getElementById('videoPlayer').play(); 
  });
  

