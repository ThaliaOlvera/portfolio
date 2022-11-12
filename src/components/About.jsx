import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Soy una programadora web apasionada, motivada y organizada, con
          formación en nutrición, sin embargo mi necesidad de querer mejorar los
          programas desarrollados para la atención de la salud del paciente fue
          lo que me acercó a realizar un bootcamp que me cambió la vida
          descubriendo así mi segunda pasión.
        </p>
        <br />
        <p className="text-xl">
          Mi visión es mejorar el mundo a través del impacto de la tecnología,
          la transformación digital pero sobre todo en la mejora de las
          herramientas para la atención de la salud.
        </p>
      </div>
    </div>
  );
};

export default About;
