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
      name: "",
      email: "",
      phone: "",
    };
    this.setIsViewing = this.setIsViewing.bind(this);
  }

  setIsViewing = (status) => {
    this.setState({ isViewing: status });
  };

  setEditValue = (key, value) => this.setState({ [key]: value });

  render() {
    return (
      <div>
        <Header
          isViewing={this.state.isViewing}
          sliderAction={this.setIsViewing}
        />
        <Counter />
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
