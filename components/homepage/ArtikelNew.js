// Dependencies
import Image from 'next/image'
import Link from 'next/link'

// Components

// Style
import { Row, Col } from 'react-bootstrap'
import styles from 'styles/Home.module.scss'

const ArtikelNew = ({blogs}) => {
    // console.log(blogs);
    return (
        <>
            <Row className={styles.artikel}>
                <Col sm md>    
                    <h3>
                        <highlight>Artikel</highlight>
                        <br/>
                        Lumbung Pangan Digital
                    </h3>
                </Col>
            </Row>
            <Row className={styles.artikel}>
                <Col sm md={12} lg={6} >
                    <div className={styles.artikel_Image_Primary}>
                        <Image
                            src='/gardern-2.jpg'
                            alt='Contoh Artikel'
                            layout='fill'
                        />
                    </div>
                    <div className={styles.artikel_Title_Primary}>
                        <Link href='/'>
                            <a>
                                Minim mollit in cillum dolor adipisicing commodo irure amet do sit voluptate. Velit sit ea veniam voluptate labore aliquip commodo.
                            </a>
                        </Link>
                    </div>
                </Col>
                <Col sm md={12} lg={3} >
                    <div className={styles.artikel_Image}>
                        <Image
                            src='/gardern-2.jpg'
                            alt='Contoh Artikel'
                            layout='fill'
                        />
                    </div>
                    <div className={styles.artikel_Title}>
                        <Link href='/'>
                            <a>
                                Minim mollit in cillum dolor adipisicing commodo irure amet do sit voluptate. Velit sit ea veniam voluptate labore aliquip commodo.
                            </a>
                        </Link>
                    </div>
                    <div className={styles.artikel_Image}>
                        <Image
                            src='/gardern-2.jpg'
                            alt='Contoh Artikel'
                            layout='fill'
                        />
                    </div>
                    <div className={styles.artikel_Title}>
                        <Link href='/'>
                            <a>
                                Minim mollit in cillum dolor adipisicing commodo irure amet do sit voluptate. Velit sit ea veniam voluptate labore aliquip commodo.
                            </a>
                        </Link>
                    </div>
                </Col>
                <Col sm md={12} lg={3} >
                    <div className={styles.artikel_Image}>
                        <Image
                            src='/gardern-2.jpg'
                            alt='Contoh Artikel'
                            layout='fill'
                        />
                    </div>
                    <div className={styles.artikel_Title}>
                        <Link href='/'>
                            <a>
                                Minim mollit in cillum dolor adipisicing commodo irure amet do sit voluptate. Velit sit ea veniam voluptate labore aliquip commodo.
                            </a>
                        </Link>
                    </div>
                    <div className={styles.artikel_Image}>
                        <Image
                            src='/gardern-2.jpg'
                            alt='Contoh Artikel'
                            layout='fill'
                        />
                    </div>
                    <div className={styles.artikel_Title}>
                        <Link href='/'>
                            <a>
                                Minim mollit in cillum dolor adipisicing commodo irure amet do sit voluptate. Velit sit ea veniam voluptate labore aliquip commodo.
                            </a>
                        </Link>
                    </div>
                    <div className='btnArea'>
                        <Link href='/artikel'>
                            <a className={`btnLPD ${styles.btnLPD}`}>
                                Artikel Lainnya
                            </a>
                        </Link>
                    </div>
                </Col>
            </Row>
        </>    
    )
}

export default ArtikelNew