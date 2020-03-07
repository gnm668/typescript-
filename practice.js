// let a = 5;
// let b = 5;
// let c = a + b;
// console.log(c);
// let d: any = 'hello';
// console.log(typeof d);
// let e: string = 'hi';
// let f: number = 4;
// let g: boolean = true;
// console.log(typeof e,typeof f,typeof g);
var Car = /** @class */ (function () {
    function Car(model, doors, isElectric) {
        this.model = model;
        this.doors = doors;
        this.isElectric = isElectric;
    }
    Car.prototype.displayMake = function () {
        console.log("This car is a " + this.model);
    };
    return Car;
}());
