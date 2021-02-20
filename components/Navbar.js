// Dependencies
import Link from 'next/link'
import Image from 'next/image'

// Components
import ToggleSwitch from './ToggleSwitch'

// Styles
import { Navbar, Nav, Container } from 'react-bootstrap'
import styles from 'styles/Home.module.scss'

const Navbars = ({ theme, toggleTheme, active }) => {

  return (
    <>
      {/* NAVBAR STARTS */}
      <Navbar
        className={styles.navBar}
        expand="lg"
        sticky="top"
        variant={theme.type}
      >
        <Container>
          <Navbar.Brand className="mr-auto">
            <Link href="/">
              <div className={styles.navBar_brand}>
                <Image
                  src='/logo.png'
                  alt='Lumbung Pangan Digital'
                  layout='fill'
                />
              </div>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                {/* Toggle Switch */}
                {/* <ToggleSwitch
                  onChange={toggleTheme}
                /> */}
                
                {/* Link */}
                <Nav.Link
                  as={() => (
                    <Link href='/'>
                      <a
                        className={`${styles.navBar_link} ${styles.navBar_active}`}
                      >
                        Beranda
                      </a>
                    </Link>
                  )}  
                />
                <Nav.Link
                  as={() => (
                    <Link href='/artikel'>
                      <a className={`${styles.navBar_link}`}>
                        Artikel
                      </a>
                    </Link>
                  )}  
                />
              </Nav>
            </Navbar.Collapse>
        </Container>
        <style jsx global>{`
          .navbar{
            margin-bottom: 50px
          }
        `}</style>
      </Navbar>
    </>
  )
}

export default Navbars