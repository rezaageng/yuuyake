import Image from "next/image"

function Anime({ anime }) {
  return (
    <div className="mt-4 max-w-full">
      <h1 className="text-xl font-semibold">Airing Anime</h1>
      <div className="grid w-full grid-cols-3 gap-2">
        {anime.data.map((anm) => (
          <div
            key={anm.mal_id}
            className="group cursor-pointer overflow-hidden rounded-xl bg-slate-800"
          >
            <Image
              src={anm.images.jpg.image_url}
              alt="Cover"
              width={225}
              height={320}
              layout="responsive"
              objectFit="cover"
              className="transition duration-300 ease-in-out group-hover:scale-110"
            />
            <p className="truncate p-2">{anm.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Anime
