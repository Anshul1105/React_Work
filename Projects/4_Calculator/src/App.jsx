
import styles from './App.module.css'
import ButtonsContainer from './components/ButtonsContainer'
import Display from './components/Display'

function App() {
  return <>
    <div className={styles.calculator} >
      {/* <input className={styles.display} type="text" /> */}
      <Display></Display>
      <ButtonsContainer></ButtonsContainer>
    </div>
  </>
}

export default App
