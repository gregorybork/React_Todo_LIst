import React, { useState,useEffect} from "react";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

import './App.css';


function App() {

  //states
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //run once when app starts
  useEffect(() => {
    getLocalTodos();
  }, []);

  //use effect
  useEffect(() => {
    //function
    const filterHandler = () => {
      switch (status) {
        case "completed":
          setFilteredTodos(todos.filter((todo) => todo.completed === true));
          break;
        case "uncompleted":
          setFilteredTodos(todos.filter((todo) => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    };
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  //save the local todos
  const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));
    }else{
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };



  return (
    <div className="App">
      <header>
        <h1>Todo List </h1>
      </header>
      <Form 
        inputText = {inputText} 
        todos={todos} 
        setTodos = {setTodos} 
        setInputText = {setInputText} 
        setStatus = {setStatus}
      />
      <ToDoList 
        todos = {todos} 
        setTodos = {setTodos}
        filteredTodos = {filteredTodos}
      />
    </div>
  );
}

export default App;
