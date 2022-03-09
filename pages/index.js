import axios from "axios"
import Hero from "../components/Hero"

function Home({ response }) {
  return (
    <div className="m-auto min-h-screen bg-slate-900">
      <Hero />
    </div>
  )
}

export async function getStaticProps() {
  const request = await axios.get("https://api.jikan.moe/v4/seasons/now")
  const response = request.data

  return {
    props: { response },
    revalidate: 10,
  }
}

export default Home
