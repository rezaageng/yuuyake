import Link from "next/link"
import { useRouter } from "next/router"

function Navbar() {
  const router = useRouter()

  return (
    <nav className="max-w-full bg-slate-900 text-white">
      <ul className="flex gap-1 px-2 py-4 sm:gap-2 sm:px-4 sm:py-6">
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
    </nav>
  )
}

export default Navbar
