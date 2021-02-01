import sanityClient from '@sanity/client'

const option = {
  dataset: process.env.SANITY_DATASET_NAME,
  projectId: process.env.SANITY_PROJECT_ID,
  /*
  useCdn is for caching our blog data into CDN or Cache system, 
  so when this project going to production / useCdn : true, 
  blog data will cache / store in CDN, so it will make blog data 
  faster!
  */
  useCdn: process.env.NODE_ENV === 'production'
}

export default sanityClient(option)