import { useState, useRef } from "react";
import { IoMdAddCircle } from "react-icons/io";


function AddTodo({ onNewItem }) {

  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const todoTaskElement = useRef();
  const todoDateElement = useRef();

  // const handleTaskChange = (event) => {
  //   setTask(event.target.value);
  //   noOfUpdates.current+=1;

  // }
  // const handleDateChange = (event) => {
  //   setDate(event.target.value);
  //   console.log(noOfUpdates.current);
  // }

  const handleAddBtnClicked = (event) => {
    event.preventDefault();
    const todoTask = todoTaskElement.current.value;
    const todoDate = todoDateElement.current.value;
    console.log(`${todoTask} task is due on: ${todoDate}`)
    onNewItem(todoTask, todoDate);
    todoTaskElement.current.value="";
    todoDateElement.current.value="";
    // setDate("");
    // setTask("");
  }


  return (<div className="container text-center">
    <form className="row kg_row" onSubmit={handleAddBtnClicked}>

      <div className="col-6">
        <input type="text" ref={todoTaskElement} placeholder="Enter your task" />
      </div>
      <div className="col-4">
        <input type="date" ref={todoDateElement} placeholder="Enter deadline" />
      </div>
      <div className="col-2">
        <button type="submit" className="btn btn-success kg_button"
        >
          Add  <IoMdAddCircle /></button>
      </div>

    </form>
  </div>
  )
}

export default AddTodo;