import styles from "./ButtonsContainer.module.css"

const ButtonContainer = ({onButtonClick}) => {

  const buttonNames = ['C', '+', '-', '*', '/', '=', '9', '8', '7', '6', '5', '4', '3', '2', '1', '0', '.']

  return (<div className={styles.btnContainer}>

    {buttonNames.map(buttonName => <button className={styles.button} 
    onClick={() => onButtonClick(buttonName)}>
      {buttonName}</button>)}

 
  </div>
  );

};
export default ButtonContainer;