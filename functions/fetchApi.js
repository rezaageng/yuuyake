import axios from "axios"

const getJikan = async () => {
  try {
    const request = await axios.get("https://api.jikan.moe/v4/seasons/now")
    const response = request.data

    return response
  } catch (error) {
    console.error(error)
  }
}

const getAnime = async (mal_id) => {
  try {
    const request = await axios.get(`https://api.jikan.moe/v4/anime/${mal_id}`)
    const response = request.data

    return response
  } catch (error) {
    console.error(error)
  }
}

export { getJikan, getAnime }
