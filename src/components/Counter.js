const { Component } = require("react");

class Counter extends Component {
  render() {
    return (
      <div>
        <div clasName="counter">
          Counter {0}
        </div>
      </div>
    );
  }
}

export default Counter;