const { Component } = require("react");

class Counter extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
      ignoreProp: 0,
    };

    this.increment = () => this.setState({ counter: this.state.counter + 1 });
    this.decrement = () => this.setState({ counter: this.state.counter - 1 });
    this.ignoreProp = () => this.setState({ ignoreProp: Math.random() });

    console.log("Constructor");
  }

  componentDidMount() {
    console.log("ComponentDidMount");
    console.log("----------Mounting Complete----------");
  }

  render() {
    return (
      <div>
        <button onClick={this.ignoreProp}>Update State And Ignore</button>
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

  componentWillUnmount() {
    console.log("ComponentWillUnmount");
    console.log("----------Unmount Complete----------");
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      "ignoreProp" in nextProps &&
      this.props.ignoreProp !== nextProps.ignoreProp
    ) {
      console.log("shouldComponentUpdate: Render");
      return false;
    }
    console.log("shouldComponentUpdate: Do Not Render");
    return true;
  }
}

export default Counter;
