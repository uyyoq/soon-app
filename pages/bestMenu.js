import Navbar from "../components/Navbar/navbar"

const BestMenu = () => {
  return (
    <div className="pt-24">
      <Navbar />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 self-center gap-6 items-center justify-items-center mx-4 md:mx-16 lg:mx-28">
        <div>
          <img className="w-auto h-auto" src="/bestMenu/bestmenu1.jpg" alt="bestMenu-img" />
        </div>
        <div>
          <img className="w-auto h-auto" src="/bestMenu/bestmenu2.jpg" alt="bestMenu-img" />
        </div>
        <div>
          <img className="w-auto h-auto" src="/bestMenu/bestmenu3.jpg" alt="bestMenu-img"/>
        </div>
        <div>
          <img className="w-auto h-auto" src="/bestMenu/bestmenu4.jpg" alt="bestMenu-img"/>
        </div>
        <div>
          <img className="w-auto h-auto" src="/bestMenu/bestmenu5.jpg" alt="bestMenu-img"/>
        </div>
        <div>
          <img className="w-auto h-auto" src="/bestMenu/bestmenu6.jpg" alt="bestMenu-img"/>
        </div>
        <div>
          <img className="w-auto h-auto" src="/bestMenu/bestmenu7.jpg" alt="bestMenu-img"/>
        </div>
        <div>
          <img className="w-auto h-auto" src="/bestMenu/bestmenu8.jpg" alt="bestMenu-img"/>
        </div>
        <div>
          <img className="w-auto h-auto" src="/bestMenu/bestmenu9.jpg" alt="bestMenu-img"/>
        </div>
      </div>
    </div>
  )
}

export default BestMenu