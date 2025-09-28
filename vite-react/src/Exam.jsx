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

export default App