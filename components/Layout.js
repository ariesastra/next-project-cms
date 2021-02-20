import Head from 'next/head'

// Style

// Components
import Navbars from 'components/Navbar'
import { useTheme } from 'provider/ThemeProvider'
import Footer from 'components/Footer'

// Style
import { Container } from "react-bootstrap"

const Layout = ({ children }) => {
  const { theme, toggleTheme } = useTheme()
  
  return (
    <div className={theme.type}>
      {/* <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;1,700;1,900&display=swap" rel="stylesheet" />
      </Head> */}
      <Navbars
        theme={theme}
        toggleTheme={toggleTheme}
      />
      
      <Container>
        {/* Body Content */}
        <div className='blog-detail-page'>
          {children}
        </div>
      </Container>
      
      {/* Footer */}
      <Footer />

      <style jsx global>
        {`
          html, body {
            background: ${theme.background};
            color: ${theme.fontColor};
            transition: color 0.2s ease-out 0s, background 0.2s ease-out 0s;
          }
        `}
      </style>
    </div>
  )
}

export default Layout
