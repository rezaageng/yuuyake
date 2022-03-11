import AnimeSection from "../../components/AnimeSection"
import { getAnime, getTopAnime } from "../../functions/fetchApi"

function AiringAnimeDetail({ anime }) {
  return (
    <>
      <AnimeSection anime={anime.data} />
    </>
  )
}

export async function getStaticPaths() {
  const anime = await getTopAnime()

  return {
    paths: anime.data.map((anm) => ({
      params: { mal_id: anm.mal_id.toString() },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const anime = await getAnime(params.mal_id)

  if (!anime) {
    return { notFound: true }
  }

  return {
    props: { anime },
    revalidate: 10,
  }
}

export default AiringAnimeDetail
