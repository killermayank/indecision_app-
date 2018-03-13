import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



const user1 = {
    topName :"Indecision App",
    topSecondName :"This is some info",
    options: [],

};

const onformsubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option) {
        user1.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

const appRoot = document.getElementById('app');

const removefunc = () => {
    user1.options = [];
    render();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * user1.options.length);
    const option = user1.options[randomNum];
    alert(option);
}

const render = () => {
    const template = (
        <div>
            <h1>{user1.topName}</h1>
            <p>{user1.options.length >0 ? 'Here are your options':'No options'}</p>
            <button disabled={user1.options.length === 0} onClick={onMakeDecision}>What should you do ?</button>
            <button onClick={removefunc}>Remove all</button>
            <ol>
                {
                    user1.options.map((option) => <li key ={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onformsubmit}>
                <input type = "text" name = "option"/>
                <button>Add option</button>
            </form>
        </div>
    );
    ReactDOM.render(template,appRoot);
};

render();






