import React from "react";
import Cards from "./cards";

export default class Store extends React.Component {
  render() {
    return (
      <div>
        <h1>Backpack Store</h1>
        <Cards />
      </div>
    );
  }
}
