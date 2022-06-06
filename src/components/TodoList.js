import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.css';

function TodoList({ todoList, onRemoveTodo }) {

  return (
    <>
    
      {todoList.map(function (item) {
        return <TodoListItem todo={item} key={item.id}
        id={item.id} onRemoveTodo={onRemoveTodo} />
      })}
    
    </>
  )
}
export default TodoList;