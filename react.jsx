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


//### 向类组件添加state

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
        /** 
         * constructor()构造函数当中，this.handleClick.bind(this)的含义。
         * 使用bind()是为了将类组件的this作用域绑定至指定函数，从而方便的在该函数内部使用this操作React类组件上的其它方法。
         * 
         */

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

function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return (
        <div>
            <h1>Hello!</h1>
            {unreadMessages.length > 0 &&
              <h2>
                  YOu have {unreadMessages.length} unread Messages.
              </h2>
            }
        </div>
    );
}

const messages = ['React', 'Re: react']
ReactDOM.render(
    <Mailbox unreadMessages={messages} />,
    document.getElementById('app')
);


 class Page extends React.Component {
     constructor(props) {
         super(props);
         this.state = {showWarning: true}
         this.handleToggleClick = this.handleClick.bind(this);
     }

     handleToggleClick() {
        this.setState(prevState => ({
          showWarning: !prevState.showWarning
        }));
      }
      render() {
        return (
          <div>
            <WarningBanner warn={this.state.showWarning} />
            <button onClick={this.handleToggleClick}>
              {this.state.showWarning ? '隐藏' : '显示'}
            </button>
          </div>
        );
    }
 }
 ReactDOM.render(
     <Page />
     document.getElementById('app')
 );

const numbers = [1, 1, 1, 1, 1];
const doubled = numbers.map((number) => number * 2);

const listItems = numbers.map((number) => 
    <li>{number}</li>
);
ReactDOM.render(
    <ul>{listItems}</ul>,
    document.getElementById('app')
);

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      <li>{number}</li>
    );
    return {
        <ul>{listItems}</ul>
    };
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
    <NumberList numbers={numbers} />,
    doucment.getElementById('app')
);


