const { Component } = require("react");

class Counter extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
    };

    this.increment = () => this.setState({ counter: this.state.counter + 1 });
    this.decrement = () => this.setState({ counter: this.state.counter - 1 });

    console.log("Constructor");
  }

  componentDidMount() {

    console.log("ComponentDidMount");
    console.log("----------Mounting Complete----------");
  }
  
  render() {
    return (
      <div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <div className="counter">Counter {this.state.counter}</div>
      </div>
    );
  }
  
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("ComponentDidUpdate");
    console.log("----------Update Complete----------");
  }
}

export default Counter;
