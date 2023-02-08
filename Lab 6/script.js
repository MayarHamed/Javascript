// class Shape {
//     name;
//     sides;
//     sideLength;
//     constructor(name, sides, sideLength) {
//         this.name = name;
//         this.sides = sides;
//         this.sideLength = sideLength;
//     }
//     calcPerimeter() {
//         let per = this.sides * this.sideLength;
//         console.log(per);
//         return per;
//     }
// }

// var square= new Shape('sqaure',4,5);
// square.calcPerimeter();
// var triangle= new Shape('triangle',3,3);
// triangle.calcPerimeter();

// class Square extends Shape {
//     calcArea() {
//         let ar = this.sideLength * this.sideLength;
//         console.log(ar);
//         return ar;
//     }
//     constructor(sideLength) {
//         super('square', 4,sideLength);
//     }
// }

// var square = new Square(5);
// square.calcPerimeter();
// square.calcArea();

// //using call method

// function Shape(name, sides, sideLength) {
//     this.name = name;
//     this.sides = sides;
//     this.sideLength = sideLength;
// }

// Shape.prototype.calcPerimeter = function () {
//     let per = this.sides * this.sideLength;
//     console.log(per);
//     return per;
// }

// function Square(sideLength) {
//     Shape.call(this, 'square', 4, sideLength);
// }

// Square.prototype = Shape.prototype;

// Square.prototype.calcArea = function () {
//     let ar = this.sideLength * this.sideLength;
//     console.log(ar);
//     return ar;
// }

// var square = new Square(5);
// square.calcArea();
// square.calcPerimeter();

class Triple {
    static customName = 'Tripler';
    static description = 'I triple any number you provide';

    static calculate(n=1) {
        return n * 3;
    }
}

class SquaredTriple extends Triple {
    static longDescription;
    static  description ='I square the triple of any number you provide';

    static calculate(n=1){
        return Triple.calculate(n) * Triple.calculate(n);
    }
}

console.log(Triple.description); // 'I triple any number you provide'
console.log(Triple.calculate()); // 3
console.log(Triple.calculate(6)); // 18

console.log(SquaredTriple.calculate(3)); // 81 (not affected by parent's instantiation)
console.log(SquaredTriple.description); // 'I square the triple of any number you provide'
console.log(SquaredTriple.longDescription); // undefined
console.log(SquaredTriple.customName); // tripler
