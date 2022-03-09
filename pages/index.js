import Anime from "../components/Anime"
import Hero from "../components/Hero"
import { getJikan } from "../functions/fetchApi"

function Home({ response }) {
  return (
    <div className="m-auto min-h-screen bg-slate-900">
      <Hero />
      <Anime anime={response} />
    </div>
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
