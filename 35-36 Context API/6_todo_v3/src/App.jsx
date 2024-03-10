import React, { useState } from 'react';

import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";

import "./App.css";

import AllItems from "./components/AllItems";
import WelcomeMsg from './components/WelcomeMsg';
import { TodoItemsContext } from './store/toto-items-store';

function App() {

  const [todoItems, setTodoItems] = useState([]);

  const addNewItem = (itemTask, itemDate) => {

    setTodoItems((currValue) => {
      const newTodoItems = [...currValue, {
        task: itemTask,
        date: itemDate
      }];
      return newTodoItems;
    });
  };

  const deleteItem = (todoItemName) => {
    console.log(`item delete: ${todoItemName}`)
    const newTodoItems = todoItems.filter((item) => item.task !== todoItemName);
    setTodoItems(newTodoItems);

  
    
  }

  return <>
    <TodoItemsContext.Provider 
    value={{
      todoItems, 
      addNewItem,
      deleteItem,
    }}>
      <center className="todo-container">
        <h1>ToDo App version 2</h1>
        <AppName></AppName>
        <WelcomeMsg></WelcomeMsg>

        <div className="container  item_container">
          <AddTodo></AddTodo>
          <AllItems></AllItems>
        </div>

      </center>
    </TodoItemsContext.Provider>
  </>
}

export default App
