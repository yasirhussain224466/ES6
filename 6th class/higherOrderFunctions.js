// function outerFunction(outerValue) {
//     return function innerFunctoin(innerValue) {
//         console.log('This is outer function value', outerValue)
//         console.log('This is inner function value', innerValue)
//     }
// }

// let newFunction = outerFunction('Waqas');
// newFunction('Ahsan');
// console.dir(newFunction)

// let myName = "osama";

// function printMyName() {
//     console.log(myName);
// }

// printMyName();
// console.dir(printMyName)


// let msg = "hello world";

// function pureFunc(value) {
//     let output = value.toUpperCase()
//     return output;
// }

// function impureFunction() {
//     msg = msg.toUpperCase()
//     console.log(msg)
// }

// impureFunction();
// console.log(msg)

// console.log(pureFunc(msg))
// console.log(msg)


let name = "basit";

function printName(name) {
    console.log(name);
}


name = "waqas";
printName(name);