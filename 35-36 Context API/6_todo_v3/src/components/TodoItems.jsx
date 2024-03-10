import { MdDeleteForever } from "react-icons/md";
import { TodoItemsContext } from "../store/toto-items-store";
import { useContext } from "react";

function TodoItems({ task, date }) {

  // let task = "Leetcode 4 Questions";
  // let date = "31/01/2024"

  const {deleteItem} = useContext (TodoItemsContext);

  return (<div className="row kg_row container">
    <div className="col-6">
      {task}
    </div>
    <div className="col-4">
      {date}
    </div>
    <div className="col-2">
      <button type="button" className="btn btn-danger kg_button" 
      // onClick={()=> onDeleteClick(task)}
      onClick={() => deleteItem(task)}
      >Delete <MdDeleteForever />
      </button>
    </div>
  </div>
  )
}

export default TodoItems;