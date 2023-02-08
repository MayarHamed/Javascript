// using class

// class Person {
//     constructor(fullName, money, sleepMode, healthRate) {
//         this.name = fullName;
//         this.money = money;
//         this.sleepMode = sleepMode;
//         this.health = healthRate;
//     }
//     sleep(hours) {
//         if (hours < 7) {
//             return "tired";
//         }
//         if (hours > 7) {
//             return "lazy";
//         }
//         else {
//             return "happy";
//         }
//     }
//     eat(meals) {
//         if (meals == 3) {
//             this.health = 100;
//         }
//         if (meals == 2) {
//             this.health = 75;
//         }
//         if (meals == 1) {
//             this.health = 50;
//         }
//     }
//     buy(item) {
//         this.money = this.money - (item * 10);
//     }
// }

// const p1=new Person("mayar", 1000, "happy", 100);
// p1.buy(2);
// console.log(p1);
// console.log(p1.money);
// console.log(p1.sleep(5));
// console.log(p1.eat(3))


//using constructor function

// function Person(fullName, money, sleepMode, healthRate) {
//     this.name = fullName;
//     this.money = money;
//     this.sleepMode = sleepMode;
//     this.health = healthRate;
//     this.sleep = function (hours) {
//         if (hours < 7) {
//             return "tired";
//         }
//         if (hours > 7) {
//             return "lazy";
//         }
//         else {
//             return "happy";
//         }
//     }
//     this.eat = function (meals) {
//         if (meals == 3) {
//             this.health = 100;
//         }
//         if (meals == 2) {
//             this.health = 75;
//         }
//         if (meals == 1) {
//             this.health = 50;
//         }
//     }
//     this.buy = function (item) {
//         this.money = this.money - (item * 10);
//     }
// }

//using constructor function with prototype

function Person(fullName, money, sleepMode, healthRate) {
    this.name = fullName;
    this.money = money;
    this.sleepMode = sleepMode;
    this.health = healthRate;
}
Person.prototype.sleep = function (hours) {
    if (hours < 7) {
        return "tired";
    }
    if (hours > 7) {
        return "lazy";
    }
    else {
        return "happy";
    }
}
Person.prototype.eat = function (meals) {
    if (meals == 3) {
        this.health = 100;
    }
    if (meals == 2) {
        this.health = 75;
    }
    if (meals == 1) {
        this.health = 50;
    }
}
Person.prototype.buy = function (item) {
    this.money = this.money - (item * 10);
}

// const p1=new Person("mayar", 1000, "happy", 100);
// p1.buy(2);
// console.log(p1);
// console.log(p1.money);
// console.log(p1.sleep(5));
// console.log(p1.eat(3))

// factory OLOO

// const Person = {
//     init(fullName, money, sleepMode, healthRate) {
//         this.name = fullName;
//         this.money = money;
//         this.sleepMode = sleepMode;
//         this.health = healthRate;

//         this.sleep = function (hours) {
//             if (hours < 7) {
//                 return "tired";
//             }
//             if (hours > 7) {
//                 return "lazy";
//             }
//             else {
//                 return "happy";
//             }
//         }
//         this.eat = function (meals) {
//             if (meals == 3) {
//                 this.health = 100;
//             }
//             if (meals == 2) {
//                 this.health = 75;
//             }
//             if (meals == 1) {
//                 this.health = 50;
//             }
//         }
//         this.buy = function (item) {
//             this.money = this.money - (item * 10);
//         }
//         return this;
//     }
// }

// const p1 = Object.create (Person).init("mayar", 1000, "happy", 100);
// p1.buy(2);
// console.log(p1);
// console.log(p1.money);
// console.log(p1.sleep(5));
// console.log(p1.eat(3))

//using factory function

// function Person(fullName, money, sleepMode, healthRate) {
//     return {
//         fullName,
//         money,
//         sleepMode,
//         healthRate,
//         sleep(hours) {
//             if (hours < 7) {
//                 return "tired";
//             }
//             if (hours > 7) {
//                 return "lazy";
//             }
//             else {
//                 return "happy";
//             }
//         },
//         eat(meals) {
//             if (meals == 3) {
//                 this.health = 100;
//             }
//             if (meals == 2) {
//                 this.health = 75;
//             }
//             if (meals == 1) {
//                 this.health = 50;
//             }
//         },
//         buy(item) {
//             this.money = this.money - (item * 10);
//         }
//     }
// }
// const p1= Person("mayar", 1000, "happy", 100);
// p1.buy(2);
// console.log(p1);
// console.log(p1.money);
// console.log(p1.sleep(5));
// console.log(p1.eat(3))