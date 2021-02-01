// Dependencies
import BreadcrumbData from 'components/Breadcrumb'

// Components
import Layout from 'components/Layout'
import BlogHeader from 'components/BlogHeader'
import getAllBlogs, {getBlogBySlug, urlFor} from 'lib/api'
import BlockContent from 'components/BlogContent'

// Style
import {Row, Col} from 'react-bootstrap'

const BlogDetail = ({blog}) => {
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
            date={blog.date}
          />
          <hr/>
          {/* Blog Content Here */}
          <BlockContent content={blog.content} />
        </Col>
      </Row>
    </Layout>
  )
}

export async function getStaticProps({params}){
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

export async function getStaticPaths(){
  // Get all blog data
  const allBlogs = await getAllBlogs()
  
  return {
    paths: allBlogs.map(blog => ({params: {slug: blog.slug}})),//looping all blogs data into array
    fallback: false //is for error page, and fallback to 404 for example
  }
}

export default BlogDetail
