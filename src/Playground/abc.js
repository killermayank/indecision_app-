// Argument is removed in the es6

import ReactDOM from "react-dom";

function square(x, y) {
    console.log(arguments);
    return x+y;
}


console.log(square(2,3));

const add = (a,b) => {
    return a+b;
}

console.log(add(1,2));
/*

var user = {
    name: 'Andrew',
    age : 26,
    cities :['area', 'bafadf', 'sadfasdf', 'asdfasd'],

    printPlacedLived (){

        const cities2 = this.cities.map((city)=> {
            return city + '!';
        });
        return cities2;

    }
};

console.log(user.printPlacedLived());
*/


var user2 = {
    name2: 'Andrew',
    age2 : 26,
    cities2 :['area', 'bafadf', 'sadfasdf', 'asdfasd'],

    printPlacedLived (){
        return this.cities2 .map((city)=> city + '!');
    }
};

console.log(user2.printPlacedLived());

// Challenge problem


const multiplier = {
    arr: [10,20,30],
    variable: 2,
    multiply() {
        return this.arr.map((number) => number* this.variable);
    }
};

console.log(multiplier.multiply)


/*
const user = {
    name: 'Mani',
    age: 26,
    location: 'Australia'
};


function getlocation(location){
    if(location) {
        return <p>Location:{location}</p>;
    }
}
const templateTwo = (
    <div>
        <h1>{user.name? user.name : 'Anonymous'}</h1>
        <p>{(user.age && user.age>=18) && <p>Age:{user.age}</p>}</p>
        {getlocation(user.location)};
    </div>
);

*/

// Create a template Two var JSX expression
// div
// h1-> Andrew Mead
// p->Age:26
//p-> Location :  Australia
//Render templateTwo instead of template



let count = 0;

const addOne = () => {
    count++;
    renderCounterApp();
}

const minusOne = () => {
    count--;
    renderCounterApp();
}


const reset = () =>{
    count = 0;
    renderCounterApp();
}


const appRoot = document.getElementById('app');


const renderCounterApp =() => {
    const templateTwo = (<div>
            <h1>Count :{count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick = {reset}>Reset</button>
        </div>
    );
    ReactDOM.render(templateTwo,appRoot);
};

renderCounterApp();