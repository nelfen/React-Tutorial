import { Component, useState } from 'react';
import './App.css'


// function App() {
//   const [counter, setCounter] = useState(0)
//   return (
//     <> 
//       <Count counter={counter} />
//       <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
//       <button onClick={() => setCounter((prev) => prev - 1)}>-</button>
//     </>
//   );
// };

// function Count( { counter} ) {
//   return <div>counter : {counter}</div>
// }

class App extends Component {
  state = { counter: 0 }

  incrementCounter = () => {
    this.setState({counter: this.state.counter + 1})
  }

  decrementCounter = () => {
    this.setState({counter: this.state.counter - 1})
  }

  render() {
    return (
      <>
        <Count counter={ this.state.counter } />
        <PlusBtn incrementCounter={this.incrementCounter} />
        <MinusBtn decrementCounter={this.decrementCounter} />    
      </>
    );
  }
}

class PlusBtn extends Component {
  render() {
    return (
    <button onClick={this.props.incrementCounter}>+</button>
  );
  }
}

class MinusBtn extends Component {
  render() {
    return (
    <button onClick={this.props.decrementCounter}>-</button>
  );
  }  
}

class Count extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return <div>counter: {this.props.counter}</div>;
  }
}

export default App