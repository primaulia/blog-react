import React from 'react'
import logo from '../logo.svg'
import '../app/App.css'
import './TodoList.css'

import ListItem from '../listitem/ListItem'

class Todolist extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      doThese: props.doThese,
      newItem: ""
    }
  }

  clearList (e) {
    e.preventDefault()

    this.setState({
      doThese: []
    })
  }

  inputChange(e) {
    this.setState({
      newItem: e.target.value
    })
  }

  addItem(e) {
    e.preventDefault()
    const todolistsProps = this.state.doThese
    todolistsProps.push(this.state.newItem)

    this.setState({
      doThese: todolistsProps,
      newItem: ''
    })
  }

  render () {
    let todolistsProps = this.state.doThese.map((todo, index) => {
      return <ListItem doThis={todo} key={index} />
    })

    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to React</h2>
        </div>
        <div className='Todolist-container'>
          <h1> Things I should stop procrastinating</h1>
          <form>
            <div>
              <label>
                New Todo List:&nbsp;
                <input type="text"
                  onChange={e => this.inputChange(e)}
                  value={this.state.newItem}
                />
              </label>
            </div>
            <div>
              <button onClick={e => this.addItem(e)} type="submit">Add</button>&nbsp;
              <button onClick={e => this.clearList(e)}>Clear all</button>
            </div>
          </form>
          {todolistsProps}
        </div>
      </div>
    )
  }

}

export default Todolist
