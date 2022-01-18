import React from "react";

const TodoListItem = ({ todo, onRemoveTodo, id }) => {
        return (
                <li>
                        {todo.fields.Title}
                        <button type="button" onClick={() =>onRemoveTodo(id)}>Remove</button>
                </li>
        )
}
export default TodoListItem;
