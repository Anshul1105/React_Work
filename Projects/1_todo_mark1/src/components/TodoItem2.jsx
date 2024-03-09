function TodoItem2(){

    let date = "31/01/2024";
    let task = "Notes of OE";

    return <div class="row kg_row">
        <div class="col">
          {date}
        </div>
        <div class="col-6">
        {task}
        </div>
        <div class="col">
          <button type="button" class="btn btn-danger kg_button">Remove</button>
        </div>
      </div>

}

export default TodoItem2;