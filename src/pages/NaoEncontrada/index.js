import styles from './NaoEncontrada.module.css'

function NaoEncontrada () {
    return (
        <section className={styles.container}>
            <h2>Ops! 
                <p/> O conteúdo que você procura não foi encontrado!</h2>
        </section>
    )
}

export default NaoEncontrada