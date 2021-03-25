// *********************************************************************************
// 1- overwrite value while making new object using Object.assign
console.log("Overwrite value while making new object using Object.assign")
//CUSTOMER 1
const customer1 ={
    cust_Name : "Yasir Hussain",
    cust_Id : "10000",
    cust_Gender : "Male",
    cust_Maritial_Status: "Unmarried",
    Cust_City : "Karachi",
    Cust_Year_of_Birth: "2000"
}
let value1 = Object.values(customer1)

//CUSTOMER 2
const customer2 ={
    cust_Name : "Maryam",
    cust_Id : "20000",
    cust_Gender : "Female",
    // cust_Maritial_Status: "Married",
    // Cust_City : "Islamabad",
    // Cust_Year_of_Birth: "1999"
}
let value2 = Object.values(customer2)

//CUSTOMER OVERWRITE 
let customer = Object.assign({},customer1,customer2)

let value = Object.values(customer)
let key = Object.keys(customer)

console.log("Keys of Customer")
console.log(key)
console.log("All Values of Customer 1")
console.log(value1)
console.log("All Values of Customer 2")
console.log(value2)
console.log("Overwrite the values of Customer 1 with Customer 2")
console.log(value)


//************************************************************************** */
// Question # 2 Nested Terminay Operator
let symtoms = prompt("what is your disease symptom")
let fever = "fever"
function checking(){
 const type = prompt("What type of fever? (hot/cold)") 
 return type 
}
let hot ="hot"
let cold="cold"
const Medicine = symtoms == fever ? checking()==hot ? "Panadol" : "Panadol Extra" : "You should see a Doctor"
console.log(Medicine)

// **************************************************************************

// Question # 3: For/in and for/of loop??

// for/in - loops through the properties of an object (index)
// for/of - loops through the values of an iterable object 
// Example:

let Laptops = ['Asus', 'Apple', 'HP', 'Dell'];
let x;

for (x of Laptops) {    // For/of
  console.log((x ));
}

for (x in Laptops) {    //For/in
    console.log((x ));
  }

// *****************************************************************************//
// Question # 4:  What is arrow function?

// DEFINATION:
// An arrow function expression is a compact alternative to a traditional function expression,
// but is limited and can't be used in all situations.

// DIFFERENCE AND LIMITATIONS:
// 1. Does not have its own bindings to this or super, and should not be used as methods.
// 2. Does not have arguments, or new.target keywords.
// 3. Not suitable for call, apply and bind methods, which generally rely on establishing a scope.
// 4. Can not be used as constructors.
// 5. Can not use yield, within its body

// EXAMPLE:
let ArrowFuntion = (a, b) => {
    let chuck = 42;
    return a + b + chuck;
  }
console.log(ArrowFuntion(2,3))