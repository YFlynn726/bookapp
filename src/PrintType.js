import React, { Component } from "react";

class PrintType extends Component {
  constructor(props) {
    super(props);
    this.state = { printType: "" };

    this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
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
          <select print={this.state.printType} onChange={this.handleChange}>
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
