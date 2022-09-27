import { Component } from "react";
import "../styles/General.css";
import EditView from "./EditView";

class General extends Component {
  render() {
    // const name = "John Doe";
    // const email = "johndoe@deer.com";
    // const phone = "(123) 123-1234";

    const { isEditing, name, email, phone } = this.props;

    return (
      <div className="general">
        <EditView 
          isEditing={isEditing} 
          className="large" 
          value={name} 
          placeholder="Your Name" />

        <EditView 
          isEditing={isEditing} 
          value={email} 
          placeholder="Email" />

        <EditView 
          isEditing={isEditing} 
          value={phone}
          placeholder="Phone" />
      </div>
    );
  }
}

export default General;
