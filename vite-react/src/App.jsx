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
  render() {
    return (
      <>
        <Count counter={ this.state.counter } />
        <button onClick={() => this.setState((state) => ({ counter: state.counter + 1 }))}>+</button>
        <button onClick={() => this.setState((state) => ({ counter: state.counter - 1 }))}>-</button>
      </>
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