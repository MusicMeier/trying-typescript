// let num = 2;

type Mixed = string | number | boolean;


// if you put a ? after the key the type will become optional.

interface Person {
  name: string,
  age: number,
  hometown?: boolean
}

let arr: Mixed[];
let num: number;
let music: string;

let myObj:Person = {
  name: '',
  age: 29
};

num = 3;

myObj.age = 7;

function sum(a: number, b: number){
  return a + b
};

sum(1, 3);
