import React from "react";
import Basket from "./basket";
import Card from "./card";
const data = require("../data/data.json");

export default class Store extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countInBasket: 0,
    };
  }

  incCount = () =>
    this.setState((state) => ({ countInBasket: state.countInBasket + 1 }));

  decCount = () =>
    this.setState((state) => ({ countInBasket: state.countInBasket - 1 }));

  render() {
    return (
      <div>
        <h1>Backpack Store</h1>
        <Basket count={this.state.countInBasket} />
        <section className="cards">
          {data.map((item, index) => {
            return (
              <Card
                item={item}
                key={index}
                onInc={this.incCount}
                onDec={this.decCount}
              />
            );
          })}
        </section>
      </div>
    );
  }
}
