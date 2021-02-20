// Components
import HomeLayout from 'components/homepage/HomeLayout'
import WelcomeSec from 'components/homepage/WelcomeSec'
import Tentang from 'components/homepage/Tentang'
import Produk from 'components/homepage/Produk'
import ArtikelNew from 'components/homepage/ArtikelNew'

// Libs & Other
import {getAllBlogs} from 'lib/api'

// Style

export default function Home({blogs}){

  return (
    <HomeLayout>
      {/* Welcome Section */}
      <WelcomeSec />
      {/* Tentang Section */}
      <Tentang />
      {/* Produk Section */}
      <Produk />
      {/* Artikel */}
      <ArtikelNew blogs={blogs}/>
    </HomeLayout>
  )
}

/*
This function is called during the build time
it will be called on Server / SSR.
This function also provide props to your page
and it will craete static / html page
*/
export async function getStaticProps() {
  const blogs = await getAllBlogs()
  return{
    props: {
      blogs
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1, // In seconds
  }
}

