// Dependencies
import { useSWRPages } from 'swr'
import moment from 'moment'

// Components
import CardItem from 'components/CardItem'
import {useGetBlogs} from 'actions/index'
import CardListItem from 'components/CardListItem'
import CardItemBlank from 'components/CardItemBlank'
import CardListItemBlank from 'components/CardListItemBlank'

// Style
import { Col } from 'react-bootstrap'

const BlogList = ({blogs, filter}) => {
  
  return blogs
    .map(blog =>
    filter.view.list ?
      <Col key={`${blog.slug}-list`} md="9">
        <CardListItem
          author={blog.author}
          title={blog.title}
          subtitle={blog.subtitle}
          date={moment(blog.date).format('LL')}
          link={{
            href: '/blogs/[slug]',
            as: `/blogs/${blog.slug}`
          }}
        />
      </Col>
      :
      <Col key={blog.slug} md="4">
        <CardItem
          author={blog.author}
          title={blog.title}
          subtitle={blog.subtitle}
          date={moment(blog.date).format('LL')}
          image={blog.coverImage}
          link={{
            href: '/blogs/[slug]',
            as: `/blogs/${blog.slug}`
          }}
        />
      </Col>
    )
}

export const useGetBlogsPages = ({blogs, filter}) => {

  return useSWRPages(
    'index-page',
    ({ offset, withSWR, limit }) => {
      
      const { data: paginatedBlog, error } = withSWR(useGetBlogs({offset, filter}));

      if (!offset && !paginatedBlog && !filter) {
        return <BlogList blogs={blogs} filter={filter} />
      }
 
      if (!paginatedBlog) {
        return (
          Array(3)
            .fill(0)
            .map(
              (_, i) =>
                filter.view.list
                  ? <Col md={9} key={i}>
                      <CardListItemBlank />
                    </Col>
                  : <Col md={6} lg={4} key={`${i}-item`}>
                      <CardItemBlank />
                    </Col>
          )
        )
      }

      // Return Blog List
      return <BlogList blogs={paginatedBlog} filter={filter} />
    },
    // here you will compute offset that will get passed into previous callback function with 'withSWR'
    // SWR: data you will get from 'withSWR' function
    // index: number of current page
    (SWR, index) => {
      // Todo Compute Offset Here
      if (SWR.data && SWR.data.length === 0) {
        return null
      }
      return (index + 1) * 6;
    },
    [ filter ]
  )
}