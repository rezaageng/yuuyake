import axios from "axios"

const getJikan = async () => {
  const request = await axios.get("https://api.jikan.moe/v4/seasons/now")
  const response = request.data

  return response
}

export default getJikan
