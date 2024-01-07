var price = 50
var itemName = "Cup"
var messageToPrint = "The price for your "+itemName+" is "+price+" dollars."  //concatenation
var messageToPrint2 = `The price for your ${itemName} is ${price} dollars.`    //interpolation
console.log(messageToPrint)
console.log(messageToPrint2)
