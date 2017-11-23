$(function () {
  console.log('załadowany');
  
  

  $('.rating-circle').click(function() {
    $('#ocena').removeAttr('hidden');
  });
  
  $('.rating-circle').mouseover(function() {

  	$(this).prevAll().css('background-color', 'yellow');
    $("h1").css('background-color', 'white');
    //$('div:first').nextAll().css('background-color', 'yellow');
    //$(this).siblings().css('background-color', 'yellow');  });

  });
  $('.rating-circle').mouseout(function() {
  	$(this).css('background-color', 'white');
  	//$("div").prevAll().removeClass('background-color', 'white');

  });



  $('.rating-circle').on('click', function() {
    //$('div').prevAll('.rating-circle').css('background-color', 'green');
    //$(this).prevAll().css('background-color', 'green');
    $(this).css('background-color', 'green');
    $(this).prevAll().css('background-color', 'green');  
    //$("div").siblings(".rating-circle").css("background-color: green")
    var test = $(this).index();
    $('div#ocena').append(test + '/5');
    //$(.rating-circle).text("#ocena" + index);
    console.log('działa');
  });
  

//koniec
});