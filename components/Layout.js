import Navbar from "./Navbar"

function Layout({ children }) {
  return (
    <div className="bg-slate-900 text-white">
      <div className="m-auto max-w-7xl">
        <Navbar />
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout
