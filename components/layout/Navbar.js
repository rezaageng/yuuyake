import Link from "next/link"

function Navbar() {
  return (
    <nav>
      <ul className="flex p-2 text-center">
        <li className="flex-1">
          <Link href="/">Home</Link>
        </li>
        <li className="flex-1">
          <Link href="/top-anime">Top Anime</Link>
        </li>
        <li className="flex-1">
          <Link href="/news">News</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
