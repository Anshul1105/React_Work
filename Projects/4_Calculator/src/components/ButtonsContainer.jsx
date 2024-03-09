import styles from "./ButtonsContainer.module.css"

const ButtonContainer =()=>{

    const buttonNames = ['C','+','-','*','/','=','9','8','7','6','5','4','3','2','1','0','.']

    return <div className={styles.buttonContainer}>

        {buttonNames.map(buttonName => <button className={styles.button}>{buttonName}</button>)}
        
        {/* <button className={styles.button}>1</button>
        <button className={styles.button}>2</button>
        <button className={styles.button}>3</button>
        <button className={styles.button}>4</button>
        <button className={styles.button}>5</button>
        <button className={styles.button}>6</button>
        <button className={styles.button}>7</button>
        <button className={styles.button}>8</button>
        <button className={styles.button}>9</button>
        <button className={styles.button}>0</button>
        <button className={styles.button}>Clear</button> */}
      </div>

};
export default ButtonContainer;