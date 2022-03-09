import Link from "next/link"
import { useRouter } from "next/router"

function Navbar() {
  const router = useRouter()

  return (
    <div className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-xl">
      <nav className="mx-4 flex max-w-7xl py-4  text-white sm:gap-2  sm:py-6 xl:m-auto">
        <ul className="flex flex-1 gap-1 ">
          <li
            className={`nav-li ${
              router.pathname === "/" ? "border-b-2 border-rose-700" : ""
            }`}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={`nav-li ${
              router.pathname === "/top-anime" ? "border-rose-700" : ""
            }`}
          >
            <Link href="/top-anime">Top Anime</Link>
          </li>
        </ul>
        <form className="flex flex-1 flex-col justify-center">
          <input
            type="text"
            className="w-36 self-end rounded-md bg-slate-900 px-2 outline-none outline-offset-0 outline-rose-900 focus:outline-rose-700"
            placeholder="Search anime..."
          />
        </form>
      </nav>
    </div>
  )
}

export default Navbar
