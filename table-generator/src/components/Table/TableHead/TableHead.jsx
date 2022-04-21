import React, { useContext } from 'react'

//	TableHead
// - light - thead--light
// - dark  - thead--dark
// - large  - thead--large

export default function TableHead (props) {
  return (
    <thead
      className={
        `${props.large && 'thead--large'}  ${props.dark && 'thead--dark'}`
      }
    >
      {props.children}
    </thead>
  )
}
