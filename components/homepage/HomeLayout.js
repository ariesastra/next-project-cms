// Dependencies
import { useTheme } from 'provider/ThemeProvider'

// Components
import Navbars from 'components/Navbar'
import Footer from 'components/Footer'

// Style
import { Container } from "react-bootstrap"
import styles from 'styles/Home.module.scss'

const HomeLayout = ({ children }) => {
    // For Theme
    const { theme, toggleTheme } = useTheme()

    return (
        <>
            {/* Navigation */}
            <Navbars
                theme={theme.type}
                toggleTheme={toggleTheme}
            />
            
            {/* Content */}
            <Container className={styles.homeStyle}>
                {children}
            </Container> 
            
            {/* Footer */}
            <Footer />
            <style jsx global>{`
                body{
                    background-color : #f4f7f9 !important;
                }
            `}</style>
        </>
    )
}

export default HomeLayout