import "../styles/Counter.css";
const { Component } = require("react");

// This isn't working the same for me as it does in the tutorial...
// Ahh, The Odin Project has a note on this
const ErrorComponent = (props) => <div>{props.thisVariableDoesNotExist}</div>;

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
    if('error' in this.state) {
      delete this.state.error;
      delete this.state.info;
      return <>We have encountered an error! ({this.state.error.message})</>
    }

    return (
      <div className="counter-buttons">
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <h2>Counter: {this.state.counter}</h2>
        <h2>Seed {this.props.seed}</h2>
        {this.props.showErrorComponent ? <ErrorComponent /> : "ERROR NOT SHOWN"}
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
      console.log("----------Update Complete----------");
      return false;
    }

    console.log("shouldComponentUpdate: Render");
    return true;
  }

  static getDerivedStateFromProps(props, state) {
    if ("seed" in props && state.seed !== props.seed) {
      return {
        seed: props.seed,
        counter: props.seed,
      };
    }

    // Don't modify state
    return null;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // Passes return value into `componentDidUpdate` as the 3rd `snapshot` parameter
    return null;
  }

  componentDidCatch(error, info) {
    console.info("componentDidCatch")    
    this.setState({ error, info });
  }
}

export default Counter;
