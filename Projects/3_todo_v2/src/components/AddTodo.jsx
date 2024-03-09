function AddTodo(){

    return <div className="row kg_row">
    <div className="col">
      <input type="date" placeholder="Enter deadline" />
    </div>
    <div className="col-6">
      <input type="text" placeholder="Enter your task" />
    </div>
    <div className="col">
      <button type="button" className="btn btn-success kg_button">Add</button>
    </div>
  </div>

}

export default AddTodo;