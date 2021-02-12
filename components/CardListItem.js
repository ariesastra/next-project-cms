//Dependencies
import Link from 'next/link'
import moment from 'moment'

// Style
import {Card} from 'react-bootstrap'

const CardListItem = ({title, subtitle, link, author, date, mode = 'normal'}) => {
  return (
    <>
      {/* CardListItem STARTS */}
      <Card className={`fj-card fj-card-list`}>
        <div className="card-body-wrapper">
          <Card.Header
            className="d-flex flex-row">
            <img
              src={ author?.avatar || 'https://via.placeholder.com/150' }
              className="rounded-circle mr-3"
              height="50px"
              width="50px"
              alt="avatar"/>
            <div>
              {
                mode === 'placeholder'
                  ? <div>
                      <Card.Title className="font-weight-bold mb-1">Placeholder Author</Card.Title>
                      <Card.Text className="card-date">Placeholder Date</Card.Text>
                    </div>
                  : 
                    <div>
                      <Card.Title className="font-weight-bold mb-1">{author.name}</Card.Title>
                      <Card.Text className="card-date">{moment(date).format('LLLL')}</Card.Text>
                    </div>

              }
            </div>
          </Card.Header>
          <Card.Body>
            {
              mode === 'placeholder'
                ? <>
                    <Card.Title className="font-weight-bold mb-1">Placeholder Title</Card.Title>
                    <Card.Text className='card-date'>Placeholder Subtitle</Card.Text>
                  </>
                : <>
                    <Card.Title className="card-main-title">{title}</Card.Title>
                    <Card.Text>{subtitle}</Card.Text>
                  </>
            }
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
