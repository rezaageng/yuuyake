import TopAnime from "../../components/TopAnime"
import { getTopAnime } from "../../functions/fetchApi"

function TopAnimeList({ response }) {
  return <TopAnime anime={response} />
}

export async function getStaticProps() {
  const response = await getTopAnime()
  return {
    props: { response },
    revalidate: 10,
  }
}

export default TopAnimeList
