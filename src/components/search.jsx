import React from "react";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  handleChange = (evt) => {
    const searchValue = evt.target.value.toLowerCase();
    this.props.onSearch(searchValue);
    this.setState({
      value: searchValue,
    });
  };

  render() {
    const value = this.props.clear ? "" : this.state.value;
    return (
      <div className="search">
        <input
          className="search__input"
          type="search"
          value={value}
          placeholder="Поиск..."
          autoFocus
          autoComplete="off"
          onInput={this.handleChange}
        />
      </div>
    );
  }
}
