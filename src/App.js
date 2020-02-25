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
      error: "",
      filter: "",
      printType: "",
      term: ""
    };

    //this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  //handleChange(event) {
  //object destructuring
  //const { name, value } = event.target;

  //this.setState({ [name]: value });
  //}

  handleSubmit(event) {
    event.preventDefault();
    //collect inputs from the form how to collect data from a form to react
    //this.setState({ term: event.target.term });
    if (this.state.filter === "no filter")
      this.fetchBooks(this.state.term, this.state.printType);
    else
      this.fetchBooks(this.state.term, this.state.printType, this.state.filter);
  }

  handleSelect(event) {
    this.setState({ filter: event.target.value });
    this.setState({ printType: event.target.value });
  }

  fetchBooks = (term, printType, filter) => {
    console.log(this.state);
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${term}&printType=${printType}&filter=${filter}&key=AIzaSyAvdxkmEZLq2g6O-BgECx1bqHdCIYCuCR0`
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
          searchTerm={this.state.term}
          fetchBooks={this.fetchBooks}
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
        />
        <BookList items={this.state.items} />
        <PrintType
          print={this.state.printType}
          fetchBooks={this.fetchBooks}
          onChange={this.handleChange}
        />
        <BookType
          filter={this.state.filter}
          fetchBooks={this.fetchBooks}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
