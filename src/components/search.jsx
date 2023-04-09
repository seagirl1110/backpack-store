import React from "react";

export default class Search extends React.Component {
  handleChange = (evt) => {
    const searchValue = evt.target.value.toLowerCase();
    this.props.onSearch(searchValue);
  };

  render() {
    return (
      <div className="search">
        <input
          className="search__input"
          type="search"
          placeholder="Поиск..."
          autoFocus
          autoComplete="off"
          onInput={this.handleChange}
        />
      </div>
    );
  }
}
