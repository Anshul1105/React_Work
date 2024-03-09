import styles from "./FoodInput.module.css"

const FoodInput = ({ handelOnKeyDown }) => {

    // const handleOnChange =(event)=>{
    //     console.log(event.target.value)
    // }

    return <>
        <input type="text" placeholder="Enter your item" 
        className={styles.foodInput}
            onKeyDown={handelOnKeyDown} ></input>
    </>

}
export default FoodInput;