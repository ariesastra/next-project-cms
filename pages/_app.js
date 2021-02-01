import {library, config} from '@fortawesome/fontawesome-svg-core'
import {faBorderAll, faList} from '@fortawesome/free-solid-svg-icons'

config.autoAddCss = false
library.add(faList, faBorderAll)

// Styles
import 'styles/index.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'highlight.js/styles/dracula.css'
import 'nprogress/nprogress.css'
import '@fortawesome/fontawesome-svg-core/styles.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
