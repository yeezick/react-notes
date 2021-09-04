// classes are kind of like data structures or objects; essentially bodies of code that refer to that object

class Human {
  gender = "male";

  printGender = () => {
    console.log(this.gender);
  };
}

// a class can be extended by another class, a "sub-class" which can be viewed as an attachment that taps into the central network lol 
  //basically it extends all the information of the super class, allows modification / addition to the blocks of code, but as another class. 
class Person extends Human {
  name = "erick";
  gender = "female";
  printMyName = () => {
    console.log(this.name);
  };
}


// how to access a class
const erick = new Human();
const person = new Person
erick.printGender();
person.printGender();
person.printMyName();

