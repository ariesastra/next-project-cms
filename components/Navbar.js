// Dependencies
import Link from 'next/link'

// Components
import ToggleSwitch from './ToggleSwitch'

// Styles
import { Navbar, Nav } from 'react-bootstrap'

const Navbars = ({theme, toggleTheme}) => {
  return (
    <>
      {/* NAVBAR STARTS */}
      <Navbar
        className="fj-navbar fj-nav-base"
        bg="transparent"
        expand="lg"
        variant={theme.type}
      >
        <Navbar.Brand className="fj-navbar-brand mr-auto">
          <Link href="/">
            <a style={{color: theme.fontColor}}>Arie-Blogs</a>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {/* Toggle Switch */}
              <ToggleSwitch
                onChange={toggleTheme}
              />
              
              {/* Link */}
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