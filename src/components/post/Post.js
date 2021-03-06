import React from 'react'
import logo from '../logo.svg'
import '../app/App.css'
import './Post.css'

import Comment from '../comment/Comment'
import Author from '../author/Author'

class Post extends React.Component {
  constructor(props) {
    super()
    this.state = {
      content: {
        body: props.content.body
      }
    }
  }

  updateBody(e) {
    this.setState({
      content: {
        body: e.target.value
      }
    })
  }

  render () {
    let allComments = this.props.content.comments.map((comment, index) => {
      return <Comment body={comment} key={index} />
    })

    let allAuthors = this.props.content.authors.map((author, index) => {
      return <Author name={author} key={index} />
    })

    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>{this.props.content.title}</h2>
        </div>
        <p className='App-intro'>
          {this.state.content.body}
        </p>

        <form>
          <label>
            Update body:&nbsp;
            <input type="text" onChange={(e) => this.updateBody(e)} />
          </label>
        </form>

        <h2>Authors</h2>
        { allAuthors }

        <h2>Comments</h2>
        {allComments}
      </div>
    )
  }

}

export default Post
