import React from 'react'
import PropTypes from 'prop-types'

const ListItem = (props) => (
  <ul>
    <li>{props.doThis}</li>
  </ul>
)

ListItem.propTypes = {
  doThis: PropTypes.array
}

export default ListItem

// class ListItem extends React.Component {
//
//   render() {
//     return (
//       <ul>
//         <li>{this.props.doThis}</li>
//       </ul>
//     );
//   }
// }
