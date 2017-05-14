import React from 'react'
import logo from '../logo.svg'
import '../app/App.css'
import './TodoList.css'

import ListItem from '../listitem/ListItem'

class Todolist extends React.Component {
  render () {
    let todolistsProps = this.props.doThese.map( todo => {
      return <ListItem doThis={todo} />
    })

    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to React</h2>
        </div>
        <div className="Todolist-container">
          <h1> Things I should stop procrastinating</h1>
          {todolistsProps}
        </div>
      </div>
    )
  }

}

export default Todolist
