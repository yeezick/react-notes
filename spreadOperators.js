// spread operators "..." essentially lay out all the elements within an array or object into a parent container

  // array
const numbers = [1,2,3];
const newNumbers = [...numbers, 4];
console.log(newNumbers)

  //object
  const person = {
    name: "erick",
  };

  const newPerson = {
    ...person,
    age: 28,
  }

  console.log(newPerson);


  // The spread operator allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions

  function sum(...theArgs) {
    return theArgs.reduce((previous, current) => {
      return previous + current;
    });
  }
  
  console.log(sum(1, 2, 3));
  // expected output: 6
  
  console.log(sum(1, 2, 3, 4));
  // expected output: 10
  