// ***********************************************************************************
// Question:1 How to unique, sort an array in ascending order?


let numArray = [22, 44, 553, 669, 88, 66, 3, 2, 6, 3, 7, 4, 2, 1, 5, 354, 13, 5, 353, 124];
// without Sort
console.log(numArray.sort());
numArray.sort((a, b) => {
  return a - b;
});
let newNumArray = [...new Set(numArray)]
// Sorted and Unique Numbers 
console.log(newNumArray)

// ************************************************************************************
//Question:2 Print values using for loop in the following sequence
// 1
// 12
// 123
// 1234
// 12345

let h = 1;
let v = 1;
let b = 2;
for (var i = 0; i < 5; i++) {
  for (var j = 0; j < h; j++) {
    console.log(v + " ")
    let a = v + "  " + b
    v = a
    b++
  }
}

// // *************************************************************************************
// /*Question 3: Sum the following number using for loop
// const num = 12345 (its number type)
// Output should be: 15 */

var val = prompt("Enter Numbers, that you want to calculate")
var v = parseInt(val[0])
for (let i = 1; i < val.length - 1; i++) {
    v = v + parseInt(val[i])
}

// console.log(v)
// //************************************************************************************** */
/*Question:4 Find the third highest number in array using Set, sort and reverse
const arr = [1,210,5,7,65,5,20,8,210,65];*/

const arr = [1,210,5,7,65,5,20,8,210,65];
let arrSorted = arr.sort((a,b) => {return a-b})
let arrSortedSet = [...new Set(arrSorted)]
let arrSortedSetReverse = arrSortedSet.reverse()
console.log(arrSortedSetReverse[2])





