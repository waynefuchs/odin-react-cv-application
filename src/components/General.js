import { Component } from "react";
import "../styles/General.css";
import EditView from "./EditView";

class General extends Component {
  render() {
    // const name = "John Doe";
    // const email = "johndoe@deer.com";
    // const phone = "(123) 123-1234";

    const { edit, isViewing, name, email, phone } = this.props;

    return (
      <div className="general">
        <EditView 
          edit={(e) => edit('name', e.target.value)}
          isViewing={isViewing} 
          className="large" 
          value={name} 
          placeholder="Your Name" />

        <EditView 
          edit={(e) => edit('email', e.target.value)}
          isViewing={isViewing} 
          value={email} 
          type="email"
          placeholder="Email" />

        <EditView 
          edit={(e) => edit('phone', e.target.value)}
          isViewing={isViewing} 
          value={phone}
          type="tel"
          placeholder="Phone" />
      </div>
    );
  }
}

export default General;
