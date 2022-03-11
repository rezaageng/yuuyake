import Head from "next/head"
import Anime from "../components/Anime"
import Hero from "../components/Hero"
import { getJikan } from "../functions/fetchApi"

function Home({ response }) {
  return (
    <>
      <Head>
        <title>Yuuyake</title>
        <meta name="description" content="Anime database build with Next.js" />
      </Head>
      <Hero />
      <Anime anime={response} />
    </>
  )
}

export async function getStaticProps() {
  const response = await getJikan()

  return {
    props: { response },
    revalidate: 10,
  }
}

export default Home
