//Conditional Statement
/*if(condition)  {
  //execute code
}
else  {
  //exceute code 
}
*/

var hour = 5
if(hour >= 6 && hour < 12)  {
  console.log('Good Morning!')
}
else if(hour >= 12 && hour < 18)  {
  console.log('Good Afternoon!')
}
else  {
  console.log('Good Evening!')
}

var ageIsMorethanEighteen = true
var isUSCitizen = false

if(ageIsMorethanEighteen && isUSCitizen)  {
  console.log('Customer is eligible for DL')
}
else  {
  console.log('Customer is not eligible for DL')
}

