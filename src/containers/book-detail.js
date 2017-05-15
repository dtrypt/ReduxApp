import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    if(!this.props.book) {
      return <div>Select a book to get started.</div>;
    }
    return (
      <div>
        <h3> Details for:</h3>
        <div>{this.props.book.title}</div>
      </div>
    );
  }
}

//mapping state to props lets us use this.props.book in the container
function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
