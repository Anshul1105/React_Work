
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";


import "./App.css";

import AllItems from "./components/AllItems";


function App() {

  const itemObj = [
    {
      work: "buy milk",
      due: "01/02/024",
    },
    {
      work: "but banana",
      due: "jab time mile",
    },
  ];

  return <>
    <center className="todo-container">
      <h1>ToDo App version 2</h1>
      <AppName></AppName> 

      <div className="container  item_container">
        <AddTodo></AddTodo>
        <AddTodo></AddTodo>
        <AllItems itemObj={itemObj}></AllItems>
      </div> 

    </center>
  </>
}

export default App
