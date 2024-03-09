// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem1 from "./components/TodoItem1";
import TodoItem2 from "./components/TodoItem2";

import "./App.css";


function App() {
  return <center class="todo-container">
    <h1>ToDo App</h1>
    <AppName></AppName>
    {/* <div className="container text-center">
      <div class="row">
        <div class="col-8">col-8</div>
        <div class="col-4">col-4</div>
      </div>
    </div> */}
    <div className="container  item_container">
      <AddTodo></AddTodo>
      <AddTodo></AddTodo>
      <div className="item_container">
        <TodoItem1></TodoItem1>
        <TodoItem2></TodoItem2>

      </div>

    </div>
  </center>
}

export default App
