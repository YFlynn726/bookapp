import React, { Component } from "react";
import "./SearchInput.css";

class SearchInput extends Component {
  render() {
    return (
      <form className="searchBook" onSubmit={this.props.onSubmit}>
        <label htmlFor="title">Search:</label>
        <input
          value={this.props.term}
          onChange={this.props.onChange}
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
