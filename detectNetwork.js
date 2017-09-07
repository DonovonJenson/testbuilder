// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  //Visa always has a prefix of 4 and a length of 13, 16, or 19.
  //MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.
if (cardNumber.length === 14 && cardNumber.match(/^(38|39)/) ) {
    return 'Diner\'s Club';
} else if(cardNumber.match(/^49[03|05|11]/) || cardNumber.substr(0,6) === '564182' || cardNumber.substr(0,6) === '633110' || cardNumber.substr(0,4) === '6333' || cardNumber.substr(0,4) === '6759'){
  if (cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19){
    return "Switch";
  }

} else if(cardNumber.match(/^628[2-8]/) || cardNumber.match(/^62[4-6]/) || (parseInt(cardNumber.substr(0,6))>= 622126 && parseInt(cardNumber.substr(0,6)) <= 622925) ){
  if (cardNumber.length >= 16 && cardNumber.length <= 19){
    return "China UnionPay";
  }
} else if (cardNumber.length === 15 && cardNumber.match(/^(34|37)/)  ) {
    return 'American Express';
} else if (cardNumber.length === 16 && cardNumber.match(/^51|52|53|54|55/)){
    return 'MasterCard';
} else if (cardNumber[0] === '4'){
    if (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19){
    return 'Visa';
  }
} else if (cardNumber.substr(0,2) === '65' || cardNumber.substr(0,4) === '6011' || cardNumber.match(/^64[4-9]/)){
    if (cardNumber.length === 16 || cardNumber.length === 19){
      return 'Discover'
   }
 } else if (cardNumber.substr(0,4) === '5018' || cardNumber.substr(0,4) === '5020' || cardNumber.substr(0,4) === '5038' || cardNumber.substr(0,4) === '6304'){
   if(cardNumber.length >= 12 && cardNumber.length <= 19){
     return 'Maestro';
   }
 }
 else {
  return cardNumber;
}
  // Once you've read this, go ahead and try to implement this function, then return to the console.
};
