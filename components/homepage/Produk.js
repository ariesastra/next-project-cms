// Dependencies
import Image from 'next/image'

// Components

// Styles
import { Col, Row } from 'react-bootstrap'
import styles from 'styles/Home.module.scss'

const Produk = () => {
    
    return (
        <>
            <Row className={styles.produk}>
                <Col sm md>
                    <h2>
                        <highlight>Produk</highlight>
                        <br />
                        Lumbung Pangan Digital
                    </h2>
                    <p>
                        Aliqua aliquip eu eiusmod est. Et Lorem minim nisi culpa reprehenderit Lorem Lorem sunt laboris. Culpa amet nulla commodo laboris.
                    </p>
                </Col>
            </Row>
            <Row className={styles.produk}>
                <Col sm md={4}>
                    <div className={styles.produk_Sub}>
                        <div className={styles.produk_SubImg}>
                            <Image
                                src='/produk-1.jpg'
                                alt='Lumbung Pangan Digital'
                                layout='fill'
                            />
                        </div>
                        <div className={styles.produk_SubDesc}>
                            <h4>
                                Pembibitan
                            </h4>
                            <p>
                                Nulla reprehenderit reprehenderit commodo nostrud laborum deserunt ex do Lorem voluptate aute deserunt eiusmod do. Magna elit dolore non aute consequat sunt et ea incididunt culpa labore voluptate. Sint velit tempor nostrud duis non non ex velit aute.
                            </p>
                        </div>
                    </div>
                </Col>
                <Col sm md={4}>
                    <div className={styles.produk_Sub}>
                        <div className={styles.produk_SubImg}>
                            <Image
                                src='/produk-2.jpg'
                                alt='Lumbung Pangan Digital'
                                layout='fill'
                            />
                        </div>
                        <div className={styles.produk_SubDesc}>
                            <h4>
                                Pendampingan
                            </h4>
                            <p>
                                Nulla reprehenderit reprehenderit commodo nostrud laborum deserunt ex do Lorem voluptate aute deserunt eiusmod do. Magna elit dolore non aute consequat sunt et ea incididunt culpa labore voluptate. Sint velit tempor nostrud duis non non ex velit aute.
                            </p>
                        </div>
                    </div>
                </Col>
                <Col sm md={4}>
                    <div className={styles.produk_Sub}>
                        <div className={styles.produk_SubImg}>
                            <Image
                                src='/produk-3.jpg'
                                alt='Lumbung Pangan Digital'
                                layout='fill'
                            />
                        </div>
                        <div className={styles.produk_SubDesc}>
                            <h4>
                                Panen
                            </h4>
                            <p>
                                Nulla reprehenderit reprehenderit commodo nostrud laborum deserunt ex do Lorem voluptate aute deserunt eiusmod do. Magna elit dolore non aute consequat sunt et ea incididunt culpa labore voluptate. Sint velit tempor nostrud duis non non ex velit aute.
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Produk