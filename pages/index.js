import Anime from "../components/Anime"
import Hero from "../components/Hero"
import { getJikan } from "../functions/fetchApi"

function Home({ response }) {
  return (
    <>
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
