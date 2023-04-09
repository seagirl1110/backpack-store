import React from "react";
import Basket from "./basket";
import Card from "./card";
import Sort from "./sort";
import Search from "./search";
import Filter from "./filter";
const data = require("../data/data.json");

export default class Store extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countInBasket: 0,
      items: data,
    };
  }

  sortCard = (property) => {
    let value;
    const sortColl = data.sort((a, b) => {
      if (property === "min") {
        value = a.price - b.price;
      }
      if (property === "max") {
        value = b.price - a.price;
      }
      if (property === "nameA") {
        if (`${a.brand}${a.name}` > `${b.brand}${b.name}`) {
          value = 1;
        } else if (`${a.brand}${a.name}` < `${b.brand}${b.name}`) {
          value = -1;
        } else {
          value = 0;
        }
      }
      if (property === "nameZ") {
        if (`${a.brand}${a.name}` < `${b.brand}${b.name}`) {
          value = 1;
        } else if (`${a.brand}${a.name}` > `${b.brand}${b.name}`) {
          value = -1;
        } else {
          value = 0;
        }
      }
      return value;
    });
    this.setState({
      items: sortColl,
    });
  };

  searchCard = (searchValue) => {
    const searchColl = data.filter((item) => {
      const name = `${item.brand} ${item.name}`.toLowerCase();
      return name.includes(searchValue);
    });
    this.setState({
      items: searchColl,
    });
  };

  filterCard = (filterProperty) => {
    if (filterProperty.length > 0) {
      let filterColl;
      for (let property of filterProperty) {
        filterColl = data.filter((item) => {
          return item[property.key] === property.value;
        });
      }
      this.setState({
        items: filterColl,
      });
    }
  };

  incCount = () =>
    this.setState((state) => ({ countInBasket: state.countInBasket + 1 }));

  decCount = () =>
    this.setState((state) => ({ countInBasket: state.countInBasket - 1 }));

  render() {
    const { countInBasket, items } = this.state;
    return (
      <div className="store">
        <div className="header">
          <h1 className="logo">Backpack Store</h1>
          <Search onSearch={this.searchCard} />
          <Basket count={countInBasket} />
        </div>
        <div className="filter-container">
          <Filter onFilter={this.filterCard} />
          <Sort onSort={this.sortCard} />
        </div>
        <section className="cards">
          {items.map((item, index) => {
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
