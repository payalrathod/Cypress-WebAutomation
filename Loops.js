//loops

console.log('Hello World!')

//for loop
for(let i=0; i<5; i++)  {
  console.log('Hello World '+i)
}

var cars = ["Volvo","Toyota","Tesla"]
for(let car of cars)  {
  console.log(car)
  if(car == "Toyota")  {
    break
  }
}

//ES6 syntax for each loop
cars.forEach(car => {
  console.log(car)
})




