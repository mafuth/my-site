$('.home-next').click(function(){
    $('.parallax-home').fadeOut(500);
    $('.parallax-about').fadeIn(1500);
});
$('.home-works').click(function(){
    $('.parallax-home').fadeOut(500);
    $('.parallax-works').fadeIn(1500);
});

$('.about-next').click(function(){
    $('.parallax-about').fadeOut(500);
    $('.parallax-home').fadeIn(1500);
});
$('.works-next').click(function(){
    $('.parallax-works').fadeOut(500);
    $('.parallax-home').fadeIn(1500);
});