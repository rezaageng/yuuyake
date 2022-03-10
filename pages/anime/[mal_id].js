import AnimeInfo from "../../components/AnimeInfo"
import AnimeSection from "../../components/AnimeSection"
import { getJikan, getAnime } from "../../functions/fetchApi"

function AnimeDetail({ anime }) {
  return (
    <>
      <AnimeSection anime={anime.data} />
    </>
  )
}

export async function getStaticPaths() {
  const anime = await getJikan()

  return {
    paths: anime.data.map((anm) => ({
      params: { mal_id: anm.mal_id.toString() },
    })),
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  const anime = await getAnime(params.mal_id)

  return {
    props: { anime },
    revalidate: 10,
  }
}

export default AnimeDetail
