import React from "react";

export default class Basket extends React.Component {
  render() {
    const url = require("./../images/basket.png");
    return (
      <div className="basket">
        <img src={url} alt="basket" width="40" height="40" />
        <div>{this.props.count}</div>
      </div>
    );
  }
}
