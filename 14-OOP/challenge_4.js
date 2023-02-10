// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

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
    return this;
  }
  break() {
    this.speed -= 5;
    this.setSpeed(false);
    return this;
  }
  set speedUS(curSpeed) {
    this.speed = curSpeed * 1.6;
    return this;
  }
  get speedUS() {
    return `The ${this.make} is going ${this.speed / 1.6} mi/h`;
  }
}

class EVCL extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `This ${this.make} is going ${this.speed} km/h at ${this.#charge}%`
    );
    return this;
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
}
const Tesla = new EVCL('Tesla', 100, 23);

Tesla.accelerate()
  .accelerate()
  .accelerate()
  .chargeBattery(90)
  .accelerate()
  .break()
  .break()
  .break()
  .break()
  .break()
  .break()
  .break()
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate();

console.log(Tesla.speedUS);
