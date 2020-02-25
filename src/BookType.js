import React, { Component } from "react";

class BookType extends Component {
  render() {
    return (
      <form>
        <label>
          Book Type:
          <select print={this.props.filter} onChange={this.props.onChange}>
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
