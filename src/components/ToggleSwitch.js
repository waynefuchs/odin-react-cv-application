import { Component } from "react";
import "../styles/ToggleSwitch.css";

class ToggleSwitch extends Component {
  render() {
    const { sliderAction } = this.props;

    return (
      <div id="edit-toggle">
        <h3>Edit</h3>
        <input
          type="checkbox"
          id="edit-switch"
          onChange={(e) => sliderAction(e.target.checked)}
        />
        <label htmlFor="edit-switch"></label>
        <h3>View</h3>
      </div>
    );
  }
}

export default ToggleSwitch;
