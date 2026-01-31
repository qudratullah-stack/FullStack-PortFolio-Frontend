import { Link } from "react-router-dom"

function Navbar() {
  return (
    <>
    <div className="navbar bg-cyan-700 h-28 text-white">
        <h2 className="font-bold text-2xl">this is navbar</h2>
    <Link to="/">Home</Link>
    <Link to="/contactUs">Contact Us</Link>
    <Link to="/about">About</Link>
    </div>

    </>
  )
}

export default Navbar
