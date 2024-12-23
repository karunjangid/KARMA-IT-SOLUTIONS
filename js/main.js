(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();
    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Team carousel
    $(".team-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: false,
        dots: false,
        loop: true,
        margin: 50,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Testimonial carousel

    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: true,
        dots: true,
        loop: true,
        margin: 0,
        nav : true,
        navText: false,
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


     // Fact Counter

     $(document).ready(function(){
        $('.counter-value').each(function(){
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            },{
                duration: 2000,
                easing: 'easeInQuad',
                step: function (now){
                    $(this).text(Math.ceil(now));
                }
            });
        });
    });

    document.getElementById('surpriseBox').addEventListener('click', function() {
        const surprises = [
            "🎁 You got a gift card! COUPON - 12HIDJ6K",
            "☕ Enjoy a free coffee! COUPON - 12HILDJ6K",
            "🎉 Here's a discount coupon! COUPON - 10KDDJ6K",
            "🍫 Enjoy a box of chocolates! COUPON - 11HILG0K",
            "🎅 Santa's gift is on the way! COUPON - 12HCDD1K",
            "🌟 You are a star! Keep shining!",
            "❄️ A cozy blanket for the winter! COUPON - 06HIDJ6K",
            "🎵 A playlist of Christmas carols! COUPON - 18HIDJ4K",
            "🕷️ Winter is Too special you won a huddy! COUPON - 14HGDJ6K ",
            "👤 You are very Special for us But this time Try Again!"
        ];
        const surprise = surprises[Math.floor(Math.random() * surprises.length)];
        setTimeout(() => {
            document.getElementById('surpriseMessage').querySelector('p').textContent = surprise;
            document.getElementById('surpriseMessage').style.display = 'block';
            fireworks.style.display = 'none';
            
            // Hide surprise message after 10-20 seconds
            setTimeout(() => {
                document.getElementById('surpriseMessage').style.display = 'none';
            }, 10000);  // Adjust the delay as needed (10 seconds here)
        });  // Adjust the delay as needed (2 seconds here)
    });
    

})(jQuery);

