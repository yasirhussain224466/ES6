const arr = [1,2,3,4,1,2,5,46,48,5,7];

const newSet = new Set(arr);

// console.log(newSet);

newSet.add(10);

// console.log(arr);
// console.log(newSet);


newSet.delete(46);

for (let i of newSet) {
    console.log(i)
}

const newArray = [...newSet].sort()
console.log('Newly creted array: ', newArray)