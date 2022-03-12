import { useContext } from "react"
import Anime from "../../components/Anime"
import { AppContext } from "../../context/app-context"

function Search() {
  const context = useContext(AppContext)
  console.log(context)

  return (
    <>
      {context.loading ? (
        <>
          <h1>Loading</h1>
        </>
      ) : (
        <>
          <Anime anime={context} />
        </>
      )}
    </>
  )
}

export default Search
