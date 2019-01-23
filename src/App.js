import React, { Component } from 'react';

import AddComponent from './components/AddComponent'
import ComponentFactory from './components/ComponentFactory'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        10: 10
      },
      components: [],
      identity: 0
    }
  }

  addComponent (name) {
    const id = this.state.identity + 1
    const newComponent = { id, name, variables: [1, 2] }
    const newComponentList = [...this.state.components, newComponent]
    this.setState({ components: newComponentList, identity: id })
  }

  deleteComponent (id) {
    this.setState({
      components: this.state.components.filter(c => c.id !== id)
    })
  }

  render() {
    return (
      <div>
        <AddComponent callback={(name) => this.addComponent(name)} />
        <ComponentFactory components={this.state.components} />
      </div>
    );
  }
}

export default App;
