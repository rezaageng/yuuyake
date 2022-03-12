import Head from "next/head"
import { useRouter } from "next/router"
import { useContext } from "react"
import Anime from "../../components/Anime"
import AnimeSkeleton from "../../components/AnimeSkeleton"
import { AppContext } from "../../context/app-context"

function Search() {
  const context = useContext(AppContext)
  const router = useRouter()

  return (
    <>
      <Head>
        <title>{router.query.q} · Yuuyake</title>
      </Head>
      {context.loading ? <AnimeSkeleton /> : <Anime anime={context} />}
    </>
  )
}

export default Search
