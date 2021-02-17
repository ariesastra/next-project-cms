// Dependencies
import { useSWRPages } from 'swr';
import { useEffect } from 'react'
import moment from 'moment'

// Components
import CardItem from 'components/CardItem'
import {useGetBlogs} from 'actions/index'
import CardListItem from 'components/CardListItem'
import CardItemBlank from 'components/CardItemBlank'
import CardListItemBlank from 'components/CardListItemBlank'

// Style
import {Col} from 'react-bootstrap'

export const useGetBlogsPages = ({blogs, filter}) => {
  useEffect(() => {
    //assign pagination to window 
    window.__pagination_init = true
  }, [])

  return useSWRPages(
    'index-page',
    ({ offset, withSWR, limit }) => {
      /**
       * If there are no offset / offset is null
       * put blogs to initialdata
       */
      let initialData = !offset && blogs
      if (typeof window !== 'undefined' && window.__pagination_init) {
        initialData = null
      }

      const { data: paginatedBlog } = withSWR(useGetBlogs({offset, filter}, initialData));
 
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

      return paginatedBlog
        .map(blog =>
        filter.view.list ?
          <Col key={`${blog.slug}-list`} md="9">
            <CardListItem
              author={blog.author}
              title={blog.title}
              subtitle={blog.subtitle}
              date={moment(blog.date).format('LLLL')}
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
              date={blog.date}
              image={blog.coverImage}
              link={{
                href: '/blogs/[slug]',
                as: `/blogs/${blog.slug}`
              }}
            />
          </Col>
        )
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