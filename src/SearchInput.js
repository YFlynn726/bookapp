import React, { Component } from "react";
import "./SearchInput.css";

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.fetchBooks(this.state.value);
  }

  render() {
    return (
      <form className="searchBook" onSubmit={this.handleSubmit}>
        <label htmlFor="title">Search:</label>
        <input
          value={this.state.value}
          onChange={this.handleChange}
          type="text"
          name="title"
          id="title"
          placeholder="Tuesdays with Morrie"
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SearchInput;
