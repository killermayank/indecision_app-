class Person {
    constructor(name ='Anonymous', age = 0){
        this.name = name
        this.age = age;
    }
    getGreeting() {
        return `Hi, I am ${this.name}`;
    }
    getDescription() {
        return `${this.name} is ${this.age} years old`;
    }
}

class student extends Person{
    constructor(name,age,major){
        super(name,age);
        this.major = major;
    }
    hasmajor () {
        return !!this.major;
    }

    getDescription(){
        let description = super.getDescription();

        if(this.hasmajor()){
            description += `Their major is ${this.major}`;
        }
        return description;
    }

}

class traveler extends Person{

    constructor(name,age,homelocation) {
        super(name,age);
        this.homelocation = homelocation;
    }
    getGreeting (){
        let Greeting = super.getGreeting();
        Greeting += `I am visiting from this ${this.homelocation}`;
        return Greeting;
    }

}

const me = new traveler('Mayank Sharma',26,'Computer Science');
console.log(me.getGreeting());


const other = new traveler();
console.log(other.getGreeting());

