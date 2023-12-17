//declarative functions
helloOne()
function helloOne(){
  console.log('Hello World')
}
//helloOne()

//anoymous function
var helloTwo = function(){
  console.log('Hello World2')
}
helloTwo()

//ES6 function syntax or arrow function
var helloThree = () => {
  console.log('Hello World3')
}
helloThree()

//functions with arguments
function printName(name, lastName)  {
  console.log(name, lastName)
}
printName('John', 'Smith')

//Functions with return
function multipyByTwo(number)  {
  var result = number * 2
  return result
}
var myResult = multipyByTwo(20)
console.log(myResult)

//import functions
import {}





