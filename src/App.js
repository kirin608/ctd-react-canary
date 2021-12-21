import React, { useEffect, useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
//import TodoListItem from './TodoListItem';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    new Promise((resolve) =>
      setTimeout(
        () => resolve({ data: { todoList: JSON.parse(localStorage.getItem("savedTodoList")) || [] } }),
        2000
      )).then(result => {

        setTodoList(result.data.todoList);
        setIsLoading(false);
      });
  }, []);


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
