import React from 'react'

export default function DynamicComponent(props) {

  return(
    <div>
      <b>{props.name}<br /></b>
      {props.variables.map(variable => (
        <span key={variable}>
          {variable}:{props.data[variable]}<br />
        </span>
      ))}
    </div>
  )
}
