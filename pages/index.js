import {useState} from 'react'

// Components
import Layout from 'components/Layout'
import AuthorIntro from 'components/AuthorIntro'
import FilteringMenu from 'components/FilteringMenu'
import {useGetBlogsPages} from 'actions/pagination'

// Libs & Other
import {getPaginatedBlogs} from 'lib/api'

// Style
import { Row, Button } from 'react-bootstrap';

export default function Home({blogs}){
  // debugger
  // Viewing Options
  const [filter, setFilter] = useState({
    view: { list: 0 },
    date: { asc: 0 }
  })

  /**
   * Use Blog Page Details
   * 1. loadMore 
   * to load more data
   * 2. isLoadingMore
   * is true whenever we are making request 
   * to fetch data
   * 3. isReachingEnd
   * is treu when we loaded all of the Data
   * and data is Empty 
   */
  const {
    pages,
    isLoadingMore,
    isReachingEnd,
    loadMore
  } = useGetBlogsPages({ blogs, filter });
  
  // End Pagination

  return (
    <Layout>
      {/* Author Intro */}
      <AuthorIntro />

      {/* Filtering Menu */}
      <FilteringMenu
        filter={filter} 
        onChange={
          (option, value) => setFilter({...filter, [option]: value})
        }
      />

      <hr/>
      
      {/* className from props */}
      <div className={`page-wrapper`}>
        <Row className="mb-5">
          {pages}
        </Row>

      </div>
      <div style={{textAlign:'center'}}>
        <Button
          variant="outline-secondary"
          size="lg"
          onClick={loadMore}
          disabled={isReachingEnd || isLoadingMore}
        >
          {
            isLoadingMore 
            ? '...'
            : isReachingEnd
            ? 'No More Blog'
            : 'Load More'
          }
        </Button>
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
  const blogs = await getPaginatedBlogs({ offset: 0, date: 'desc' })
  return{
    props:{
      blogs
    }
  }
}

