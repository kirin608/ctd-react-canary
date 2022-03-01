import React, { Fragment, useRef, useEffect } from "react";
import "./InputWithLabel.css";
const InputWithLabel = ({ todoTitle, handleTitleChange, children }) => {
    const inputRef = useRef()
    useEffect(() => { inputRef.current.focus() });
    return (
        <Fragment>
            <label htmlFor="todoTitle" >     {children} </label>
            <input
                id="todoTitle"
                type="text"
                name="title"
                value={todoTitle}
                onChange={handleTitleChange}
                ref={inputRef}
                maxLength={55}
        
                className="input"
                
            ></input>
        </Fragment>
    )
}
export default InputWithLabel