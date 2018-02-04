'use strict';

console.log("App.js is running");

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer'
};

// JSX - JavaScript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'p',
        null,
        app.subtitle
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);