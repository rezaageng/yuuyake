import Image from "next/image"
import { useMediaQuery } from "react-responsive"

function AnimeSection({ anime }) {
  const isMd = useMediaQuery({ query: "(min-width: 768px)" })

  return (
    <div className="bg-slate-900">
      <div className="relative overflow-hidden rounded-t-xl">
        <Image
          src={anime.trailer.images.maximum_image_url}
          width={1280}
          height={isMd ? 480 : 720}
          alt="banner"
          layout="responsive"
          objectFit="cover"
        />
        <div className="absolute bottom-0 h-52 w-full bg-gradient-to-t from-slate-900"></div>
      </div>
      <div className="lg:flex">
        <div className="relative h-28 lg:w-48">
          <div className="absolute right-0 left-0 -top-14 m-auto w-28 overflow-hidden rounded-lg lg:right-auto lg:left-6 lg:-top-32 lg:w-40">
            <Image
              src={anime.images.jpg.image_url}
              alt="Cover"
              width={225}
              height={320}
              layout="responsive"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="lg:flex lg:flex-col lg:justify-end lg:p-4">
          <h1 className="text-center text-2xl font-bold lg:text-left lg:text-3xl">
            {anime.title}
          </h1>
          <div className="mt-2 flex justify-center lg:justify-start">
            <a href={anime.trailer.url} target="_blank" rel="noreferrer">
              <button className="cursor-pointer rounded-lg bg-rose-700 p-2 hover:bg-rose-800 hover:text-slate-400">
                Watch Trailer
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnimeSection
