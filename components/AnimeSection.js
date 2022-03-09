import Image from "next/image"

function AnimeSection({ anime }) {
  return (
    <div className="min-h-screen bg-slate-900">
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
      <div className="flex gap-2 p-2">
        <div className="relative -top-16 w-28 shrink-0 grow-0 overflow-hidden rounded-lg">
          <Image
            src={anime.images.jpg.image_url}
            alt="Cover"
            width={225}
            height={320}
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <h1 className="grow-0 text-xl">{anime.title}</h1>
      </div>
    </div>
  )
}

export default AnimeSection

// absolute -top-10 left-0 right-32 m-auto
