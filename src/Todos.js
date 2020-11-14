import React from 'react'

const Todos = ({todos}) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="collection-item" key={todo.id}>
          <p>
            <label>
              <input type="checkbox" />
              <span>{todo.content}</span>
            </label>
          </p>
        </div>
      )
    })
  ) : (
    <p className="center">no todo</p>
  )
  return (
    <div className="todos collection">
      {todoList}
    </div>
  )
}

export default  Todos
