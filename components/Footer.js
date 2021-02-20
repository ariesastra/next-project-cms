import styles from 'styles/Home.module.scss'

const Footer = () => {
    const year = new Date()
    
    return (
        <footer className={styles.footer}>
            <div>
                <p>Lumbung Panngan Digital {year.getFullYear()}</p>
            </div>
        </footer>
    )
}

export default Footer