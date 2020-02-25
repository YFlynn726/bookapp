import React, { Component } from "react";

class PrintType extends Component {
  constructor(props) {
    super(props);
    this.state = { printType: "" };

    this.handleSelect = this.handleSelect.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSelect(event) {
    this.setState({ printType: event.target.value });
  }

  //handleSubmit(event) {
  // event.preventDefault();
  //this.props.fetchBooks(this.state.printType);
  //}

  render() {
    return (
      <form>
        <label>
          Print Type:
          <select print={this.state.printType} onChange={this.handleSelect}>
            <option value="all">All</option>
            <option value="book">Book</option>
            <option value="magazines">Magazines</option>
          </select>
        </label>
      </form>
    );
  }
}

export default PrintType;
