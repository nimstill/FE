function auth(user) {
    return user.name + ' ' + user.password;
}

const user = {
    name: 'hank',
    password: '123'
};

const element = (
    <h1>
        User Info: {auth(user)}.
    </h1>
);

ReactDOM.render(
    element,
    document.getElementById('app')
);


function pure(firstname, lastname) {
    return firstname + lastname;
}

function impure(firstname, lastname) {
    firstname = "nothing";   //not
}


### 向类组件添加state

class Clock extends React.Component {
    render() {
        return (
            <div>
            <h1>Hello,world!</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}


class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    render() {
        return (
            <div>
            <h1>Hello,world!</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}


ReactDOM.render(
    <Clock />,
    document.getElementById('app')
);

componentDidMount() {
    this.timerID = setINterVal(
        () => this.tick(),
        1000
    );
}

compinentWillUnmount() {
    clearInterval(this.timerID);
}


class Toggle extends React.Compinent {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
            {this.state.isToggleOn ? 'open':'off'}
            </button>
        );
    }
}

ReactDOM.render(
    <Toggle />,
    document.getElementById('app')
);