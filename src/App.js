import "./styles/App.css";
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
      isEditing: false,
      name: "",
      email: "",
      phone: "",
    };
    this.setIsEditing = this.setIsEditing.bind(this);
  }

  setIsEditing = (status) => this.setState({ isEditing: status });

  setEdit = (key, value) => this.setState({[key]: value});

  render() {
    return (
      <div>
        <Header sliderAction={this.setIsEditing} />
        <div className="base">
          <General
            edit={this.setEdit}
            isEditing={this.state.isEditing}
            name={this.state.name}
            email={this.state.email}
            phone={this.state.phone}
          />
          <Education isEditing={this.state.isEditing} />
          <Practical isEditing={this.state.isEditing} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
