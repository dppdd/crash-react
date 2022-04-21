import React from 'react'
import './Table.css'

export default function Table (props) {
  return (
    <table className={`table ${props.striped ? 'table--striped' : ""}`}>
      {props.children}
    </table>
  )
}