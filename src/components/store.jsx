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
      clearSettings: false,
    };
  }

  sortCard = (property) => {
    let value;
    const sortColl = this.state.items.sort((a, b) => {
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
      clearSettings: false,
    });
  };

  searchCard = (searchValue) => {
    const searchColl = data.filter((item) => {
      const name = `${item.brand} ${item.name}`.toLowerCase();
      return name.includes(searchValue);
    });
    this.setState({
      items: searchColl,
      clearSettings: false,
    });
  };

  filterCard(property) {
    if (property === 0) {
      this.setState({
        items: data,
      });
    } else {
      let filterColl = data;
      for (const key in property) {
        const valueColl = property[key];
        filterColl = filterColl.filter((item) => {
          const valueItem = item[key];
          return valueColl.includes(valueItem);
        });
      }
      this.setState({
        items: filterColl,
        clearSettings: false,
      });
    }
  }

  updateFilterProperty = (property) => {
    const newProperty = {};
    for (const prop of property) {
      const key = prop.key;
      const value = prop.value;
      if (!newProperty.hasOwnProperty([key])) {
        newProperty[key] = [value];
      } else {
        newProperty[key] = [...newProperty[key], value];
      }
    }
    this.filterCard(newProperty);
  };

  onClearSettings = () => {
    this.setState({
      items: data,
      clearSettings: true,
    });
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
          <Search onSearch={this.searchCard} clear={this.state.clearSettings} />
          <Basket count={countInBasket} />
        </div>
        <div className="filter-container">
          <Filter
            onFilter={this.updateFilterProperty}
            clear={this.state.clearSettings}
          />
          <div className="filter-container__inner">
            <Sort onSort={this.sortCard} clear={this.state.clearSettings} />
            <button className="btn-clear" onClick={this.onClearSettings}>
              Сбросить настройки
            </button>
          </div>
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
