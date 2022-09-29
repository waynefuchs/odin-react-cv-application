const { Component } = require("react");

class Counter extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0
    }


    console.log("Constructor");
  }

  render() {
    return (
      <div>
        <div clasName="counter">
          Counter {this.state.counter}
        </div>
      </div>
    );
  }
}

export default Counter;