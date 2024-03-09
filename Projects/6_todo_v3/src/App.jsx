import React, { useState } from 'react';

import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";

import "./App.css";

import AllItems from "./components/AllItems";
import WelcomeMsg from './components/WelcomeMsg';


function App() {

  const initialTodoItems = [
    {
      task: "buy milk",
      date: "01/02/024",
    },
    {
      task: "but banana",
      date: "jab time mile",
    },
  ];

  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const handleNewItem = (itemTask, itemDate) => {
    console.log(`new item added : ${itemTask} Date: ${itemDate}`)

    setTodoItems((currValue) => {
      const newTodoItems = [...currValue, {
        task: itemTask,
        date: itemDate
      }];
      return newTodoItems;
    });

    // setTodoItems((currValue) => this code is same as above just shorter
    //   [...currValue, {
    //     task: itemTask,
    //     date: itemDate
    //   },]
    // );
  };

  const handleDeleteItem = (todoItemName) => {
    // console.log(`item delete: ${todoItemName}`)
    const newTodoItems = todoItemName.filter((item) => item.task !== todoItemName);
    setTodoItems(newTodoItems);
  }

  return <>
    <center className="todo-container">
      <h1>ToDo App version 2</h1>
      <AppName></AppName>

      {todoItems.length === 0 && <WelcomeMsg></WelcomeMsg>}

      <div className="container  item_container">
        <AddTodo onNewItem={handleNewItem}></AddTodo>
        <AllItems MytodoItems={todoItems} onDeleteCilck={handleDeleteItem}></AllItems>
      </div>

    </center>
  </>
}

export default App
