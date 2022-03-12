import Head from "next/head"
import { useRouter } from "next/router"
import { useContext } from "react"
import Anime from "../../components/Anime"
import { AppContext } from "../../context/app-context"

function Search() {
  const context = useContext(AppContext)
  const router = useRouter()

  return (
    <>
      <Head>
        <title>{router.query.q} · Yuuyake</title>
      </Head>
      {context.loading ? <h1>Loading</h1> : <Anime anime={context} />}
    </>
  )
}

export default Search
