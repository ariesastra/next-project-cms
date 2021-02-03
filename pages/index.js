import {useState} from 'react'

// Components
import Layout from 'components/Layout'
import AuthorIntro from 'components/AuthorIntro'
import CardItem from 'components/CardItem'
import CardListItem from 'components/CardListItem'
import FilteringMenu from 'components/FilteringMenu'

// Libs & Other
import getAllBlogs from 'lib/api'
import {useGetBlogs} from 'actions/index'

// Style
import { Row, Col } from 'react-bootstrap';

const index = ({message, blogs: initialData}) => {
  // debugger
  // Viewing Options
  const [filter, setFilter] = useState({
    view: { list: 0 }
  })

  // GET ALL Blog Data
  const {data: blogs, error} = useGetBlogs(initialData)

  return (
    <Layout>
      {/* Author Intro */}
      <AuthorIntro />

      {/* Filtering Menu */}
      <FilteringMenu
        filter={filter} 
        onChange={ 
          (option, value) => {
            setFilter({...filter, [option]: value})
          }
        }
      />
      <hr/>
      
      {/* className from props */}
      <div className={`page-wrapper`}>
        <Row className="mb-5">
          {
            // looping
            blogs?.map(blog => 
              filter.view.list 
              ? <Col md="10" key={`${blog._id}-list`}>
                  <CardListItem 
                    title={blog.title} 
                    subtitle={blog.subtitle} 
                    date={blog.date}
                    avatar={blog.author.avatar}
                    author={blog.author.name}
                    // slug={blog.slug}
                    link={{
                      href: '/blogs/[slug]',
                      as: `/blogs/${blog.slug}`
                    }}
                  />
                </Col>
              : <Col md="4" key={blog._id}>
                  <CardItem 
                    title={blog.title} 
                    subtitle={blog.subtitle} 
                    image={blog.coverImage}
                    date={blog.date}
                    avatar={blog.author.avatar}
                    author={blog.author.name}
                    // slug={blog.slug}
                    link={{
                      href: '/blogs/[slug]',
                      as: `/blogs/${blog.slug}`
                    }}
                  />
                </Col>
            )
          }
        </Row>
      </div>

    </Layout>
  )
}

/*
This function is called during the build time
it will be called on Server / SSR.
This function also provide props to your page
and it will craete static / html page
*/
export async function getStaticProps(){
  const blogs = await getAllBlogs({offset: 0})
  return{
    props:{
      blogs,
    }
  }
}

export default index
