// libs & other
import getAllBlogs from 'lib/api'

export default async function getBlogs(req, res) {
  const data = await getAllBlogs()

  try {
    res.status(200).json(data)
  } catch (error) {
    console.error(error);
    res.status(502).json({message: 'Request Bad Gateway !'})
  }
}