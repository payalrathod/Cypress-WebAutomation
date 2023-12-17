//objects

var customer = {
  firstName: 'John',
  lastName: 'Smith'
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
