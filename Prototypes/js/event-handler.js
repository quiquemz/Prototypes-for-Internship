$(document).ready(function(){

    $('#whats-hot-container').hide();

    $('#hot-link').click(function(e){
        e.preventDefault();
        $('#main-container').css('z-index', 0);
        $('#whats-hot-container').css('z-index', 1000).show();
    });

    $('.exit-link').click(function(e){
        e.preventDefault();
        $('#main-container').css('z-index', 1000);
        $('#whats-hot-container').css('z-index', 0).hide();
    });

    // ===== Scroll to Top ====
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 200) {        // If page is scrolled more than 50px
            $('.back-to-top').fadeIn(200);    // Fade in the arrow
        } else {
            $('.back-to-top').fadeOut(200);   // Else fade out the arrow
        }
    });

    $('.back-to-top-img').click(function(){

    });

});