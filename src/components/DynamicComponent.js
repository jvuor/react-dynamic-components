import React from 'react'

export default function DynamicComponent(props) {

  return(
    <div>{props.data.name}</div>
  )
}
