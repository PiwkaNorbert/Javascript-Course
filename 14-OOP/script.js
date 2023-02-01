'use strict';

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
/*

*/

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
*/
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
