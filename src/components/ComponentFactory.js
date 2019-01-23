import React, { Component } from 'react'
import DynamicComponent from './DynamicComponent'

export default class ComponentFactory extends Component {
  constructor(props) {
    super(props)
  }
 
  render() {
    if (this.props.components.length === 0) {
      return(null)
    } else {
      return(
        <div>
          {this.props.components.map(component => <DynamicComponent key={component.id} name={component.name} variables={component.variables} data={this.props.data} />)}
        </div>
      )
    }
  }
}
