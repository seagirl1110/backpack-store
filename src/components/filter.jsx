import React from "react";
import cn from "classnames";

export default class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterColl: [],
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.reset !== this.props.reset && this.props.reset === true) {
      this.resetFilters();
    }
  }

  resetFilters() {
    this.setState({
      filterColl: [],
    });
  }

  handleClick = (key, value) => {
    let filterProperty = [...this.state.filterColl];
    const id = `${key}-${value}`;
    if (!filterProperty.find((item) => item.value === value)) {
      const property = { key, value, id };
      filterProperty.push(property);
    } else {
      filterProperty = filterProperty.filter((item) => item.id !== id);
    }
    this.props.onFilter(filterProperty);
    this.setState({
      filterColl: filterProperty,
    });
  };

  render() {
    const filterData = [
      {
        title: "Производитель",
        key: "brand",
        values: ["Berlingo", "Grizzly", "Hummingbird"],
      },
      {
        title: "Цвет",
        key: "color",
        values: ["синий", "черный", "розовый"],
      },
      {
        title: "Количество отделений",
        key: "compartments",
        values: ["1", "2", "3"],
      },
      {
        title: "Для кого",
        key: "gender",
        values: ["woman", "man", "unisex"],
      },
      {
        title: "Популярные",
        key: "favorite",
        values: ["yes", "no"],
      },
    ];

    return (
      <div className="filter">
        <h2 className="filter__title">Фильтры по значению</h2>
        {filterData.map((category) => (
          <div className="filter__wrapper" key={category.key}>
            <h4 className="filter__subtitle">{category.title}:</h4>
            <ul className="filter__list">
              {category.values.map((value) => {
                const classes = cn("filter__item", {
                  "filter__item--active": this.state.filterColl.find(
                    (item) => item.value === value
                  ),
                });
                return (
                  <li
                    className={classes}
                    key={`${category.key}-${value}`}
                    onClick={() => this.handleClick(category.key, value)}
                  >
                    {value}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    );
  }
}
