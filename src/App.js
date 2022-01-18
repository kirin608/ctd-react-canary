import React, { useEffect, useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
//import TodoListItem from './TodoListItem';
const { REACT_APP_AIRTABLE_API_KEY, REACT_APP_AIRTABLE_BASE_ID } = process.env;
function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.airtable.com/v0/${REACT_APP_AIRTABLE_BASE_ID}/Default`, {
      headers: {
        Authorization: `Bearer ${REACT_APP_AIRTABLE_API_KEY}`
      }
    })

      .then(response => response.json())
      .then(data => {
        console.log(data)
        setTodoList(data.records);
        setIsLoading(false);
      });
  }, [])



  useEffect(() => {
    if (!isLoading) localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }, [todoList]
  );
  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo])
  };
  function removeTodo(id) {
    const newList = todoList.filter((item) =>
      item.id !== id);

    setTodoList([...newList])
  };

  return (
    <>
      <h1>Todo list</h1>
      <AddTodoForm onAddTodo={addTodo} />
      {isLoading ?
        <p>Loading...</p>
        : [TodoList]}
      <TodoList todoList={todoList} onRemoveTodo={removeTodo} />

    </>
  );
}
export default App;
