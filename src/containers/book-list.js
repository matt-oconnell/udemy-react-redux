import React, { Component } from 'react'
import { connect } from 'react-redux'

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li className="list-group-item" key={book.title}>
          {book.title}
        </li>
      )
    })
  }

  render () {
    <ul className="list-group col-sm-4">
      {this.renderList}
    </ul>
  }
}

export default BookList;
