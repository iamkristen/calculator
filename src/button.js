import App from "./App";
import './App.css'
import './calculator.css'
import React from "react";
// Create our Button component as a functional component.
const Button = (props) => {
    const buttonClass = props.isShowMe ? "showme" : "ButtonStyle";
    return (
        <button class={buttonClass} value= {props.label}  onClick={props.ClickHandle} > {props.label}  </button>
    );
  }
    
  // Export our button component.
  export default Button;