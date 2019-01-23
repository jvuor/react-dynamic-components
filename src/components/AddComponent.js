import React, {Component} from 'react'

export default class AddComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {name: ''}
  }

  handleValueChange = (event) => {
    this.setState({name: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.callback(this.state.name)
    this.setState({name: ''})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <button>Add Component</button>
        <input type='textbox' onChange={this.handleValueChange} value={this.state.name}></input>
      </form>
    )
  }
}
