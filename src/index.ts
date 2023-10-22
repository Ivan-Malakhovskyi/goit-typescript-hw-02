//! Всі типізації виносяться нагору

//* type

// type User = {
//   name: string,
//   age: number | string,
// }

// type eventType = 'lesson' | 'deadline'

// const numbers: number[] = [1, 2, 4, 5, 6]
// numbers.push(6)

// const user: {name: string, age: number} = {
//   name: 'Ivan',
//   age: 21
// }

// user.name = 'Bob'
// user.age = 10

// const user: User = {
//   name: 'Andrey',
//   age: 7,
// }

// user.name = 'Bob'
// user.age = ''

//* | - фбо

// const evt: eventType = 'deadline'

//? any

// let age: any = 20
// age = 'Anny'

//? unknown

// let firstName: unknown = 'fjfj'

// firstName = 10
// firstName.Math.pow()

//? enum name with UPPER CASE   ======   набір констант. Enum це числа або рядки

enum Constant {
  USER = "USER",
  ADMIN = "ADMIN",
}

// type sizes = 'small' | 'medium' | 'large'

// enum Sizes  {
//     small = "sm",
//     medium = 'md',
//     large = 'lg'
// }

// const btn: sizes = 'small'
// const btn2: Sizes = Sizes.medium

//* КОнструкція const enum ===
//* const enum видаляється під час транспіляції та не створює додаткового об'єкта в JavaScript.
//! const enum не можна використовувати у виразах, які вимагають виконання під час виконання

// const enum Test {
//   A = 1,
//   B = 2,
// }

// for (let item in Test) {
//   console.log(item);
// }

const enum Http {
  OK = 200,
  BadRequest = 400,
  NotFound = 404,
}

const status1 = Http.OK;
console.log(status1);

//? tuple

let tupleType: [string, boolean];
tupleType = ["", false];

let tuple: [string, ...number[]];
tuple = ["s", 1, 2, 3, 4, 5];

//? Union Type

let mix: string | boolean | number;

type Sample1 = {
  leg: 4;
  bark: () => void;
};

type Sample2 = {
  fins: 2;
  swim: () => void;
};

let pet: Sample1 | Sample2;

//? Intersection Type   символ & для створення типу intersection.

// type Employee = {
//   name: string;
//   id: number;
// };

// type Manager = {
//   employees: Employee[];
// };

// type CEO = Employee & Manager;

//*об'єкт типу CEO повинен містити всі властивості, визначені в Employee та Manager.

//? Literal Type

type onlyTwo = "one" | "two";

//?

//! functions

// const foo = (num1: number, num2: number): string => {
//     return `${num1 }+ ${num2}`
// }
// console.log(foo(2,5))

//* Коли функція нічого не повертає

// const foo = (num1: number, num2: number):void => {
// console.log(num1,num2)
// }

// foo(7,1)

// type User = {
//      name: string
// }

// const foo = (user: User ): void => {
//     console.log(`HELLO ${user.name}`)
// }

// type UserConstructor = {
//   name: string;
//   age: number;
//   hobby: string;
// };

// const foo = (name: string, age: number, hobby: string): UserConstructor => {
//   return { name, age, hobby };
// };

// type Car = {
//   color: string;
//   price: number;
//     currency: string;
//     start: () => {}
// };

// const Car = {
//   color: "red",
//   price: 1000,
//   currency: "USD",
//   start() {
//     console.log("object");
//   },
// }

// type USER = {
//   name: string;
//   phone: number;
//   hobbys: Array<string>;
// };

// type User = {
//   name: string;
//   age: number;
//   role?: string; //* Не обов'язкове поле
// };

// const user: User = {
//   name: "Ivan",
//   age: 12,
// };

// const admin: User = {
//   name: "Andrey",
//   age: 20,
//   role: "Admin",
// };

// let isDone: boolean = false;

// const user1 = (num: number):void => {}

//! never коли функція ніколи не закінчується та нічого не повертає

let value: never;

// let sam: { name: string; age: number } = {
//   name: "Am",
//   age: 8,
// };

// type User2 = {
//   name: string;
//   age: number;
// };

// let user3: User2 = {
//   name: "Ivan",
//   age: 10,
// };

// interface User3 {
//   name: string;
//   age: number;
// }

// let numbers: Array<number> = [1, 2, 3, 4];

// let users: {
//   name: string;
//   age: number;
// }[] = [{ name: "Tom", age: 30 }];

// type User4 = {
//   name: string;
//   age: number;
// };

// let users2: User4[] = [{ name: "", age: 8 }];

// let anything: any[];

// anything = [false, undefined, "", 8, {}];

//* Custom types

type Coordinate = [number, number];

type USer = {
  id: Coordinate;
};

//! Difference between TYPE & INTERFACE

interface AnimalA {
  name: string;
}

interface AnimalA {
  age: number;
}

let dog: AnimalA = {
  name: "",
  age: 0,
};

type AnimalB = {
  name: string;
};

//*==============================================

//intersection &

type AnimalName = {
  name: string;
};

type AnimalAge = {
  age: number;
};

// type Animal = AnimalName & AnimalAge;

// let cat: Animal = {
//   name: "",
//   age: 9,
// };

//* ================================================

interface Animal {
  name: string;
}

interface Dog extends Animal {
  bark: string;
}
class MyDog implements Dog {
  name: "kafa";
  bark: "Woof";
}

//* Class 'OtherDog' incorrectly implements interface 'Dog'.
//* Property 'name' is missing in type 'OtherDog' but required in type 'Dog'.
// class OtherDog implements Dog {
//   bark: "wooffk";
// }
