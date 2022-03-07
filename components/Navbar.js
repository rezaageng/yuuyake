import Link from "next/link"
import { useRouter } from "next/router"

function Navbar() {
  const router = useRouter()

  return (
    <nav className="flex max-w-full bg-slate-900 px-4 py-4 text-white sm:gap-2 sm:px-4 sm:py-6">
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
      <form className="flex-1">
        <input
          type="text"
          className="h-full w-full rounded-md border-2 border-rose-700 bg-slate-900"
        />
      </form>
    </nav>
  )
}

export default Navbar
