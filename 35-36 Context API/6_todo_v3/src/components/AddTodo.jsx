import { useState, useRef } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { useContext } from "react";
import { TodoItemsContext } from "../store/toto-items-store";


function AddTodo({ onNewItem }) {

  const { addNewItem } = useContext(TodoItemsContext);
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");



  // const handleAddBtnClicked = (event) => {
  //   event.preventDefault();
  //   const todoTask = todoTaskElement.current.value;
  //   const todoDate = todoDateElement.current.value;
  //   console.log(`${todoTask} task is due on: ${todoDate}`)
  //   onNewItem(todoTask, todoDate);
  //   todoTaskElement.current.value="";
  //   todoDateElement.current.value="";
  //   // setDate("");
  //   // setTask("");
  // }
  const handleNameChange = (event) => {
    setTask(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    addNewItem(task, date);
    setDate("");
    setTask("");
  };


  return (<div className="container text-center">
    <div className="row kg_row">

      <div className="col-6">
        <input 
        type="text" 
        placeholder="Enter your task" 
        value={task}
        onChange={handleNameChange}/>
        
      </div>
      <div className="col-4">
        <input type="date"  
        placeholder="Enter deadline"
        value={date}
        onChange={handleDateChange} />
        
      </div>
      <div className="col-2">
        <button 
        type="button" 
        className="btn btn-success kg_button"
        onClick={handleAddButtonClicked}
        >
          Add  <IoMdAddCircle /></button>
      </div>

    </div>
  </div>
  )
}

export default AddTodo;