import "./styles/App.css";

import Counter from "./components/Counter";

import Header from "./components/Header";
import General from "./components/General";
import Footer from "./components/Footer";
import Education from "./components/Education";
import Practical from "./components/Practical";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      isViewing: false,

      // (S) Lifecycle Tutorial
      showLifecycle: false,
      mount: true,
      ignoreProp: 0,
      seed: 0,
      showErrorComponent: false,
      // (E) Lifecycle Tutorial
    };

    this.setIsViewing = this.setIsViewing.bind(this);

    // (S) Lifecycle Tutorial
    this.mountCounter = () => this.setState({ mount: true });
    this.unmountCounter = () => this.setState({ mount: false });
    this.ignoreProp = () => this.setState({ ignoreProp: Math.random() });
    this.generateSeed = () =>
      this.setState({ seed: Number.parseInt(Math.random() * 100) });
    this.toggleError = () => this.setState({showErrorComponent: !this.state.showErrorComponent})
    // (E) Lifecycle Tutorial
  }

  setIsViewing = (status) => {
    this.setState({ isViewing: status });
  };

  setEditValue = (key, value) => this.setState({ [key]: value });

  LifeCycle() {
    if (!this.state.showLifecycle) return null;
    return (
      <div>
        <button onClick={this.mountCounter} disabled={this.state.mount}>
          Mount
        </button>
        <button onClick={this.unmountCounter} disabled={!this.state.mount}>
          Unmount
        </button>
        <button onClick={this.ignoreProp}>Update State And Ignore</button>
        <button onClick={this.generateSeed}>Generate Seed</button>
        <button onClick={this.toggleError}>Toggle Error</button>
        {this.state.mount ? (
          <Counter 
            ignoreProp={this.state.ignoreProp} 
            seed={this.state.seed}
            showErrorComponent={this.state.showErrorComponent} />
        ) : null}
      </div>
    );
  }

  render() {
    return (
      <div>
        <Header
          isViewing={this.state.isViewing}
          sliderAction={this.setIsViewing}
        />

        {this.LifeCycle()}

        <div className="base">
          <General
            edit={this.setEditValue}
            isViewing={this.state.isViewing}
            name={this.state.name}
            email={this.state.email}
            phone={this.state.phone}
          />
          <Education isViewing={this.state.isViewing} />
          <Practical isViewing={this.state.isViewing} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
