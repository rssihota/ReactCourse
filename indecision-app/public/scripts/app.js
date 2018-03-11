'use strict';

console.log("App.js is running");

var app = {
    title: 'Visibility Toggle',
    text: 'Hey, this is the secret text',
    isVisible: false
};

var toggle = function toggle() {
    app.isVisible = !app.isVisible;
    render();
};

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        React.createElement(
            'button',
            { onClick: toggle },
            app.isVisible ? 'Hide Details' : 'Show Details'
        ),
        React.createElement(
            'p',
            null,
            app.isVisible ? app.text : ''
        )
    );

    ReactDOM.render(template, document.getElementById('app'));
};

render();
