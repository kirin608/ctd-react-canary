import React from "react";
import styles from './TodoListItem.module.css';
const TodoListItem = ({ todo, onRemoveTodo, id }) => {
        return (
                <div className={styles.item2}>
                        {todo.fields.Title}
                        <button type="button" className={styles.button}
                         onClick={() =>onRemoveTodo(id)}>Remove</button>
                </div>
        )
}
export default TodoListItem;
