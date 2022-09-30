import "../styles/Counter.css";
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
      <div className="counter-buttons">
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <h2 className="counter">Counter: {this.state.counter}</h2>
        <h2 className="counter">ignoreProp {this.props.ignoreProp}</h2>
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
      console.log("shouldComponentUpdate: Do Not Render");
      return false;
    }

    console.log("shouldComponentUpdate: Render");
    return true;
  }
}

export default Counter;
