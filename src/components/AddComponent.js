import React, {Component} from 'react'

export default class AddComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {name: '', variables: ''}
  }

  handleValueChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const vars = this.state.variables
      .split(',')
      .map(a => a.trim())
      .map(a => parseInt(a))
      .filter(a => !Number.isNaN(a) && (a >= 0 && a < 10))
    console.log(vars)
    this.props.callback(this.state.name, vars)
    this.setState({name: ''})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <button>Add Component</button>
        <input type='text' onChange={this.handleValueChange} value={this.state.name} name='name'></input>
        <input type='text' onChange={this.handleValueChange} value={this.state.variables} name='variables'></input>
      </form>
    )
  }
}
