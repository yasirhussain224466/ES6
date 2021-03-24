let bookBank = {
    books: {
        Science: {
            book1: "Physics",
            book2: "Chemistry",
            book3: "Mathematics",
            book4: "biology",
        },
        ComputerScience: {
            book5: "Java",
            book6: "JavaScript",
            book7: "Python",
            book8: "C#",
            book9: "C++"
        },
        Commerce: {
            book10: "Accountancy",
            book11: "Business Studies",
            book12: "Economics"
        }
    }

}

// Destructuring
let { books: { Science: { book1, book2, book3, book4 }, ComputerScience: { book5, book6, book7, book8, book9 }, Commerce: { book10, book11, book12 } } } = bookBank
//obj Key
let { books: { Science } } = bookBank
let Keys1 = Object.keys(Science)
console.log("Science book's key")
console.log(Keys1)//Science

let { books: { ComputerScience } } = bookBank
let Keys2 = Object.keys(ComputerScience)
console.log("ComputerScience book's key")
console.log(Keys2)//ComputerScience

let { books: { Commerce } } = bookBank
let Keys3 = Object.keys(Commerce)
console.log("Commerce book's key")
console.log(Keys3)//ComputerScience

//Obj Value
const arry = [book1, book2, book3, book4, book5, book6, book7, book8, book9, book10, book11, book12]
let ScienceBooks = []
let ComputerScienceBook = []
let CommerceBook = []
for (var i = 0; i < arry.length; i++) {
    if (i < 4) {
        ScienceBooks.push(arry[i])
    }
    else if (i < 9 && i > 3) {
        ComputerScienceBook.push(arry[i])
    }
    else {
        CommerceBook.push(arry[i])
    }
}
console.log("Science book's Value")
console.log(ScienceBooks)
console.log("Computer Science book's Value")
console.log(ComputerScienceBook)
console.log("Commerce book's Value")
console.log(CommerceBook)
