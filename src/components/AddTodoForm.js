import { React, useState } from 'react';
import InputWithLabel from "./InputWithLabel";
import './AddTodoForm.css';
import Airtable from 'airtable';
import PropTypes from 'prop-types';

var base = new Airtable({apiKey: process.env.REACT_APP_AIRTABLE_API_KEY}).base(process.env.REACT_APP_AIRTABLE_BASE_ID);

const AddTodoForm = ({ handleAddTodo, handleTitleChange, todoTitle }) => {

// function AddTodoForm({ onAddTodo }) {
//     const [todoTitle, setTodoTitle] = React.useState("");
//     const handleTitleChange = (event) => {
//         const newTodoTitle = event.target.value;
//         setTodoTitle(newTodoTitle);
//     };
//     const handleAddTodo = (event) => {
//         event.preventDefault();
//         onAddTodo({ fields: { Title: todoTitle }, id: Date.now() });
//         setTodoTitle("");
//     };


    return (
        <div >
            <form onSubmit={handleAddTodo} className='item'>
                <label className="label" >Title   
                <InputWithLabel todoTitle={todoTitle} 
                    handleTitleChange={handleTitleChange}>  
                </InputWithLabel></label>
                <button className='button'>Add</button>
            </form>
        </div>
    );
}

AddTodoForm.propTypes = {handleAddTodo: PropTypes.func}

export default AddTodoForm;
