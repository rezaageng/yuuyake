import Navbar from "./Navbar"

function Layout({ children }) {
  return (
    <div className="bg-slate-900 text-white">
      <Navbar />
      <div className="mx-4 max-w-7xl xl:m-auto">
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout
