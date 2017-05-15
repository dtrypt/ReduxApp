import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
//bindActionCreators makes action return value flow through all reducers
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">{book.title}
        </li>
      );
    });
  }

  render () {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  // return value here shows up as props in booklist (our container)
  return {
    books: state.books
  };
}

//Return value of this function will be props of Booklist container
function mapDispatchToProps(dispatch) {
  // whenever selectBook is called the result should be passed to all our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch)
}

//Promote BookList from a component to container.
//connect takes a function and a component, produces a container & makes avail as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
//BASICALLY maps "state" and "actioncreator" to containers (through props)
