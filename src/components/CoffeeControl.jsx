import React, { Component } from "react";
import CoffeeButton from "./CoffeeButton";
import "./CoffeeControl.css";
import Thermos from "./Thermos";

class CoffeeControl extends Component {
  render() {
    return (
      <div className="CoffeeControl">
        <Thermos {...this.props} />

        <div className="flex-columns">
          <CoffeeButton litersToBrew="2.2" onClick={this.props.onClick} />

          <CoffeeButton litersToBrew="1.1" onClick={this.props.onClick} />

          <CoffeeButton litersToBrew="0.5" onClick={this.props.onClick} />
        </div>
      </div>
    );
  }
}

export default CoffeeControl;
