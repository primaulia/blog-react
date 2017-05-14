import React from 'react'
import logo from '../logo.svg'
import '../app/App.css'

class Mood extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      moodPoints: 1
    }
  }

  increaseMood(e) {
    this.setState({
      moodPoints: (this.state.moodPoints !== 10) ? this.state.moodPoints + 1 : 1
    })
  }

  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Hello {this.props.name}!</h2>
        </div>
        <p className='App-intro'>
          You are {this.props.age} years old.
          You are this happy: {this.state.moodPoints}
        </p>
        <p>
          <button onClick={(e) => this.increaseMood(e)}>Mood up!</button>
        </p>
      </div>
    )
  }

}

export default Mood
