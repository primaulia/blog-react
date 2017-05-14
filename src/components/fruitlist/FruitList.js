import React from 'react'

const FruitList = (props) => {
  return (
    <ul>
      {
        props.fruits.map((fruit, index) => {
          return <li className="FruitContainer-listItem" key={index}>{fruit}</li>
        })
      }
    </ul>
  )
}

export default FruitList
