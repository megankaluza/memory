$(document).ready(function(){
  var firstGuess;
  var secondGuess;
  var firstGuessId;
  var secondGuessId;
  var currentGuess = 1;
  $('#card1-back').click(function(){
    $('#card1').children().toggle();
    if(currentGuess === 1){
      firstGuess = jQuery(this).attr('value');
      currentGuess = 2;
    }else{
      secondGuess = jQuery(this).attr('value');
    }
  });
  $('#card2-back').click(function(){
    $('#card2').children().toggle();
    if(currentGuess === 1){
      firstGuess = jQuery(this).attr('value');
      currentGuess = 2;
    }else{
      secondGuess = jQuery(this).attr('value');
    }
  });
  $('#card3-back').click(function(){
    $('#card3').children().toggle();
    if(currentGuess === 1){
      firstGuess = jQuery(this).attr('value');
      currentGuess = 2;
    }else{
      secondGuess = jQuery(this).attr('value');
    }
  });
  $('#card4-back').click(function(){
    $('#card4').children().toggle();
    if(currentGuess === 1){
      firstGuess = jQuery(this).attr('value');
      currentGuess = 2;
    }else{
      secondGuess = jQuery(this).attr('value');
    }
  });
  $('#card5-back').click(function(){
    $('#card5').children().toggle();

    if(currentGuess === 1){
      firstGuess = jQuery(this).attr('value');
      currentGuess = 2;
    }else{
      secondGuess = jQuery(this).attr('value');
    }
  });
  $('#card6-back').click(function(){
    $('#card6').children().toggle();
    if(currentGuess === 1){
      firstGuess = jQuery(this).attr('value');
      currentGuess = 2;
    }else{
      secondGuess = jQuery(this).attr('value');
    }
  });
  $('#card7-back').click(function(){
    $('#card7').children().toggle();
    if(currentGuess === 1){
      firstGuess = jQuery(this).attr('value');
      currentGuess = 2;
    }else{
      secondGuess = jQuery(this).attr('value');
    }
  });
  $('#card8-back').click(function(){
    $('#card8').children().toggle();
    if(currentGuess === 1){
      firstGuess = jQuery(this).attr('value');
      currentGuess = 2;
    }else{
      secondGuess = jQuery(this).attr('value');
    }
  });
  if(currentGuess === 2){
    var match = checkForMatch(firstGuess, secondGuess);
      if(match !== true){

      }
  }

});
