import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="flex items-center justify-center">
      <nav className="fixed bg-white shadow w-full top-0 right-0 z-10 p-4 md:px-20">
        
        <div className="flex justify-between w-3/4 mx-auto my-auto">
          <div className="flex lg:mx-0">
            <img src="/hisana-logo.svg" className="w-16 h-auto mx-auto cursor-pointer" />
          </div>

          <div className="hidden lg:flex my-auto">
            <Link href="/product">
              <a className=" text-red-600 hover:text-red-700 font-extrabold cursor-pointer">Product</a>
            </Link>
            <Link href="/promotion">
              <a className="text-red-600 hover:text-red-700 font-extrabold cursor-pointer">Promotion</a>
            </Link>
          </div>

          <div className="my-auto">
            <img src="/menu.svg" className="w-auto h-6 cursor-pointer" />
          </div>
        </div>
      </nav>
    </div>

  )
}

export default Navbar;