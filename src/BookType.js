import React, { Component } from "react";

class BookType extends Component {
  render() {
    return (
      <form className="book-form">
        <label>
          Book Type:
          <select
            name="filter"
            print={this.props.filter}
            onChange={this.props.onChange}
          >
            <option value="no filter">No Filter</option>
            <option value="free-ebooks">Free eBooks</option>
            <option value="paid-ebooks">Paid eBook</option>
            <option value="ebooks">eBooks</option>
          </select>
        </label>
      </form>
    );
  }
}

export default BookType;
