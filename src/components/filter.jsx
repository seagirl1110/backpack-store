import React from "react";

let filterProperty = [];
export default class Filter extends React.Component {
  handleClick = (evt) => {
    const el = evt.target;
    const key = el.dataset.filter;
    const value = el.dataset.value;
    const id = `${key}-${value}`;
    if (!el.classList.contains("filter__item--active")) {
      el.classList.add("filter__item--active");
      const property = { key, value, id };
      filterProperty.push(property);
    } else {
      el.classList.remove("filter__item--active");
      filterProperty = filterProperty.filter((item) => item.id !== id);
    }
    this.props.onFilter(filterProperty);
  };

  render() {
    return (
      <div className="filter">
        <h2 className="filter__title">Фильтры по значению</h2>
        <div className="filter__wrapper">
          <h4 className="filter__subtitle">Производитель:</h4>
          <ul className="filter__list">
            <li
              className="filter__item"
              data-filter="brand"
              data-value="Berlingo"
              onClick={this.handleClick}
            >
              Berlingo
            </li>
            <li
              className="filter__item"
              data-filter="brand"
              data-value="Grizzly"
              onClick={this.handleClick}
            >
              Grizzly
            </li>
            <li
              className="filter__item"
              data-filter="brand"
              data-value="Hummingbird"
              onClick={this.handleClick}
            >
              Hummingbird
            </li>
          </ul>
        </div>
        <div className="filter__wrapper">
          <h4 className="filter__subtitle">Цвет:</h4>
          <ul className="filter__list">
            <li
              className="filter__item"
              data-filter="color"
              data-value="синий"
              onClick={this.handleClick}
            >
              синий
            </li>
            <li
              className="filter__item"
              data-filter="color"
              data-value="черный"
              onClick={this.handleClick}
            >
              черный
            </li>
            <li
              className="filter__item"
              data-filter="color"
              data-value="розовый"
              onClick={this.handleClick}
            >
              розовый
            </li>
          </ul>
        </div>
        <div className="filter__wrapper">
          <h4 className="filter__subtitle">Количество отделений:</h4>
          <ul className="filter__list">
            <li
              className="filter__item"
              data-filter="compartments"
              data-value="1"
              onClick={this.handleClick}
            >
              1
            </li>
            <li
              className="filter__item"
              data-filter="compartments"
              data-value="2"
              onClick={this.handleClick}
            >
              2
            </li>
            <li
              className="filter__item"
              data-filter="compartments"
              data-value="3"
              onClick={this.handleClick}
            >
              3
            </li>
          </ul>
        </div>
        <div className="filter__wrapper">
          <h4 className="filter__subtitle">Для кого:</h4>
          <ul className="filter__list">
            <li
              className="filter__item"
              data-filter="gender"
              data-value="woman"
              onClick={this.handleClick}
            >
              woman
            </li>
            <li
              className="filter__item"
              data-filter="gender"
              data-value="man"
              onClick={this.handleClick}
            >
              man
            </li>
            <li
              className="filter__item"
              data-filter="gender"
              data-value="unisex"
              onClick={this.handleClick}
            >
              unisex
            </li>
          </ul>
        </div>
        <div className="filter__wrapper">
          <h4 className="filter__subtitle">Популярные:</h4>
          <ul className="filter__list">
            <li
              className="filter__item"
              data-filter="favorite"
              data-value="yes"
              onClick={this.handleClick}
            >
              yes
            </li>
            <li
              className="filter__item"
              data-filter="favorite"
              data-value="no"
              onClick={this.handleClick}
            >
              no
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
