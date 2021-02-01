import Head from 'next/head'
import Router from 'next/router'

// Style

// Components
import Navbars from 'components/Navbar'

// Style
import { Container } from "react-bootstrap"
import NProgress from 'nprogress'

// NProgress
Router.onRouteChangeStart = url => {
  // console.log(url);
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

const Layout = ({children}) => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;1,700;1,900&display=swap" rel="stylesheet" />
      </Head>
      <Container>
        <Navbars />

        {/* Body Content */}
        <div className='blog-detail-page'>
          {children}
        </div>

        <footer className="page-footer">
          <div>
            <a href="#">courses</a>{' | '}
            <a href="#">github</a>{' | '}
            <a href="#">facebook</a>
          </div>
        </footer>
      </Container>
    </>
  )
}

export default Layout
