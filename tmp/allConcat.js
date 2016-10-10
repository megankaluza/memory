var Memory = require('./../js/memory.js').memoryModule;
var firstGuess;
var secondGuess;
var firstGuessId;
var secondGuessId;

$(document).ready(function(){
  var memory = new Memory();
  var currentGuess = 1;
  $('#card1-back').click(function(){
    $('#card1').children().toggle();
    if(currentGuess === 1){
      firstGuess = jQuery(this).attr('value');
      firstGuessId = jQuery(this).parent().attr('id');
      currentGuess = 2;
    }else{
      secondGuess = jQuery(this).attr('value');
      secondGuessId = jQuery(this).parent().attr('id');
      var match = memory.checkForMatch(firstGuess, secondGuess);
        if(match !== true){
          setTimeout(function(){
            $('#' + firstGuessId).children().toggle();
            $('#' + secondGuessId).children().toggle();
          }, 2000);
        }
        currentGuess= 1;
      }
  });
  $('#card2-back').click(function(){
    $('#card2').children().toggle();
    if(currentGuess === 1){
      firstGuess = jQuery(this).attr('value');
      firstGuessId = jQuery(this).parent().attr('id');
      currentGuess = 2;
    }else{
      secondGuess = jQuery(this).attr('value');
      secondGuessId = jQuery(this).parent().attr('id');
      var match = memory.checkForMatch(firstGuess, secondGuess);
        if(match !== true){
          setTimeout(function(){
            $('#' + firstGuessId).children().toggle();
            $('#' + secondGuessId).children().toggle();
          }, 2000);
        }
        currentGuess= 1;
    }
  });
  $('#card3-back').click(function(){
    $('#card3').children().toggle();
    if(currentGuess === 1){
      firstGuess = jQuery(this).attr('value');
      firstGuessId = jQuery(this).parent().attr('id');
      currentGuess = 2;
    }else{
      secondGuess = jQuery(this).attr('value');
      secondGuessId = jQuery(this).parent().attr('id');
      var match = memory.checkForMatch(firstGuess, secondGuess);
        if(match !== true){
          setTimeout(function(){
            $('#' + firstGuessId).children().toggle();
            $('#' + secondGuessId).children().toggle();
          }, 2000);
        }
        currentGuess= 1;
    }
  });
  $('#card4-back').click(function(){
    $('#card4').children().toggle();
    if(currentGuess === 1){
      firstGuess = jQuery(this).attr('value');
      firstGuessId = jQuery(this).parent().attr('id');
      currentGuess = 2;
    }else{
      secondGuess = jQuery(this).attr('value');
      secondGuessId = jQuery(this).parent().attr('id');
      var match = memory.checkForMatch(firstGuess, secondGuess);
        if(match !== true){
          setTimeout(function(){
            $('#' + firstGuessId).children().toggle();
            $('#' + secondGuessId).children().toggle();
          }, 2000);
        }
        currentGuess= 1;
    }
  });
  $('#card5-back').click(function(){
    $('#card5').children().toggle();
    if(currentGuess === 1){
      firstGuess = jQuery(this).attr('value');
      firstGuessId = jQuery(this).parent().attr('id');
      currentGuess = 2;
    }else{
      secondGuess = jQuery(this).attr('value');
      secondGuessId = jQuery(this).parent().attr('id');
      var match = memory.checkForMatch(firstGuess, secondGuess);

        if(match !== true){
          setTimeout(function(){
            $('#' + firstGuessId).children().toggle();
            $('#' + secondGuessId).children().toggle();
          }, 2000);
        }
        currentGuess= 1;
      }
  });

  $('#card6-back').click(function(){
    $('#card6').children().toggle();
    if(currentGuess === 1){
      firstGuess = jQuery(this).attr('value');
      firstGuessId = jQuery(this).parent().attr('id');
      currentGuess = 2;
    }else{
      secondGuess = jQuery(this).attr('value');
      secondGuessId = jQuery(this).parent().attr('id');
      var match = memory.checkForMatch(firstGuess, secondGuess);
        if(match !== true){
          setTimeout(function(){
            $('#' + firstGuessId).children().toggle();
            $('#' + secondGuessId).children().toggle();
          }, 2000);
        }
        currentGuess= 1;
    }
  });
  $('#card7-back').click(function(){
    $('#card7').children().toggle();
    if(currentGuess === 1){
      firstGuess = jQuery(this).attr('value');
      firstGuessId = jQuery(this).parent().attr('id');
      currentGuess = 2;
    }else{
      secondGuess = jQuery(this).attr('value');
      secondGuessId = jQuery(this).parent().attr('id');
      var match = memory.checkForMatch(firstGuess, secondGuess);
        if(match !== true){
          setTimeout(function(){
            $('#' + firstGuessId).children().toggle();
            $('#' + secondGuessId).children().toggle();
          }, 2000);
        }
        currentGuess= 1;
    }
  });
  $('#card8-back').click(function(){
    $('#card8').children().toggle();
    if(currentGuess === 1){
      firstGuess = jQuery(this).attr('value');
      firstGuessId = jQuery(this).parent().attr('id');
      currentGuess = 2;
    }else{
      secondGuess = jQuery(this).attr('value');
      secondGuessId = jQuery(this).parent().attr('id');
      var match = memory.checkForMatch(firstGuess, secondGuess);
        if(match !== true){
          setTimeout(function(){
            $('#' + firstGuessId).children().toggle();
            $('#' + secondGuessId).children().toggle();
          }, 2000);
        }
        currentGuess= 1;
    }
  });
});

exports.memoryModule = Memory;
