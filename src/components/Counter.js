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

  render() {
    return (
      <div>
        <div clasName="counter">Counter {this.state.counter}</div>
      </div>
    );
  }
}

export default Counter;
