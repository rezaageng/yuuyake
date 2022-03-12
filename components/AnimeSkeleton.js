import ContentLoader from "react-content-loader"

function AnimeSkeleton() {
  const skeleton = []

  for (let i = 0; i < 21; i++) {
    skeleton.push(
      <div
        key={`skeleton${i}`}
        className="overflow-hidden rounded-xl bg-slate-800 "
      >
        <ContentLoader
          speed={1}
          width={225}
          height={220}
          backgroundColor="#1e293b"
          foregroundColor="#334155"
          style={{ width: "100%" }}
        >
          <rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
        </ContentLoader>
      </div>
    )
  }

  return (
    <div className="max-w-full">
      <div className="mt-2 grid w-full grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-5 md:gap-3 lg:grid-cols-7">
        {skeleton}
      </div>
    </div>
  )
}

export default AnimeSkeleton
