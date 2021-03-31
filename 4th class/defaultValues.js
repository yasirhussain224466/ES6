// function myName(name = "osama") {
//     let msg = `Welcome ${name}`
//     console.log(msg)
// }

// myName("waqas");


// function printValues({name, profession} = {}) {
//     if (!name || !profession) {
//         return alert('please provide valid object')
//     }
//     console.log(name, profession)
// }

// printValues();

function printValues({name = "osama", profession = "youtuber", ...rest} = {}) {
   
    console.log(name, profession, rest)
}

printValues({});
printValues();
printValues({name: 'basit', profession: 'full-stack engineer', value1: '1', value2: "2"});