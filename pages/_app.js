import Layout from "../components/layout/Layout"
import Navbar from "../components/layout/navbar"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
