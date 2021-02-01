// Dependendcies
import {urlFor} from 'lib/api'

const BlogHeader = ({title, subtitle, author, date, coverImage}) => {

  return (
    <div className="blog-detail-header">
      <p className="lead mb-0">
        <img
          src={author.avatar}
          className="rounded-circle mr-3"
          height="50px"
          width="50px"
          alt="avatar"/>
        {author.name}
        {', '}
      </p>
      <h1 className="font-weight-bold blog-detail-header-title mb-0">{title}</h1>
      <h2 className="blog-detail-header-subtitle mb-3">{subtitle}</h2>
        {/* Check if contains cover image */}
        <img
          className="img-fluid rounded main-image"
          src={coverImage} alt={title}/>
        <span>
          {date}
        </span>
        <style jsx>{`
          span {
            margin: 10px 0 0 0;
            display: flex;
          }
          .main-image{
            display: flex;
            margin:auto
          }
        `}</style>
    </div>
  )
}

export default BlogHeader