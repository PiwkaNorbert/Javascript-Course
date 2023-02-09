'use strict';
/*
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this!!!! call method in class
  // this.calcAge = function(){
  //   console.log(2037 - this.birthYear);
  // }
};

const norbert = new Person('Norbert', 1998);
// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const mateusz = new Person('Mateusz', 1997);
const piotrek = new Person('Piotrek', 1991);

console.log(norbert, mateusz, piotrek);

const jay = 'jay';
console.log(norbert instanceof Person);
console.log(jay instanceof Person);

// Prototypes

Person.hey = function () {
  console.log('Hey there 👋');
  console.log(this);
};

Person.hey();
// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

norbert.calcAge();
mateusz.calcAge();
piotrek.calcAge();

console.log(norbert.__proto__);
console.log(norbert.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(norbert));

Person.prototype.species = 'Homo Sapiens';
console.log(norbert.species, mateusz.species);

console.log(norbert.hasOwnProperty('firstName'));
console.log(norbert.hasOwnProperty('species'));

console.log(norbert.__proto__);
// Object.prototype (to p of prototype chain)
console.log(norbert.__proto__.__proto__);
console.log(norbert.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const array = [2, 3, 4, 676, 7, 233, 2, 34]; // new Array === []
console.log(array);
console.log(array.__proto__ === Array.prototype);

console.log(array.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(array.unique());

const h1 = document.querySelector('h1');

console.dir(x => x + 1);


////////////////////////////////

// ES6 Classes

////////////////////////////////

// Class expression
// const PersonCl = class {}
// Class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // Instance Method
  // methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.fullName}`);
  }
  get age() {
    return 2037 - this.birthYear;
  }
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else console.log(`${name} is not a full name!`);
  }
  get fullName() {
    return this._fullName;
  }

  //Static Method
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}

// PersonCl.prototype.greet = function(){
// console.log(`Hey ${this.firstName}`);

// }
const jessica = new PersonCl('Jessica Davis', 1996);

console.log(jessica);

jessica.calcAge();
console.log(jessica.age);
console.log(jessica.__proto__ === PersonCl.prototype);

jessica.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode

const walter = new PersonCl('Walter', 1994);

PersonCl.hey();
*/

/*
const account = {
  owner : 'Norbert',
  movements : [200,5003,120,230],

  get lastest(){
    return this.movements.slice(-1).pop()
  },
  set lastest(mov){
    this.movements.push(mov)

  }
}

console.log(account.lastest);
console.log(account.lastest = 50);
console.log(account.movements);
console.log('///////////////////// Object Create /////////////////////////');
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
const dawid = Object.create(PersonProto);
console.log(dawid);
dawid.name = 'Dawid';
dawid.birthYear = '2002';
console.log(dawid);
dawid.calcAge();
console.log(dawid.__proto__ === PersonProto);
const sarah = Object.create(PersonProto);

sarah.init('Sarah', 1979);
sarah.calcAge();

////////////////////////////////////////////

// Inheritance between "Classes": Constructor function
const Person = function (firstName, birthYear) {
  this.birthYear = birthYear;
  this.firstName = firstName;
};

Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear); //PASSING THROUGH "FUNCTION" AND "THIS" KEYWORD
  this.course = course;
};
// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} nad I study ${this.course}`);
};

const mike = new Student('Mike', 1998, 'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);

Student.prototype.constructor = Student;

console.dir(Student.prototype.constructor);

// Inheritance between "Classes": Classes

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // PersonCl.call()
    super(fullName, birthYear); // Always needs to happen first!
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
  calcAge() {
    console.log(
      `I am ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const marta = new StudentCl('Marta Jones', 2012, 'Administrator');

marta.introduce();
marta.calcAge();

// Inheritance between "Classes": Object.create

//
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};
const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'IT');
jay.introduce();
jay.calcAge();
*/

// Public fields
// Private fields
// Public Methods
// Private methods

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this._pin = pin;
    // Protected property
    this._movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public interface

  getMovements() {
    return this._movements;
  }
  deposit(val) {
    this._movements.push(val);
  }
  withdraw(val) {
    this.deposit(-val);
  }

  _approveLoan(val) {
    return true;
  }
  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }
}
const acc1 = new Account('Norbert', 'EUR', 1111, []);
console.log(acc1);

// acc1._movements.push(250);
// acc1._movements.push(-150);
acc1.deposit(280);
acc1.withdraw(100);
console.log(acc1);

const Mateusz = new Account('Mateusz', 'USD', 2137, []);

Mateusz.withdraw(500);
Mateusz.deposit(1000);
Mateusz.requestLoan(2000);
acc1._approveLoan(1000);

console.log(acc1.getMovements());

console.log(Mateusz);
console.log(acc1.pin);
