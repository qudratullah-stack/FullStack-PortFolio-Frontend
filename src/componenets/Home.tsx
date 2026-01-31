import Navbar from "./partials/Navbar"

function Home() {
  return (
   <>
   <Navbar/>
  <div className="bg-[url(../assets/homepagebg.jpeg)] h-auto bg-cover relative bg-center">
      <div className="bg-gray-600/80 h-200"></div>
  </div>
   </>
  )
}

export default Home
