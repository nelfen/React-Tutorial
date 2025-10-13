import { useState, Component } from 'react';

//Count
function Count({ counter }) {
  return <div>counter : {counter}</div>;
}

//PlusBtn
function PlusBtn({ incrementCounter }) {
  return <button onClick={incrementCounter}>+</button>;
}

//MunusBtn
function MinusBtn({ decrementCounter }) {
  return <button onClick={decrementCounter}>-</button>;
}

//CounterInput
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

//StateLifting
function FunctionalStateLifting() {
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

// class Count extends Component {
//   // constructor(props) {
//   //   super(props);
//   // }
//   render() {
//     return <div>counter: {this.props.counter}</div>;
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

// class ClassStateLifting extends Component {
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

export default function StateLifting() {
    return (
        <>
            <h2>2-2. Props & 상태 끌어올리기</h2>
            <FunctionalStateLifting />
        </>
    );
}

//export default FunctionStateLifting;