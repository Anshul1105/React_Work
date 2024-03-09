function TodoItems({ task, date }) {

  // let task = "Leetcode 4 Questions";
  // let date = "31/01/2024"

  return (<div className="row kg_row container">
    <div className="col-4">
      {date}
    </div>
    <div className="col-6">
      {task}
    </div>
    <div className="col-2">
      <button type="button" className="btn btn-danger kg_button">Remove</button>
    </div>
  </div>
  )
}

export default TodoItems;