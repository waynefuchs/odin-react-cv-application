import React from "react";
import "../styles/HeaderFooter.css";
import ToggleSwitch from "./ToggleSwitch";
const Header = (props) => (
  <header>
    <h1>CV App</h1>
    <ToggleSwitch 
      isEditing={props.isEditing} 
      sliderAction={props.sliderAction} />
  </header>
);
export default Header;
