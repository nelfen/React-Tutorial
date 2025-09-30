//4일차: State
function App() {
  const [counter, setCounter] = useState(0)
  return (
    <> 
      <div>counter: {counter}</div>
      <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
      <button onClick={() => setCounter((prev) => prev - 1)}>-</button>
    </>
  );
};

class App extends Component {
  state = { counter: 0 }
  render() {
    return (
      <>
        <div>counter: {this.state.counter}</div>
        <button onClick={() => this.setState((state) => ({ counter: state.counter + 1 }))}>+</button>
        <button onClick={() => this.setState((state) => ({ counter: state.counter - 1 }))}>-</button>
      </>
    );
  }
}

//5일차: props & 상태 끌어올리기
function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(3);

  const incrementCounter = () => {
    setCounter((prev) => { 
      return prev + 1 
    });
  };

  const decrementCounter = () => {
    setCounter((prev) => { return prev - 1 });
  };

  const setCounterNumber = () => {
    setCounter(inputValue);
  }

  return (
    <> 
      <Count counter={counter} />
      <PlusBtn incrementCounter={incrementCounter} />
      <MinusBtn decrementCounter={decrementCounter} />
      <CounterInput inputValue={inputValue} setInputValue={setInputValue} setCounterNumber={setCounterNumber} />
    </>
  );
};

function CounterInput({ inputValue, setInputValue, setCounterNumber }) {
  return (
    <>
      <input type="number" value={inputValue} onChange={(event) => setInputValue(event.target.value)}/>
      <button onClick={setCounterNumber}>입력</button>
    </>
  )
}

function PlusBtn( { incrementCounter } ) {
  return (
    <button onClick={incrementCounter}>+</button>
  );
}

function MinusBtn( { decrementCounter } ) {
  return (
    <button onClick={decrementCounter}>-</button>
  );
}

function Count( { counter} ) {
  return <div>counter : {counter}</div>
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

export default App;