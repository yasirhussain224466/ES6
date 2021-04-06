class Msg {

    constructor(name, age, year) {
        this.name = name;
        this.age = age;
        this.year = year
    }

    name = "osama"

    static value = 'this is my value'

    static printName() {
        console.log('My name is: ', this.name)
    }

}

const newObj = new Msg("basit", 24, 2021);


// console.log(newObj.name);
// console.log(Msg.value);

class AnotherMsg extends Msg {
    constructor(name, age, year, profession) {
        super(name, age, year)
        this.profession = profession
    }
}

const myObj = new AnotherMsg("osama", 31, 2021, 'YouTuber');
const myObj1 = new AnotherMsg("Sir Ali", 18, 2021, 'Master');
console.log(myObj);
console.log(myObj1);


