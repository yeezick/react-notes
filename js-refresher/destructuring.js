// Allows an easy extraction of array elements or object properties and store them in variables
  //unlike the spread ooperator, which pulls out all items, the destructuring method pulls out select ones


// for arrays, the order defines which eement is assigned
  [a,b] = ['hello','erick'];

  // objects simply use their property name
  const me = {name:"erick", age:22};
  const {myName} = me;
  console.log(myName)