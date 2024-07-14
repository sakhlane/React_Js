console.log('welcome to React  js ');

// about var let and const 

// var is global scope and also functional scope 

// var hello = "hello string ";
console.log(hello);

// example for function scope 

function hello(){
    // this insideFunc not be exicuted ouside of the function block 
    var insideFunc = "inside function";
    console.log(insideFunc);
}
hello();
// this indieFunc same name shoud be belongs to the global scope so this was exicute 
var insideFunc = "insideFuncVarOutsideOfFunction";
console.log(insideFunc);
// var outsideFunc = insideFunc;
// console.log(outsideFunc)

// var block scope 
{
    var insideBlock = "variable inside of Block scope";
}
// this shoud be exicute because var is not block scope 
console.log(insideBlock); 

// ------------------------ let key word 

// let is block scope 
// /using block scope 

{
    let letInsideBlock = "inside block scope ";
    console.log(letInsideBlock);  //this prints inside block scope
}
// console.log(letInsideBlock); // this prints not defined because of let is block scope 
let letOutSideBlock = "let keyword outside block";
console.log(letOutSideBlock); 

// ------------const keyword

// it is a constant keyword used for constant values
const constExample = 'constant string ';
console.log(constExample);

{
    const constInBlock = "const in block"
}
// console.log(constInBlock)    ;

// -------------------------- concluesion ---------
/*
    var  -> redeclare and reinitialize *function scope 
    let  -> not redeclare but re initialize *block scope
    const -> not redelare and not reinitialize *block scope 
*/

// --------------- Arrow Functions 
const arrowFunc = () => {
    console.log('arrow function')
}

arrowFunc();

// if returns single statement then not to use {}
 const addFunc = (a , b) => a + b ;
 console.log(addFunc(5,10));

//  --------Spread Oparator 
// using Array
const myArr = [1,2,3,4,5];
const myArr2 = [8,7,9,10]
console.log(...myArr, ...myArr2);

// using object 
const myObj = {
    'name' : 'sakhlane',
    'place':'sira '
}

console.log({...myObj});

// rest params
const restParam = (...param) => {
    console.log(param)
}
restParam(1,2,3,4,5,6);

// destructuring

let dArray = [ 1,2,3,4,5,8,9,0];
const   [a,b,c] = dArray;
  console.log(a,b,c);

let dObj = { 'name' : 'sakhlane' , 'age' : '27'};
const  {name,age} = dObj;
console.log(name,age)

//   module export and import 

let myName = "sakhlane pasha ";
export {myName};

