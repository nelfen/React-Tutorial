import { useState, Component } from 'react';

function FunctionalState() {
  const [counter, setCounter] = useState(0);
  return (
    <div style={{ padding: '10px', border: '1px solid blue' }}>
      <h3>함수형 state 예제</h3>
      <div>counter: {counter}</div>
      <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
      <button onClick={() => setCounter((prev) => prev - 1)}>-</button>
    </div>
  );
}

class ClassState extends Component {
  state = { counter: 0 };
  render() {
    return (
      <div style={{ padding: '10px', border: '1px solid gray', marginTop: '10px' }}>
      <h3>클래스형 state 예제</h3>
        <div>counter: {this.state.counter}</div>
        <button
          onClick={() =>
            this.setState((state) => ({ counter: state.counter + 1 }))
          }
        >
          +
        </button>
        <button
          onClick={() =>
            this.setState((state) => ({ counter: state.counter - 1 }))
          }
        >
          -
        </button>
      </div>
    );
  }
}

export default function StateBasic() {
  return (
    <>
      <h2>State 기본 및 함수형 vs 클래스형 비교</h2>
      <FunctionalState />
      <StateBasic />
    </>
  )
}

// export default FunctionalState;
// export default StateBasic;