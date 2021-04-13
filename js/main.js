

 $('.sl2').slick({ 
   slidesToShow: 4,
   slidesToScroll: 1,
   autoplay: true,
   autoplaySpeed: 1500,
   responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false
        }
      }
   ]
});

$('.sl3').slick({ 
   slidesToShow: 1,
   slidesToScroll: 1,
   autoplay: true,
   arrows: true,
   responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false
          
        }
      }
   ]
});

$('.sl4').slick({ 
  slidesToShow: 1,
  slidesToScroll: 1,
  //autoplay: true,
  responsive: [
     {
       breakpoint: 768,
       settings: {
         slidesToShow: 1,
         arrows: false

       }
     },
     {
       breakpoint: 480,
       settings: {
         slidesToShow: 1,
         arrows: false
       }
     }
  ]
});

   $("#phone").mask("+7 (999) 999 - 9999",{autoclear: false, completed:function(){alert("ОК!");}});


   jQuery(document).ready(function() {
    jQuery("a.scrollto").click(function () {
    elementClick = jQuery(this).attr("href")
    destination = jQuery(elementClick).offset().top -100;
    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
    return false;
    });
    });


    AOS.init({
      // Global settings:
      disable: phone, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
      
    
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1200, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    
    }); 

  
   