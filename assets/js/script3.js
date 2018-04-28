
// jQuery Function Number 1

$(document).ready(function(){

$('.pic1, .pic4, .pic7').css('display', 'none');
$('.pic1, .pic4, .pic7').fadeIn(800);

$('.pic3, .pic9, .pic5').css('display', 'none');
$('.pic3, .pic9, .pic5').delay(800).fadeIn(800);

$('.pic2, .pic6, .pic8, .pic10').css('display', 'none');
$('.pic2, .pic6, .pic8, .pic10').delay(1600).fadeIn(800);

});
