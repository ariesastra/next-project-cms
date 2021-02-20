// Dependencies
import Image from 'next/image'

// Components

// Styles
import { Row, Col } from 'react-bootstrap'
import styles from 'styles/Home.module.scss'

const Tentang = () => {
    
    return (
        <Row className={styles.tentang}>
            <Col sm md={6}>
                <div className={styles.tentangLeft}>
                    <Image
                        src='/gardern-3.jpg'
                        alt='Menjadi Petani Lumbung Pangan Digital'
                        layout='fill'
                    />
                </div>
            </Col>
            <Col sm md={6}>
                <div className={styles.tentangRight}>
                    <h2>
                        <highlight>Tentang</highlight>
                        <br />
                        Lumbung Pangan Digital
                    </h2>
                    <p>
                        Proident amet sint duis ea. Fugiat sit incididunt minim ea esse. Anim ut proident consequat aute eu. Laborum ullamco fugiat ex exercitation ipsum sint in. Cillum irure aliquip sint sunt. Velit ut nisi excepteur eu Lorem esse officia exercitation cillum in commodo consequat. Commodo officia ad id veniam eu.
                    </p>
                </div>
            </Col>
        </Row>
    )
}

export default Tentang