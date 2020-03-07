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

const returnStupidOrString = (isStupid: boolean): StupidString => {
    if (isStupid) {
        return "stupid" //as StupidString;
    }
    return "string" //as StupidString;
}

type StupidString = "stupid" | "string";

const stupidString: StupidString = "string"

const string = returnStupidOrString(false);

class Car {
    model: string;
    doors: number;
    isElectric: boolean;
    onStart: () => void;
    getMilesPerHour: () => number;

    constructor(model: string, doors: number, isElectric: boolean) {
        this.model = model;
        this.doors = doors;
        this.isElectric = isElectric;
    }

    returnNumber = () => {
        return 2;
    }

    displayMake(): void {
        console.log(`This car is a ${this.model}`);
    }

    displayMakeTwo = (): void => {
        console.log(`This car is a ${this.model}`);
    }
    
}

const mr2 = new Car('toyota', 2, false)
// console.log(mr2.model, mr2.doors, mr2.isElectric)

mr2.displayMakeTwo();

