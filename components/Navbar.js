import Link from "next/link"
import { useRouter } from "next/router"

function Navbar() {
  const router = useRouter()

  return (
    <nav className="max-w-full bg-slate-900 text-white">
      <ul className="flex gap-1 px-2 py-4 sm:gap-2 sm:px-4 sm:py-6">
        <li
          className={`nav-li ${
            router.pathname === "/"
              ? "ring-2 ring-inset ring-rose-700 sm:ring"
              : ""
          }`}
        >
          <Link href="/">Home</Link>
        </li>
        <li
          className={`nav-li ${
            router.pathname === "/top-anime"
              ? "ring-2 ring-inset ring-rose-700 sm:ring"
              : ""
          }`}
        >
          <Link href="/top-anime">Top Anime</Link>
        </li>
        <li
          className={`nav-li ${
            router.pathname === "/news"
              ? "ring-2 ring-inset ring-rose-700 sm:ring"
              : ""
          }`}
        >
          <Link href="/news">Anime News</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
