// Dependencies
import Link from 'next/link'

// Styles
import {Navbar, Nav} from 'react-bootstrap'

const Navbars = () => {
  return (
    <>
    {/* NAVBAR STARTS */}
    <Navbar
    className="fj-navbar fj-nav-base"
    bg="transparent"
    expand="lg" >
      <Navbar.Brand className="fj-navbar-brand">
        <Link href="/">
          <a>Arie-Blogs</a>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link
            as={() => (
              <Link href='/'>
                <a className="fj-navbar-item fj-navbar-link">Home</a>
              </Link>
            )}  
          />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </>
  )
}

export default Navbars