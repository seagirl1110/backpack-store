import React from "react";
const data = require("../data/data.json");

export default class Card extends React.Component {
  renderItem = (item, index) => {
    const url = require(`./../data/images/${item.img}`);
    return (
      <article className="cards__item cards-item" key={index}>
        <h3 className="cards-item__title">{`${item.brand} ${item.name}`}</h3>
        <img
          className="cards-item__img"
          src={url}
          alt={item.name}
          width="200"
          height="200"
        />
        <div className="cards-items__amount">{`Количество на складе: ${item.amount}`}</div>
        <div className="cards-items__compartments">{`Количество отделений: ${item.compartments}`}</div>
        <div className="cards-items__color">{`Цвет: ${item.color}`}</div>
        <div className="cards-items__gender">{`Для кого: ${item.gender}`}</div>
        <div className="cards-items__price">{`Цена: ${item.price}`}</div>
        <div className="cards-items__favorite">{`Популярный: ${item.favorite}`}</div>
      </article>
    );
  };

  render() {
    return <section className="cards">{data.map(this.renderItem)}</section>;
  }
}
