// *******************************************************************************************************************************
// spreadOperator...

// const first_obj = {
//     name: 'Yasir ',
//     class: 'xii',
//     nestedObj: {
//         prop: 'value',
//         students: true
//     }
// }

// const secondObj = {
//     ...first_obj.nestedObj,
//     class: 'developer',
//     nestedObj: {
//         ...first_obj.nestedObj, students: false
//     }

// }

// secondObj.nestedObj.prop = 'another value'
// console.log(first_obj)
// console.log(secondObj)

// ******************************************************************************************************************************

// destructuring(For Object)...

// const obj1 = {
//     name : 'yasir',
//     roll: 'my-023',
//     nestedObj : {
//         prop : 'value',
//         students: true
//     }
// }

// const {
//     name, roll, nestedObj: {students} 
// } = obj1
// console.log(name, roll, students)

// **************************************************************************************************************************
// destructuring(For Array)...

// const my_array = ['Muhammad Yasir Hussain', 'My_023', 'xii' ]
// const [name,roll,Class] = my_array
// console.log(name,roll,Class)

// ****************************************************************************************************************************

// restOperator...

// const my_obj ={
//     a : 10,
    // b : 20,
//     c : 30,
//     d : 40
// }
// const {a, c, ...rest} = my_obj
// console.log(a, c, rest)

// *****************************************************************************************************************************
// templeteLiterals...

// const my_obj ={
// name : 'yasir',
// profession : 'Computer Scientist'
// }

// const {name,profession} = my_obj;
// const message = `My Nmae is ${name} and my profession ${profession}`
// console.log(message)

// ********************************************************************************************************************************
// objectLiteralShortend...

// const name = "Muhammad Yasir Hussain"
// const profession = "Computer Scientist"

// const obj = {
//     name :name,
//     profession: profession
// }

// console.log(obj)

// **********************
// const obj ={
//     name,
//     profession,
// }
// console.log(obj)

// ***********************************************************************************************************************************

// TryCatch..

// function alertMyName(){
//     try{
//         alert("Muhammad Yasir ")

//     }catch(error){
//         console.log(error.message)

//     }
// }

// alertMyName();


// const obj1 ={
//     Name : "Yasir",
//     Class: "2nd year 3rd semester",
//     seat_no : "B19102106",
//     profession : {
//         profession_1 : "Full stack developer",
//         profession_2 : "Mern Stack developer"
//     }
// }

// const {Name,Class,seat_no,profession:{profession_2}} = obj1
// console.log(Name,Class,seat_no,profession_2)