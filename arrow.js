//function declaration
// function doubleIt(num){
//     return num * 2;
// }


//function expression
// const doubleIt = function myFun(num){
//     return num*2;
// }


//Apply ES6
// arrow function
const doubleIt = num => num*2;
const add = (x,y) => x+y;
const give5 = () => 5;

const doMath = (x,y) => {
    const sum = x+y;
    const diff = x-y;
    const result = sum * diff;
    return result;
}

const result = doubleIt (15);
const result1 = add(45,52);
const result2 = give5();
const result3 = doMath(500,50)
console.log(result3);