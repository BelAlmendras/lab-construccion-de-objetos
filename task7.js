import PromptSync from "prompt-sync";
const prompt = PromptSync();

function Car(make, model, year, engine, color, mileage) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.engine = engine;
  this.color = color;
  this.mileage = mileage;

  this.description = function () {
    console.log(
      `${this.make} ${this.model} (${this.year}) - Motor: ${this.engine}, Color: ${this.color}, Kilometraje: ${this.mileage} km`
    );
};
}


const make = prompt("Enter the make of the vehicle: ");
const model = prompt("Enter the model of the vehicle: ");
const year = prompt("Enter the year of the vehicle: ");
const engine = prompt("Enter the engine of the vehicle: ");
const color = prompt("Enter the color of the vehicle: ");
const mileage = prompt("Enter the mileage of the vehicle: ");

const myCar = new Car(make, model, year, engine, color, mileage);


myCar.description();