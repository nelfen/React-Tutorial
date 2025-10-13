import { useState, Component } from 'react';

//props & 상태 끌어올리기
function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(3);

  const incrementCounter = () => {
    setCounter((prev) => {
      return prev + 1;
    });
  };

  const decrementCounter = () => {
    setCounter((prev) => {
      return prev - 1;
    });
  };

  const setCounterNumber = () => {
    setCounter(inputValue);
  };

  return (
    <>
      <Count counter={counter} />
      <PlusBtn incrementCounter={incrementCounter} />
      <MinusBtn decrementCounter={decrementCounter} />
      <CounterInput
        inputValue={inputValue}
        setInputValue={setInputValue}
        setCounterNumber={setCounterNumber}
      />
    </>
  );
}

function CounterInput({ inputValue, setInputValue, setCounterNumber }) {
  return (
    <>
      <input
        type="number"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button onClick={setCounterNumber}>입력</button>
    </>
  );
}

function PlusBtn({ incrementCounter }) {
  return <button onClick={incrementCounter}>+</button>;
}

function MinusBtn({ decrementCounter }) {
  return <button onClick={decrementCounter}>-</button>;
}

function Count({ counter }) {
  return <div>counter : {counter}</div>;
}

// class App extends Component {
//   state = { counter: 0 }

//   incrementCounter = () => {
//     this.setState({counter: this.state.counter + 1})
//   }

//   decrementCounter = () => {
//     this.setState({counter: this.state.counter - 1})
//   }

//   render() {
//     return (
//       <>
//         <Count counter={ this.state.counter } />
//         <PlusBtn incrementCounter={this.incrementCounter} />
//         <MinusBtn decrementCounter={this.decrementCounter} />
//       </>
//     );
//   }
// }

// class PlusBtn extends Component {
//   render() {
//     return (
//     <button onClick={this.props.incrementCounter}>+</button>
//   );
//   }
// }

// class MinusBtn extends Component {
//   render() {
//     return (
//     <button onClick={this.props.decrementCounter}>-</button>
//   );
//   }
// }

// class Count extends Component {
//   // constructor(props) {
//   //   super(props);
//   // }
//   render() {
//     return <div>counter: {this.props.counter}</div>;
//   }
// }

//상태 변경 특징
function App() {
  const [array, setArray] = useState([1, 2, 3]);

  const handler = () => {
    const newArray = array.slice();
    // const newArray = [...array];
    console.log(newArray);
    newArray.push(5);
    setArray(newArray);
  };

  return (
    <>
      array : [{array.join(", ")}]
      <br />
      <button onClick={handler}>상태 업데이트!</button>
    </>
  );
}

export default App;
