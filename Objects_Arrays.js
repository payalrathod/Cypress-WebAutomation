//objects

var customer = {
  firstName: 'John',
  lastName: 'Smith',
  car = ["Volvo", "Toyota", "Tesla"]
}
console.log(customer)
console.log(customer.firstName)
console.log(customer.lastName)
console.log(customer['lastName'])

//Dot notation
customer.firstName = "Mike"
//Bracket notation
customer['lastName'] = "Silver"
console.log(customer['lastName'])
console.log(`${customer.firstName} ${customer.lastName}`)

//arrays
var car = ["Volvo", "Toyota", "Tesla"]
console.log(car[0])  //Volvo
console.log(car[1])  //Toyota
car[1] = "BMW"
console.log(car[1])  //BMW

console.log(customer.cars[0])  //Volvo

