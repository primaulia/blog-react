import React from 'react';

class Comment extends React.Component {

  render() {
    return (
      <div className='Comments'>
        <p>{this.props.body}</p>
      </div>
    );
  }

}

export default Comment;
