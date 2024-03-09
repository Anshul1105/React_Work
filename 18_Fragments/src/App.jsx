import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import FoodItems from './components/FoodItems';
import ErrorMsg from './components/ErrorMsg';
import Contianer from './components/Container';
import FoodInput from './components/FoodInput';

function App() {

  // let food = ["a", "b", "c", "d", "e", "f"];

  // let textStateArr = useState("Items entered by the user");
  // let textToShow = textStateArr[0];
  // let setTextState = textStateArr[1];
  // sort notation for the above 3 line code =>

  // let [textToShow, setTextState] = useState();

  let [food, setFood] = useState([]);

  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...food, newFoodItem];
      setFood(newItems);
      console.log(`food value entered is ` + newFoodItem);
    }

    //setTextState(event.target.value);
  }


  return <><Contianer>

    <h1 className='food-heading'>Fragments Heading 1</h1>

    <FoodInput handelOnKeyDown={onKeyDown}></FoodInput>
    {/* <p>{textToShow}</p> */}
    <FoodItems items={food}></FoodItems>
    <ErrorMsg items={food}></ErrorMsg>
  </Contianer>

    <Contianer>
      <p>This is a new paragraph, under 2nd container</p>
    </Contianer>
  </>
}

export default App
