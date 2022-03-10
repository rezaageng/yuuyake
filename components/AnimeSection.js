import Image from "next/image"

function AnimeSection({ anime }) {
  return (
    <div className="bg-slate-900">
      <div className="relative overflow-hidden rounded-t-xl">
        <Image
          src={anime.trailer.images.maximum_image_url}
          width={1280}
          height={720}
          alt="banner"
          layout="responsive"
          objectFit="cover"
        />
        <div className="absolute bottom-0 h-52 w-full bg-gradient-to-t from-slate-900"></div>
      </div>
      <div className="relative h-28">
        <div className="absolute right-0 left-0 -top-14 m-auto w-28 overflow-hidden rounded-lg">
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
      <h1 className="text-center text-2xl font-bold">{anime.title}</h1>
      <div className="mt-2 flex justify-center">
        <a href={anime.trailer.url} target="_blank" rel="noreferrer">
          <button className="cursor-pointer rounded-lg bg-rose-700 p-2 hover:bg-rose-800 hover:text-slate-400">
            Watch Trailer
          </button>
        </a>
      </div>
    </div>
  )
}

export default AnimeSection

// absolute -top-10 left-0 right-32 m-auto
