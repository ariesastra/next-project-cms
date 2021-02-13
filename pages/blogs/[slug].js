// Dependencies
import BreadcrumbData from 'components/Breadcrumb'
import moment from 'moment'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'

// Components
import Layout from 'components/Layout'
import BlogHeader from 'components/BlogHeader'
import {getPaginatedBlogs, getBlogBySlug, urlFor} from 'lib/api'
import BlockContent from 'components/BlogContent'

// Style
import {Row, Col} from 'react-bootstrap'

const BlogDetail = ({ blog }) => {
  const router = useRouter()
  // checking if there are fallback is false, and not have a slug
  if (!router.isFallback && !blog?.slug) {
    return <ErrorPage statusCode="404"/>
  }
  
  if (router.isFallback) {
    // console.log('Loading Fallback Page');
    return (
      <Layout className='blog-detail-page'>
        loading...
      </Layout>
    )
  }

  return (
    <Layout className="blog-detail-page">
      {/* Breadcrumb */}
      <BreadcrumbData page='Artikel' slug={blog?.slug} />
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          {/* Blog Header */}
          <BlogHeader
            title={blog.title}
            subtitle={blog.subtitle}
            coverImage={urlFor(blog.coverImage).height(450).fit('max').url()}
            author={blog.author}
            date={moment(blog.date).format('LLLL')}
          />
          <hr/>
          {/* Blog Content Here */}
          <BlockContent content={blog.content} />
        </Col>
      </Row>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  // console.log(params);
  // console.log('loading detail pages');
  const blog = await getBlogBySlug(params.slug)
  return{
    props: {blog}
  }
}
/**
 * For Creating dynamical detail page, we need to use
 * getStaticPaths() function, this function is for 
 * listing our data to render in SSR and post it to Props
 * as a HTML data in client.
 */
// TODO introduce fallback
export async function getStaticPaths(){
  // Get all blog data
  const allBlogs = await getPaginatedBlogs()
  const paths = allBlogs?.map(blog => ({ params: { slug: blog.slug } }))
  // console.log(paths);
  return {
    paths,//looping all blogs data into array
    fallback: true //is for error page, and fallback to 404 for example
  }
}

export default BlogDetail
