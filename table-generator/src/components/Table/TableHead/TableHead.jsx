import React, { useContext } from 'react'

export default function TableHead (props) {
  return (
    <thead
      className={
				`${props.light ? 'thead--light ' : ''}${props.large ?'thead--large ' : ''} ${props.dark && 'thead--dark ' || ''}`
      }
    >
      {props.children}
    </thead>
  )
}
