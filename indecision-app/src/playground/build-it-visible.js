console.log("App.js is running");

const app = {
    title: 'Visibility Toggle',
    text: 'Hey, this is the secret text',
    isVisible: false
};

const toggle = () => {
    app.isVisible = !app.isVisible;
    render();
}

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={toggle}>{app.isVisible ? 'Hide Details' : 'Show Details'}</button>
            <p>{app.isVisible ? app.text : ''}</p>
        </div>
    );

    ReactDOM.render(template, document.getElementById('app'));
}

render();