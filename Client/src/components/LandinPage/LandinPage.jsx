import NavLandin from "../Nav/NavLandin";

const LandinPage = () => {
  return (
    <>
      <div className="min-h-screen min-w-screen  "
        style={{ backgroundImage: `url('/rickmorty.jpg')` }}
      >
        <div className="flex-row">
          <NavLandin />

          {/* PRESENTACION Y BTN GO HOME */}
          <div className="relative container px-4 mx-autov ">
            <div className="max-w-xl xl:max-w-4xl">
              <h1 className="font-heading text-5xl xs:text-6xl md:text-8xl xl:text-10xl font-bold text-gray-900 mb-8 sm:mb-14">
                <span>Welcome to The Rick And Mory App</span>
              </h1>

              <a
            className="relative group inline-block w-full sm:w-auto py-4 px-6 mb-24 text-white font-semibold rounded-md bg-orange-900 overflow-hidden"
            href="Home"
          >
            <div className=" absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
            <div className="relative flex items-center justify-center ">
              <span className="mr-4 ">Go Home</span>
             
            </div>
          </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandinPage;
