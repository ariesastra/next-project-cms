import ThemeProvider from 'provider/ThemeProvider';
import { library, config } from '@fortawesome/fontawesome-svg-core'
import {
  faBorderAll,
  faList,
  faSortAlphaUp,
  faSortAlphaDown,
  faSun,
  faMoon,
} from '@fortawesome/free-solid-svg-icons'

config.autoAddCss = false
library.add(
  faList,
  faBorderAll,
  faSortAlphaUp,
  faSortAlphaDown,
  faSun,
  faMoon
)

import Router from 'next/router'
import NProgress from 'nprogress'

// Styles
import 'styles/index.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'highlight.js/styles/dracula.css'
import 'nprogress/nprogress.css'
import '@fortawesome/fontawesome-svg-core/styles.css'

// NProgress
Router.onRouteChangeStart = url => {
  // console.log(url);
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

function MyApp({ Component, pageProps }) {
  return  <ThemeProvider>
            <Component {...pageProps} />
          </ThemeProvider>
}

export default MyApp
