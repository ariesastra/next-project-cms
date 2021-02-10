//Dependencies
import Link from 'next/link'
import {urlFor} from 'lib/api'

// Style
import {Card} from 'react-bootstrap'

const CardListItem = ({title, subtitle, link, author, date, avatar}) => {
  return (
    <>
      {/* CardListItem STARTS */}
      <Card className={`fj-card fj-card-list`}>
        <div className="card-body-wrapper">
          <Card.Header
            className="d-flex flex-row">
            <img
              src={urlFor(author?.avatar).height(50).fit('max') || 'https://via.placeholder.com/150'}
              className="rounded-circle mr-3"
              height="50px"
              width="50px"
              alt="avatar"/>
              <div>
                <Card.Title className="font-weight-bold mb-1">{author.name}</Card.Title>
                <Card.Text className="card-date">{date}</Card.Text>
              </div>
          </Card.Header>
          <Card.Body>
            <Card.Title className="card-main-title">{title}</Card.Title>
            <Card.Text>{subtitle}</Card.Text>
          </Card.Body>
        </div>
        {
          link &&
          <Link {...link}>
            <a className="card-button">
              Read More
            </a>
          </Link>
        }
      </Card>
      {/* CardListItem ENDS */}
    </>
  )
}

export default CardListItem
