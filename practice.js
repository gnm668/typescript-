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
var returnStupidOrString = function (isStupid) {
    if (isStupid) {
        return "stupid"; //as StupidString;
    }
    return "string"; //as StupidString;
};
var stupidString = "string";
var string = returnStupidOrString(false);
var Car = /** @class */ (function () {
    function Car(model, doors, isElectric) {
        var _this = this;
        this.returnNumber = function () {
            return 2;
        };
        this.displayMakeTwo = function () {
            console.log("This car is a " + _this.model);
        };
        this.model = model;
        this.doors = doors;
        this.isElectric = isElectric;
    }
    Car.prototype.displayMake = function () {
        console.log("This car is a " + this.model);
    };
    return Car;
}());
var mr2 = new Car('toyota', 2, false);
// console.log(mr2.model, mr2.doors, mr2.isElectric)
mr2.displayMakeTwo();
