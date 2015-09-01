$(document).ready(function(){

    var controller = new ScrollMagic.Controller();


    ////-----> ANIMATIONS WITH TWEEN <-----//
    var headerTween = new TweenMax.to('#header-box', 1, {
        'margin-top': 0,
        'height': 70,
        'width': '85%'
    });

    var xumakLogoTween = new TweenMax.to('.logo', 1, {
        'margin-top': 0,
        'height': 30,
        'width': 150
    });

    var homeTitleTween = new TweenMax.to('.title--home', 1, {
        'color': 'white'
    });

    var crewTitleTween = new TweenMax.to('.title--crew', 1, {
        'color': 'black'
    });


    //-----> SCENES <-----//
    var headerScene = new ScrollMagic.Scene({
            duration: 50
        })
        .setTween(headerTween);


    var xumakLogoScene = new ScrollMagic.Scene({
        duration: 50
    })
        .setTween(xumakLogoTween);

    var homeTitleScene = new ScrollMagic.Scene({
        duration: 50,
        reverse: false
    })
        .setTween(homeTitleTween);

    var crewTitleScene = new ScrollMagic.Scene({
        duration: 300,
        reverse: false,
        triggerElement: '.crew-table',
        offset: 40
    })
        .setTween(crewTitleTween);

    //ADDING SCENES TO CONTROLLER
    controller.addScene(headerScene);
    controller.addScene(xumakLogoScene);
    controller.addScene(homeTitleScene);
    controller.addScene(crewTitleScene);
});