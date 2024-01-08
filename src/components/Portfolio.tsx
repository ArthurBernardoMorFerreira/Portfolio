import {
  arrayDestruct,
  installNode,
  navbar,
  reactParallax,
  reactSmooth,
  reactWeather,
} from './Src';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
    },
    {
      id: 2,
      src: reactParallax,
    },
    {
      id: 3,
      src: navbar,
    },
    {
      id: 4,
      src: reactSmooth,
    },
    {
      id: 5,
      src: installNode,
    },
    {
      id: 6,
      src: reactWeather,
    },
  ];

  return (
    <div
      id="portfólio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="
          max-w-screen-lg p-4 pt-80 sm:pt-20 md:pt-40 mx-auto flex flex-col justify-center w-full h-full
  
        "
      >
        <div className="pb-2">
          <p className="text-3xl font-bold inline border-b-4 border-gray-500">
            Portfólio
          </p>
          <p className="py-6">Confira alguns dos meus trabalhos aqui</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-flow-dense gap-5 px-0 mb-10 md:px-15 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-900 rounded-lg">
              <img
                src={src}
                className="rounded-md duration-200 hover:scale-105 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;