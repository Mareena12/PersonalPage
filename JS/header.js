$(Mareena).ready(function(){
    var altura = $('.menu').offset().top;

    $(window).on('scroll',function(){
        if($(window).scrollTop() > altura){
            $('.menu').addClas('menu-fixed');
        }else{
            $('.menu').removeClas('menu-fixed');
        }
    });
});


