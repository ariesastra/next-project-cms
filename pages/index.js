import {useState} from 'react'

// Components
import Layout from 'components/Layout'
import AuthorIntro from 'components/AuthorIntro'
import FilteringMenu from 'components/FilteringMenu'
import {useGetBlogsPages} from 'actions/pagination'

// Libs & Other
import {getAllBlogs} from 'lib/api'

// Style
import { Row } from 'react-bootstrap';

export default function Home({blogs}){
  // debugger
  // Viewing Options
  const [filter, setFilter] = useState({
    view: { list: 0 }
  })

  const {
    pages,
    isLoadingMore,
    isReachingEnd,
    loadMore
  } = useGetBlogsPages({blogs, filter});

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
      blogs
    }
  }
}

