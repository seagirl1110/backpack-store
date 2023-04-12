import React from 'react';

export default class Sort extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectValue: 'choose',
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.reset !== this.props.reset && this.props.reset === true) {
      this.resetSort();
    }
  }

  resetSort() {
    this.setState({
      selectValue: 'choose',
    });
  }

  handleChange = (evt) => {
    const select = evt.target;
    const option = select.options[select.selectedIndex];
    const property = option.value;
    this.props.onSort(property);
    this.setState({
      selectValue: property,
    });
  };

  render() {
    const sortData = [
      { title: 'Выберите значение', value: 'choose' },
      { title: 'По названию: oт A до Z', value: 'nameA' },
      { title: 'По названию: oт Z до A', value: 'nameZ' },
      { title: 'По цене: по возрастанию', value: 'min' },
      { title: 'По цене: по убыванию', value: 'max' },
    ];

    return (
      <div className="sort">
        <h2 className="sort__title">Сортировка</h2>
        <select
          className="sort__list"
          value={this.state.selectValue}
          onChange={this.handleChange}
        >
          {sortData.map((item) => (
            <option className="sort__item" value={item.value} key={item.value}>
              {item.title}
            </option>
          ))}
        </select>
      </div>
    );
  }
}
