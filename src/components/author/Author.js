import React from 'react';

class Author extends React.Component {

  render() {
    return (
      <div className='Authors'>
        <small>written by - {this.props.name}</small>
      </div>
    );
  }

}

export default Author;
