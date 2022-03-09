import axios from "axios"

const getJikan = async () => {
  const request = await axios.get("https://api.jikan.moe/v4/seasons/now")
  const response = request.data

  return response
}

const getAnime = async (mal_id) => {
  const request = await axios.get(`https://api.jikan.moe/v4/anime/${mal_id}`)
  const response = request.data

  return response
}

export { getJikan, getAnime }
