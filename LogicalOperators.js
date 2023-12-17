//logical  "AND"
console.log(true && true)  //all values must be true

//logical "OR"
console.log(false || false)  //any value must be true

var ageIsMorethanEighteen = false
var isUSCitizen = true

var eligibilityForDriversLicense = ageIsMorethanEighteen && isUSCitizen
console.log('This customer is eligible for DL: '+ eligibilityForDriversLicense)  //false

var eligibilityForDriversLicense = ageIsMorethanEighteen || isUSCitizen
console.log('This customer is eligible for DL: '+ eligibilityForDriversLicense)  //true

//Logical "NOT"
console.log(!true)  //false
console.log(6 == 10)  //false
console.log(6 !== 10)  //true
