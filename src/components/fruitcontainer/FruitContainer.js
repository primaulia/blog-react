import React from 'react'
import logo from '../logo.svg'
import '../app/App.css'
import './FruitContainer.css'

import FruitList from '../fruitlist/FruitList'
import FruitFilter from '../fruitfilter/FruitFilter'

class FruitContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      fruitsToDisplay: props.fruits,
      filterValue: ''
    }
  }

  handleFilterChange (e) {
    const filterValue = e.target.value
    this.setState((prevState, props) => {
      // remove fruits that don't contain the filter value
      const filteredFruitList = props.fruits.filter(fruit =>
        fruit.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase()))

      // return new state with the filtered fruit list and the new value of the filter
      return {
        fruitsToDisplay: filteredFruitList,
        filterValue
      }
    })
  }

  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to React</h2>
        </div>
        <div className='FruitContainer'>
          <FruitFilter value={this.state.filterValue} onChange={(e) => this.handleFilterChange(e)} />
          <FruitList fruits={this.state.fruitsToDisplay} />
        </div>
      </div>
    )
  }

}

export default FruitContainer
