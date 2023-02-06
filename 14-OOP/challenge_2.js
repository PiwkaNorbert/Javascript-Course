'use strict';

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  setSpeed(e, isUS) {
    console.log(
      `This ${this.make} ${
        e ? 'accelerated' : 'slowed down'
      }, and is now going ${this.speed} km/h`
    );
  }
  accelerate() {
    this.speed += 10;
    this.setSpeed(true);
  }
  break() {
    this.speed -= 5;
    this.setSpeed(false);
  }
  set speedUS(curSpeed) {
    this.speed = curSpeed * 1.6;
  }
  get speedUS() {
    return `The ${this.make} is going ${this.speed / 1.6} mi/h`;
  }
}

const BMW = new CarCl('BMW', 120);
const Mercedes = new CarCl('Mercedes', 95);
const Ford = new CarCl('Ford', 110);

BMW.accelerate();
BMW.accelerate();
BMW.break();

console.log(BMW.speedUS);
console.log(Mercedes.speed + 'km/h');
console.log(Mercedes.speedUS);
Ford.speedUS = 50;
console.log(Ford);
