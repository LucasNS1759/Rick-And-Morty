

const NavLandin = () => {
  return (
   
  <nav className="relative py-1  bg-slate-300 ">
      
      
      {/* NAV LOGIN REGISTER */}
        <div className="container px-4 mx-auto">
          <div className="flex items-center">
            <div className="hidden lg:block ml-auto">
              <div className="flex items-center">
                <a
                  className="inline-block mr-9 text-sm font-semibold text-orange-900 hover:text-gray-900"
                  href="#"
                >
                  Sign In
                </a>
                <a
                  className="relative group inline-block py-3 px-4 text-sm font-semibold text-orange-900 hover:text-white border border-gray-200 rounded-md overflow-hidden transition duration-300"
                  href="#"
                >
                  <div className="absolute top-0 right-full w-full h-full bg-orange-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                  <span className="relative">Create an account</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
 
  )
}

export default NavLandin