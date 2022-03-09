import { getJikan, getAnime } from "../../functions/fetchApi"

function AnimeDetail({ anime }) {
  return (
    <div>
      <h1>{anime.data.title}</h1>
    </div>
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
