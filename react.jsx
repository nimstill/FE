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
    // 列表循环中的`key`是一个特殊的字符串属性
    <li key={number.toString()}>
      {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
    <NumberList numbers={numbers} />,
    doucment.getElementById('app')
);


const todoItems = todos.map((todo) =>
    <li key={todo.id}>
        {todo}
    </li>
);

function NumberList(props) {
    const numbers = props.numbers;
    return (
        <ul>
            {numbers.map((number) =>
            <ListItem Key={number.toString()} value={number} />
            )}
        </ul>
    );
}


//状态提升

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>boling</p>;
    }
    return <p>noboling</p>;
}


class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleVhange = this.handleChange.bind(this);
        this.state = {temperature: ''};
    }

    handleChange(e) {
        this.setState({temperature: e.target.value});
    }

    render() {
        const temperature = this.state.temperature;
        return (
          <fieldset>
            <legend>请输入摄氏温度：</legend>
            <input
              value={temperature}
              onChange={this.handleChange} />
            <BoilingVerdict
              celsius={parseFloat(temperature)} />
          </fieldset>
        );
      }
}

unction toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }
  function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }



  function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }

    //todo: is that so?
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }


  tryConvert('abc', toCelsius); // 返回空字符串
  tryConvert('10.22', toFahrenheit); // 返回'50.396'

/**
 *  完整Demo
React当中，多个组件之间state的共享，需要将这些state放置到共同的父级组件，这种方式被称为state状态提升。
这个例子中，我们需要将TemperatureInput组件里需要共享的state移动到Calculator组件内，然后通过TemperatureInput
组件上的props属性向下分发这些共享数据，最终实现两个TemperatureInput组件内的输入值的同步更新。
 */


class TemperatureInput extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
      // 调用父组件通过props传入进来的事件处理函数，从而实现在子组件更新父组件的state
      this.props.onTemperatureChange(e.target.value);
    }
    render() {
      const temperature = this.props.temperature;
      const scale = this.props.scale;
      return (
        <fieldset>
          <legend>Enter temperature in {scaleNames[scale]}:</legend>
          // 当输入域的值发生变化时，触发本组件内的handleChange事件处理函数
          <input value={temperature} onChange={this.handleChange} />
        </fieldset>
      );
    }
  }

  class Calculator extends React.Component {
    constructor(props) {
      super(props);
      this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
      this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
      this.state = {temperature: '', scale: 'c'};
    }
    // 通过props传递给子组件的事件处理函数，让子组件具备修改父组件state的能力
    handleCelsiusChange(temperature) {
      this.setState({scale: 'c', temperature});
    }
    handleFahrenheitChange(temperature) {
      this.setState({scale: 'f', temperature});
    }
    render() {
      const scale = this.state.scale; // 温度单位
      const temperature = this.state.temperature; // 温度值
      const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature; // 摄氏温度
      const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature; // 华氏温度
      return (
        <div>
          <TemperatureInput scale="c" temperature={celsius}
             onTemperatureChange={this.handleCelsiusChange} />
          <TemperatureInput scale="f" temperature={fahrenheit}
             onTemperatureChange={this.handleFahrenheitChange} />
          <BoilingVerdict celsius={parseFloat(celsius)} />
        </div>
      );
    }
  }


  //组合与继承

  function Box(props) {
    return (
      <div className="box">
        <div className="left"> {props.left} </div>
        <div className="right"> {props.right} </div>
      </div>
    );
  }
  function App() {
    return (
      <Box left={<Contacts />} right={<Chat />} />
    );
  }

  