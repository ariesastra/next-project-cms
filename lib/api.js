import client from './sanity'
import imageUrlBuilder from '@sanity/image-url'

const blogFields = `
  title, 
  subtitle, 
  'slug': slug.current,
  _id,
  date,
  coverImage,
  'author': author->{name, 'avatar': avatar.asset->url},
`
const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source);
}

export default async function getAllBlogs({offset}) {
  const result = await client.fetch(`*[_type == "blog"]{${blogFields}}[${offset}...${offset + 3}]`)
  return result
}

export async function getBlogBySlug(slug){
  const result = await client.fetch(`
    *[_type == "blog" && slug.current == $slug]{
      ${blogFields}
      content[]{..., "asset": asset->}
    }
  `, {slug})
  .then(res=> res?.[0])

  /**
   * Query Above is providing array result,
   * so we need to return using array method 
   * like bellow
   */
  return result
}