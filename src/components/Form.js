import React from "react";

const Form = ({setInputText, todos, setTodos, inputText, setStatus}) => {
    //collects user input value
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };
    //gets the inputText from App.js and puts it in setTodos
    const submitTodoHandler = (e) => {
        //prevents from refreshing the page
        e.preventDefault();
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random()*1000},
        ]);
        setInputText("");
    };
    const statusHandler = (e) => {
        setStatus(e.target.value);
    };

    return (
        <form>
        {/* thid */}
        <input 
            value={inputText}
            onChange={inputTextHandler} 
            type="text" 
            className="todo-input"    
        />
        <button onClick={submitTodoHandler} className="todo-button" type="submit">
            <i className="fas fa-plus-square"></i>
        </button>
        {/*filter section */}
        <div className="select">
            <select onChange={statusHandler} name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
        </form>
    );
};

export default Form;