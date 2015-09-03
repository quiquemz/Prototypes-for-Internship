$(document).ready(function(){

    // ===== Scroll to Top ====
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 200) {        // If page is scrolled more than 50px
            $('.back-to-top').fadeIn(200);    // Fade in the arrow
        } else {
            $('.back-to-top').fadeOut(200);   // Else fade out the arrow
        }
    });



    // ==== Hiding all take-overs ====
    $('.take-over').hide();


    // ==== Showing and Hiding SEARCH ====
    $('#search-link').click(function(e){
        e.preventDefault();
        $('#main-container').css('z-index', 0);
        $('#search-take-over').css('z-index', 1000).show();

        $('.exit-link').css('left', e.pageX - 15).css('top', e.pageY - 15);
    });

    $('.exit-link').click(function(e){
        e.preventDefault();
        $('#main-container').css('z-index', 1000);
        $('#search-take-over').css('z-index', 0).hide();
    });


    // ==== Changing LANGUAGE ====
    $('#lang-link').click(function(e){
        e.preventDefault();
        if ($('#lang-link').html() === 'EN') {
            $('#lang-link').html("ES");
        }
        else {
            $('#lang-link').html("EN");
        }
    });

    // ==== Showing and Hiding MENU ====
    $('#menu-link').click(function(e){
        e.preventDefault();
        $('#main-container').css('z-index', 0);
        $('#menu-take-over').css('z-index', 1000).show();

        $('.exit-link').css('left', e.pageX - 15).css('top', e.pageY - 15);
    });

    $('.exit-link').click(function(e){
        e.preventDefault();
        $('#main-container').css('z-index', 1000);
        $('#menu-take-over').css('z-index', 0).hide();
    });
});