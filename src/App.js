import React, { Component } from "react";
import "./App.css";
import SearchInput from "./SearchInput";
import BookList from "./BookList";
import PrintType from "./PrintType";
import BookType from "./BookType";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      error: ""
    };
  }

  fetchBooks = (term, printType, filter) => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${term}&filter=${filter}&${printType}&key=AIzaSyAvdxkmEZLq2g6O-BgECx1bqHdCIYCuCR0`
    )
      .then(results => {
        console.log(results);
        return results.json();
      })
      .then(data => {
        console.log(data);
        this.updateBooks(data.items);
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  };

  updateBooks = books => {
    this.setState({
      items: books
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Google Book Search</h1>
        <SearchInput
          searchTerm={this.props.value}
          fetchBooks={this.fetchBooks}
        />
        <BookList items={this.state.items} />
        <PrintType print={this.props.printType} fetchBooks={this.fetchBooks} />
        <BookType filter={this.props.filter} fetchBooks={this.fetchBooks} />
      </div>
    );
  }
}

export default App;
