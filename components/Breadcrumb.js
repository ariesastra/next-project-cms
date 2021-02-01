import Link from 'next/link'

// Dependencies

// Style
import Breadcrumb from 'react-bootstrap/Breadcrumb'

const BreadcrumbData = ({page, slug}) => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item>
        <Link href='/'>
          <a>
            Home
          </a>
        </Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        {page}
      </Breadcrumb.Item>
      <Breadcrumb.Item active>{slug}</Breadcrumb.Item>
    </Breadcrumb>
  )
}

export default BreadcrumbData
