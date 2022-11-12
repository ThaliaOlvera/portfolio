import React from "react";
import { HiChevronRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b
    from-black via-black to-gray-800"
    >
      <div
        className="max-w-screen-lg mx-auto flex flex-col items-center
      justify-center h-full px-4 md:flex-row"
      >
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Hola soy Thalia Olvera.
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Una buscadora de soluciones optimizadas.Apasionada por estar en una
            fase de implementacion de una carrera nueva de un desarrollador web
            profesional. Soy una persona ambiciosa,motivada,organizada y
            aventurera.
          </p>
          <p className="text-gray-500 py-4 max-w-md">
            A seeker of optimized solutions. Passionate about being in the
            implementation phase of a new career as a professional web
            developer. I am an ambitious, motivated, organized and adventurous
            person.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center
            rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portafolio/Porfolio
              <span className="group-hover:rotate-90 duration-300">
                <HiChevronRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
