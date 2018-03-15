class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.title = 'Visibility Toggle';
        this.text = 'Hey, this is the secret text'
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            isVisible: false
        };
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                isVisible: !prevState.isVisible
            };
        });
    }

    render() {
        return (
            <div>
                <h1>{this.title}</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.isVisible ? 'Hide Details' : 'Show Details'}</button>
                <p>{this.state.isVisible && this.text}</p>
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));