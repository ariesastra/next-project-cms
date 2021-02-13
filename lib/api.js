import client, {previewClient} from './sanity'
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
const getClient = preview => preview ? previewClient : client

export function urlFor(source) {
  return builder.image(source);
}

/**
  offset : how many data you want to skip
  limit : how many data you want to fetch
 */

export async function getAllBlogs() { 
  const result = await client.fetch(`*[_type == "blog"] | order(date desc) {${blogFields}}`)
  return result
}

export async function getPaginatedBlogs(
  //inital value  
  { offset = 0, date = 'desc' } = { offset: 0, date: 'desc' }
) { 
  const result = await client.fetch(`*[_type == "blog"] | order(date ${date}) {${blogFields}}[${offset}...${offset + 6}]`)
  return result
}


export async function getBlogBySlug(slug, preview) {
  const currClient = getClient(preview)
  const result = await currClient.fetch(`
    *[_type == "blog" && slug.current == $slug]{
      ${blogFields}
      content[]{..., "asset": asset->}
    }
  `, {slug})
    .then(
      res => 
        preview ? (res?.[1] ? res[1] : res[0]) : res?.[0] //double tenary operator
    )

  /**
   * Query Above is providing array result,
   * so we need to return using array method 
   * like bellow
   */
  return result
}