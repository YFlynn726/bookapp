import React, { Component } from "react";

class BookType extends Component {
  constructor(props) {
    super(props);
    this.state = { filter: "" };

    this.handleSelect = this.handleSelect.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSelect(event) {
    this.setState({ filter: event.target.value });
  }

  //handleSubmit(event) {
  //event.preventDefault();
  //this.props.fetchBooks(this.state.filter);
  // }

  render() {
    return (
      <form>
        <label>
          Book Type:
          <select print={this.state.filter} onChange={this.handleSelect}>
            <option value="no filter">No Filter</option>
            <option value="free ebooks">Free eBooks</option>
            <option value="paid ebook">Paid eBook</option>
            <option value="ebooks">eBooks</option>
          </select>
        </label>
      </form>
    );
  }
}

export default BookType;
