// Dependencies
import Link from 'next/link'
import { urlFor } from 'lib/api'
import moment from 'moment'

// Style
import {Card} from 'react-bootstrap'

const CardItem = ({title, subtitle, image, date, author, link, mode = 'normal'}) => {

  return (
    <>
      <Card className={`fj-card ${mode}`}>
        <div className={`card-body-wrapper ${!image ? 'no-image' : ''}`}>
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
                  ? <>
                      <Card.Title className="font-weight-bold mb-1">Placeholder Author</Card.Title>
                      <Card.Text className="card-date">Placeholder Date</Card.Text>
                    </>
                  : <>
                      <Card.Title className="font-weight-bold mb-1">{author.name ||'No Author'}</Card.Title>
                      <Card.Text className="card-date">{moment(date).format('LLLL')}</Card.Text>
                    </>
              }
            </div>
          </Card.Header>
          <div className="view overlay">
            {
              mode === 'placeholder'
                ? <div className='image-placeholder' />
                : image.asset
                &&  <Card.Img 
                      src={
                            urlFor(image)
                            .height(200)
                            .crop('center')
                            .fit('clip')
                            .url()
                          }
                      alt="Card image cap"
                    />
            }
          </div>
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
    </>
  )
}

export default CardItem
