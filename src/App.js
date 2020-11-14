import React, { Component } from 'react';
import Todos from './Todos';
export default class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'qqqq'},
      {id: 2, content: 'aaaa'}
    ]
  }
  render() {
    return (
      <div className="App">
        <h1 className="center blue-text">todos's</h1>
        <Todos todos={this.state.todos}/>
      </div>
    )
  }
}
