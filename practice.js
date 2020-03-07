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
        var _this = this;
        // displayMake(): void {
        //     console.log(`This car is a ${this.model}`);
        // }
        this.displayMake = function () {
            console.log("This car is a " + _this.model);
        };
        this.model = model;
        this.doors = doors;
        this.isElectric = isElectric;
    }
    return Car;
}());
var mr2 = new Car('toyota', 2, false);
// console.log(mr2.model, mr2.doors, mr2.isElectric)
mr2.displayMake();
