import styles from "./Container.module.css"

const Container = ({children}) => {

    return <div className={styles.Container}>{children}</div>

}
// const Container = (props) => {

//     return <div className={styles.Container}>{props.children}</div>

// }

export default Container;