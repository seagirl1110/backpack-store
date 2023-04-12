import React from 'react';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.reset !== this.props.reset && this.props.reset === true) {
      this.resetValue();
    }
  }

  resetValue() {
    this.setState({
      value: '',
    });
  }

  handleChange = (evt) => {
    const searchValue = evt.target.value.toLowerCase();
    this.props.onSearch(searchValue);
    this.setState({
      value: searchValue,
    });
  };

  render() {
    return (
      <div className="search">
        <input
          className="search__input"
          type="search"
          value={this.state.value}
          placeholder="Поиск..."
          autoFocus
          autoComplete="off"
          onInput={this.handleChange}
        />
      </div>
    );
  }
}
