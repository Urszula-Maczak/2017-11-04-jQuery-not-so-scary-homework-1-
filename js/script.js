$(function () {
  console.log('załadowany');
  
  

  $('.rating-circle').click(function() {
    $('#ocena').removeAttr('hidden');
  });
  
  $('.rating-circle').mouseover(function() {

  	$(this).prevAll().addBack().css('background-color', 'yellow');
    $(this).nextAll().css('background-color', 'white');
    
//Kółka muszą być w konetnerze div, bo inaczej każdy div przed nim
//jest brany pod uwagę np. tytuł, nazwa h1
  });

    $('.rating-circle').mouseout(function() {
  	 $(this).removeClass('background-color', 'yellow');
     $(this).prevAll().addBack().css('background-color', 'green');

  });



  $('.rating-circle').on('click', function() {
    var test = $(this)
    $('#index').text(test.index() + 1 + ' z 5');
    console.log('działa');
  });
  

//koniec
});