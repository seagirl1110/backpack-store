import React from "react";
import cn from "classnames";

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addBasket: false,
    };
  }

  handleClick = () => {
    this.setState((state) => ({ addBasket: !state.addBasket }));
  };

  render() {
    const { item } = this.props;
    const url = require(`./../data/images/${item.img}`);
    const name = cn({
      card: true,
      "card--add-basket": this.state.addBasket,
    });

    return (
      <article className={name} onClick={this.handleClick}>
        <h3 className="card__title">{`${item.brand} ${item.name}`}</h3>
        <img
          className="card__img"
          src={url}
          alt={item.name}
          width="200"
          height="200"
        />
        <div className="card__amount">{`Количество на складе: ${item.amount}`}</div>
        <div className="card__compartments">{`Количество отделений: ${item.compartments}`}</div>
        <div className="card__color">{`Цвет: ${item.color}`}</div>
        <div className="card__gender">{`Для кого: ${item.gender}`}</div>
        <div className="card__price">{`Цена: ${item.price}`}</div>
        <div className="card__favorite">{`Популярный: ${item.favorite}`}</div>
      </article>
    );
  }
}
