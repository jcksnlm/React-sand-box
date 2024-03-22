import styles from './Frase.module.css'

function Frase (props) {
    return (
        <>
            <div className={styles.fraseContainer}>
            <p>{props.content}</p>
            </div>
        </>
    )
}

export default Frase