import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({todos, handleDelete, handleToggle}) => {
  return (
        <ul className='list-group list-group-flush'>
            {todos.map((todos, i) =>(
                <TodoListItem
                    key={todos.id}
                    todos={todos}
                    i={i}
                    handleDelete={handleDelete}
                    handleToggle ={handleToggle}
                
                />
            ))}
        </ul>
  )
}
