function AddTodo(){

    return <div class="row kg_row">
    <div class="col">
      <input type="date" placeholder="Enter deadline" />
    </div>
    <div class="col-6">
      <input type="text" placeholder="Enter your task" />
    </div>
    <div class="col">
      <button type="button" class="btn btn-success kg_button">Add</button>
    </div>
  </div>

}

export default AddTodo;