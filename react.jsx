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

componentWillUnmount() {
    clearInterval(this.timerID);
}


class Toggle extends React.Component {
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

  /**
   * 组件功能说明
FilterableProductTable：橙色，包含所有组件。
SearchBar：蓝色，接收用户输入。
ProductTable：绿色，基于用户输入显示和过滤数据集合。
ProductCategoryRow：青色，显示分类的标题。
ProductRow：红色，显示每款商品。
   */

class ProductCategoryRow extends React.Component {
    render() {
        const category = this.props.category;
        return (
            <tr>
                <th colSpan="2">
                {category}
                </th>
            </tr>
        );
    }
}

// bq. React拥有2种不同类型的模型数据（Model）：props和state。

import React from 'react';

const MyComponents = {
    DatePiceker: function DatePiceker(props) {
        return <div>Imagein a {props.color} datepicker here.</div>;
    }
}

function BlueDatePicker() {
    return <MyComponents.DatePiceker color="bule" />;
}

import React from 'react';
import { photoStory, VideoStory } from "./Python";

const components = {
    photo: PhotoStory,
    video: VideoStory
};
  
function Story(props) {
    const SpecificStory = components[props.storyType];
    reutrn <SpecificStory story={props.story} />;
}

/**
 * props对象扩展运算
 * 如果你的props是一个对象，可以考虑使用ES6的对象扩展运算符...，将所有的props一次性传入组件。
 */

 function Component1() {
     return <Hello firstName="Hank" lastName="Zen" />
 }

 function Component2() {
     const props = {firstName: 'hank', lastName: 'zen'};
     return <Hello {...props} />;
 }

 

 var player = {score: 1, name: 'Jeff'};

 var newPlayer = Object.assign({}, player, {score: 2});

 // or var newPlayer = {...player, score: 2};




 /**
  * tic tac
  */

  function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }
  
  class Board extends React.Component {
    renderSquare(i) {
      return (
        <Square
          value={this.props.squares[i]}
          onClick={() => this.props.onClick(i)}
        />
      );
    }
  
    render() {
      return (
        <div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        history: [
          {
            squares: Array(9).fill(null)
          }
        ],
        stepNumber: 0,
        xIsNext: true
      };
    }
  
    handleClick(i) {
      const history = this.state.history.slice(0, this.state.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
      squares[i] = this.state.xIsNext ? "X" : "O";
      this.setState({
        history: history.concat([
          {
            squares: squares
          }
        ]),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext
      });
    }
  
    jumpTo(step) {
      this.setState({
        stepNumber: step,
        xIsNext: (step % 2) === 0
      });
    }
  
    render() {
      const history = this.state.history;
      const current = history[this.state.stepNumber];
      const winner = calculateWinner(current.squares);
  
      const moves = history.map((step, move) => {
        const desc = move ?
          'Go to move #' + move :
          'Go to game start';
        return (
          <li key={move}>
            <button onClick={() => this.jumpTo(move)}>{desc}</button>
          </li>
        );
      });
  
      let status;
      if (winner) {
        status = "Winner: " + winner;
      } else {
        status = "Next player: " + (this.state.xIsNext ? "X" : "O");
      }
  
      return (
        <div className="game">
          <div className="game-board">
            <Board
              squares={current.squares}
              onClick={i => this.handleClick(i)}
            />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol>{moves}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(<Game />, document.getElementById("root"));
  
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  

import axios from 'axios'
import qs from 'query-string'

class BaseModule {
  constructor() {
    this.$http = axios.create({
      baseUrl: 'http://api'
    })
    this.dateMethodDefaults = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      transformRequest: [function (data) {
        return qs.stringify(data)
      }]
    }
  }

  get (url, config = {}) {
    return this.$http.get(url, config)
  }

  post (url, data = undefined, config = {}) {
    return this.$http.post(url, data, { ...this.dataMethodDefaults, ...config })
  }

  put (url, data = undefined, config = {}) {
    return this.$http.put(url, data, {...this.dataMethodDefaults, ...config })
  }

  delete (url, config = {}) {
    return this.$http.delete(url, config)
  }
}

export default BaseModule



class Button extends React.Component {
  // 本质是将一个箭头函数赋值给一个变量
  handleClick = () => {
    console.log(this);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
      onClick
      </button>
    );
  }
}



class Button extends React.Component {
  handleClick() {
    console.log(this);
  }

  render() {
    return (
      // 这样的书写语法可以确保this正确的绑定到handleClick
      <button onClick={(e) => this.handleClick(e)} > 
      onClick
      </button>
    );
  }
}



async function timeout (ms) {
  await new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

async function asyncConsole (value, ms) {
  await timeout(ms)
  console.log(value)
}
aynyncConsole('hello', 1000)

/**
 * BFC：块级格式化上下文，容器里面的子元素不会在布局上影响到外面的元素，反之也是如此(按照这个理念来想，只要脱离文档流，肯定就能产生 BFC
 */

location / {
  if ($request_method = 'OPTIONS') {
    add_header 'Access-Control-Allow-Origin' '*';  
    add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS'; 
    add_header 'Access-Control-Allow-Credentials' 'true';
    add_header 'Access-Control-Allow-Headers' 'DNT, X-Mx-ReqToken, Keep-Alive, User-Agent, X-Requested-With, If-Modified-Since, Cache-Control, Content-Type';  
    add_header 'Access-Control-Max-Age' 86400;  
    add_header 'Content-Type' 'text/plain charset=UTF-8';  
    add_header 'Content-Length' 0;  
    return 200;  
  }
}


/**
 * http协议无状态中的 状态 到底指的是什么？！

【状态】的含义就是：客户端和服务器在某次会话中产生的数据

那么对应的【无状态】就意味着：这些数据不会被保留

通过增加cookie和session机制，现在的网络请求其实是有状态的
在没有状态的http协议下，服务器也一定会保留你每次网络请求对数据的修改，但这跟保留每次访问的数据是不一样的，保留的只是会话产生的结果，而没有保留会话
 */




// Last-Modified/If-Modified-Since 与 ETag/If-None-Match

// State and Lifecycle

function Clock(props) {
  return (
    <div>
      <h1>Hello, world</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

function tick() {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);



class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello world</h1>
        <h2>It is {this.state.date.toLocaleTimeString}</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);



function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('the link was clicked.');
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}


class LoggingButton extends React.Component {
  handleClick = () =>{
    console.log('this is :' , this);
  }

  render() {
    return (
      <button onClick={this.handleClick)>
        Click me
      </button>  
    );
  }
}



{unreadMessages.length > 0 &&
  <h2>
    You have {unreadMessages.length} unread messages.
  </h2>
}



function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // Correct! Key should be specified inside the array.
    <ListItem key={number.toString()}
              value={number} />

  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);


// Forms

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('a name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

<label>
  Upload file:
  <input
    type="file"
    ref={input => {
      this.fileInput = input;
    }}
  />
</label>



// Lifting State Up

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

function toCelsius(fahrenheit) {
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
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature}
               onChange={this.handleChange} />
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

  handleCelsiusChange(temperature) {
    this.setState({scale: 'c', temperature});
  }

  handleFahrenheitChange(temperature) {
    this.setState({scale: 'f', temperature});
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange} />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} />
        <BoilingVerdict
          celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

ReactDOM.render(
  <Calculator />,
  document.getElementById('root')
);


