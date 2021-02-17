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
import PreviewAlert from 'components/PreviewAlert'

// Style
import {Row, Col} from 'react-bootstrap'

const BlogDetail = ({ blog, preview }) => {
  const router = useRouter()
  // checking if there are fallback is false, and not have a slug
  if (!router.isFallback && !blog?.slug) {
    return <ErrorPage statusCode="404"/>
  }
  
  if (router.isFallback) {
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
          {/* Preview Mode */}
          {
            preview && <PreviewAlert/>
          }
          {/* Blog Header */}
          <BlogHeader
            title={blog.title}
            subtitle={blog.subtitle}
            coverImage={urlFor(blog.coverImage).height(450).fit('max').url()}
            author={blog.author}
            date={moment(blog.date).format('LL')}
          />
          <hr/>
          {/* Blog Content Here */}
          <BlockContent content={blog.content} />
        </Col>
      </Row>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false, previewData }) {
  // console.log(`Preview is ${preview}`);
  // TODO: pass preview to getBlogBySlug and fetch draft blog
  const blog = await getBlogBySlug(params.slug, preview)
  return{
    props: {
      blog,
      preview
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1, // In seconds
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
