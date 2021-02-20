// Dependencies
import Link from 'next/link'
import {useTheme} from 'provider/ThemeProvider'

// Style
import Breadcrumb from 'react-bootstrap/Breadcrumb'

const BreadcrumbData = ({ page, slug }) => {
  const { theme, toggleTheme } = useTheme()
  
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link href='/'>
            <a>
              Home
            </a>
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link href='/artikel'>
            <a>
              {page}
            </a>
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>{slug}</Breadcrumb.Item>
      </Breadcrumb>
      <style jsx global>
        {`
          .breadcrumb{
            background-color: ${theme.background} !important
          }
        `}
      </style>
    </>
  )
}

export default BreadcrumbData
