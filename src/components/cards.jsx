import React from "react";
import Card from "./card";
const data = require("../data/data.json");

export default class Cards extends React.Component {
  render() {
    return (
      <section className="cards">
        {data.map((item, index) => {
          return <Card item={item} key={index} />;
        })}
      </section>
    );
  }
}
