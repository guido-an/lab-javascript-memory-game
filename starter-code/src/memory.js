var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
  this.cardsFlipped = 0;
  this.firstFlipped = {};
};

MemoryGame.prototype.shuffleCards = function () {
     
};


MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {  
  pairsClicked++;
  if( firstCard == secondCard) {
    pairsGuessed++;
    return true
  } else {
    return false 
  }
}


MemoryGame.prototype.isFinished = function () {
  return (this.pairsGuessed == 12) ? true : false  
};






