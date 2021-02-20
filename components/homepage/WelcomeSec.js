// Dependencies
import Image from 'next/image'

// Components

// Style
import { Container, Row, Col } from 'react-bootstrap'
import styles from 'styles/Home.module.scss'

const WelcomeSec = () => {
    
    return (
        <Row className={styles.welcome}>
            <Col sm md={6}>
                <div className={styles.welcomeLeft}>
                    <h1>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        <br/>
                        <highlight>sed do eiusmod tempor</highlight>.
                    </h1>
                    <p>
                        Et aliqua in deserunt laborum mollit dolore. Magna quis ad aliqua sint enim dolor ullamco nulla culpa dolore eiusmod irure. Ea exercitation veniam Lorem occaecat qui sunt. Eu non ea tempor eiusmod.
                    </p>
                </div>
            </Col>
            <Col sm md={6}>
                <div className={styles.welcomeRight}>
                    <Image
                        src='/welcome-1.jpeg'
                        alt='Lumbung Pangan Digital'
                        layout='fill'
                    />
                </div>
            </Col>
        </Row>
    )
}

export default WelcomeSec