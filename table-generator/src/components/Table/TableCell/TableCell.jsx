import React, { useContext } from 'react'

function TableCell (props) {
  return props.scope === 'thead' ? (
    <th>{props.children}</th>
  ) : (
    <td>{props.children}</td>
  )
}

export default TableCell
