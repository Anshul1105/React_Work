function TodoItem1(){

    let task = "Leetcode 4 Questions";
    let date = "31/01/2024"

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

export default TodoItem1;