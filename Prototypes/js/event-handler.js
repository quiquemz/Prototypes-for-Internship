$(document).ready(function(){

    $('#whats-hot-container').hide();

    $('#hot-link').click(function(e){
        e.preventDefault();
        $('#main-container').css('z-index', 0);
        $('#whats-hot-container').css('z-index', 1000).show();
/*
        var xAxis = e.pageX;
        var yAxis = e.pageY;

        $('#exit-link').css('left', xAxis).css('top', yAxis);
*/
    });

    $('.exit-link').click(function(e){
        e.preventDefault();
        $('#main-container').css('z-index', 1000);
        $('#whats-hot-container').css('z-index', 0).hide();

    });

});