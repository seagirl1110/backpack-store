import React from "react";

export default class Sort extends React.Component {

  handleChange = (evt) => {
        const select = evt.target;
        const option = select.options[select.selectedIndex];
        const property = option.value;
        this.props.onSort(property);
  }

  render() {
    return (
      <div className="sort">
        <h2 className="sort__title">Сортировка</h2>
        <select className="sort__list" onChange={this.handleChange}>
          <option className="sort__item">Выберите значение</option>
          <option className="sort__item" value="nameA">
            По названию: oт A до Z
          </option>
          <option className="sort__item" value="nameZ">
            По названию: oт Z до A
          </option>
          <option className="sort__item" value="min">
            По цене: по возрастанию
          </option>
          <option className="sort__item" value="max">
            По цене: по убыванию
          </option>
        </select>
      </div>
    );
  }
}
