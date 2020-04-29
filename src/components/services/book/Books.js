import React, { Component } from "react";
import axios from "axios";
import Book from "./Book";

class Books extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      searchText: "Java",
    };
  }

  getListOfBooks() {
    axios
      .request({
        method: "get",
        url:
          "https://www.googleapis.com/books/v1/volumes?q=" +
          this.state.searchText,
      })
      .then((response) => {
        this.setState({
          book: response.data.items,
        });
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentWillMount() {
    this.getListOfBooks();
  }

  searchBook(event) {
    this.setState({
      searchText: event.target.value,
    });
    this.getListOfBooks();
  }
  render() {
    return (
      <div>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder={this.state.searchText}
            onChange={this.searchBook.bind(this)}
          />
        </form>
        <div className="card-group">
          {this.state.books.map((book) => {
            return (
              <Book
                key={book.id}
                title={book.volumeInfo.title}
                picture={book.volumeInfo.thumbnail}
                categories={book.volumeInfo.categories}
                authors={book.volumeInfo.authors}
                publisher={book.volumeInfo.publisher}
                discription={book.volumeInfo.description}
                pageCount={book.volumeInfo.pageCount}
                publishDate={book.volumeInfo.publishedDate}
                rating={book.volumeInfo.averageRating}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Books;
