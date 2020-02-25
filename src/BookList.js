import React, { Component } from "react";
import "./BookList.css";

class bookList extends Component {
  state = {};
  render() {
    const bookitems = this.props.items;
    console.log(bookitems);

    return (
      <ul>
        {bookitems.map(item => (
          <li key={item.id}>
            <img
              src={item.volumeInfo.imageLinks.smallThumbnail}
              alt="bookimage"
            />
            <br />
            <h3>Title: {item.volumeInfo.title}</h3> <br /> Author:{" "}
            {item.volumeInfo.authors
              ? item.volumeInfo.authors[0]
              : "none listed"}
            <br /> Description: {item.volumeInfo.description} <br />
            Price:{" "}
            {item.saleInfo.listPrice
              ? item.saleInfo.listPrice.amount
              : "N/A"}{" "}
          </li>
        ))}
      </ul>
    );
  }
}

export default bookList;
