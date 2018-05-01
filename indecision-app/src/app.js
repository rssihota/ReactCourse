//import './utils.js'
// import subtract, { square, add } from './utils.js';

// console.log('app.js is running');
// console.log(square(4));
// console.log(add(1, 1));
// console.log(subtract(100, 81));

// person.js
// named export isAdult(18) - true if adult, otherwise false
// named export canDrink(18) - true if >= 21, otherwise false

//import isAdult and canDrink
//use both printing result to the console

// import isSenior, {isAdult, canDrink} from './person.js';
// console.log(isAdult(18));
// console.log(isAdult(17));
// console.log(canDrink(18));
// console.log(canDrink(19));
// console.log(isSenior(65));
// console.log(isSenior(64));

// install --> import --> use
import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp.js';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
