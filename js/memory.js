function Memory(){
}

Memory.prototype.checkForMatch = function(firstGuess, secondGuess){
  var result = false;
  if(firstGuess === secondGuess){
    result = true;
  }
  return result;
};

exports.memoryModule = Memory;
