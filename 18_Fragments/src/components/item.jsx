// //importing css module
// import styles from "./Item.module.css"

// const Item = ({ foodItem,bought, handleClickBtn }) => {

//     const handleClick = (event) => {
//         // console.log(event);
//         console.log(`lol you clicked the ${foodItem} button`) 
//     }

//     return (
//         <li className={`${styles['kg-item']} list-group-item ${bought && 'active'}`}><span className={styles['kg-span']}>An item is {foodItem}</span> <button className={`${styles.button} btn btn-success`}
//             // onClick={(event) => handleClick(event)}
//             onClick={handleClickBtn}
//         >Click!!</button></li>
//     );
// };

// export default Item;

import styles from "./Item.module.css";

const Item = ({ foodItem, bought, handleBuyButton }) => {
  return (
    <li
      className={`${styles["kg-item"]} list-group-item ${bought && "active"}`}
    >
      <span className={styles["kg-span"]}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;