const About = () => {
  return (
    <div
      id="sobre"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pt-80 sm:pt-0 sm:pb-1 md:pb-5 lg:pb-8">
          <p className="text-3xl md:text-4xl font-bold inline border-b-4 border-gray-500">
            Sobre
          </p>
        </div>
        
        <p className="text-lg lg:text-xl mt-7 lg:mt-20">
          Desenvolvedor <span className="text-blue-400"> React</span>. 
          Atualmente, estou focado em aprender React com TypeScript e banco de dados (MySQL).
          Tenho um grande interesse em desenvolvimento web e estou animado em explorar as
          possibilidades dessas tecnologias. Com dedicação e estudo, estou trabalhando para
          me tornar um profissional competente e contribuir para projetos inovadores.
        </p>

        <br />

        <p className="text-lg lg:text-xl">
          Meu objetivo é criar produtos que sejam funcionais, eficientes e que atendam
          às necessidades dos usuários. Comprometido com a qualidade do código
          e sempre buscando atualizações no mundo da tecnologia (estudando sempre).
          Espero que possa explorar meu portfólio e ver alguns dos projetos incríveis nos
          quais tive a oportunidade de construir. Fique à vontade!
        </p>
      </div>
    </div>
  );
};

export default About;