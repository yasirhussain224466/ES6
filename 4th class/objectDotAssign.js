let obj1 = {
    fname: "muhammad"
}

let obj2 = {
    lname: "osama",
    nestedObject: {
        myValue: 'my value'
    }
}

// let newObj = Object.assign({}, obj1, obj2)

// newObj.nestedObject.myValue = "123456"

// console.log(newObj);
// console.log(obj2);



let newObj = Object.assign({}, obj2)
console.log(newObj, obj1)
