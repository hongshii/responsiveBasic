$('.allBtn').click(function(){
    $('nav').animate({left:0})
    $('.dark').css({'display':'block'})
});

$('.dark').click(function(){
    $('.dark').css({'display':'none'});
    $('nav').animate({left:'-100%'})
})

$('nav button').click(function(){
    $('nav').animate({left:'-100%'})
    $('.dark').css({'display':'none'});
})

$(window).resize(function(){
    if($('nav').removeAttr('style'));
});
//nav에 스크립트가 적용 된게 있으면 화면이 resize될 때 없애준다.