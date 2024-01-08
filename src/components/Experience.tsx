import html from "/src/assets/stack/html.png";
import css from "/src/assets/stack/css.png";
import javascript from "/src/assets/stack/javascript.png";
import typescript from "/src/assets/stack/typescript.png";
import reactImage from "/src/assets/stack/react.png";
import nextjs from "/src/assets/stack/nextjs.png";
import graphql from "/src/assets/stack/graphql.png";
import github from "/src/assets/stack/github.png";
import tailwind from "/src/assets/stack/tailwind.png";
import materialUI from "/src/assets/stack/material-ui.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "sm:shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "sm:shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "sm:shadow-yellow-500",
    },
    {
      id: 4,
      src: typescript,
      title: "TypeScript",
      style: "sm:shadow-blue-600",
    },
    {
      id: 5,
      src: reactImage,
      title: "React",
      style: "sm:shadow-blue-600",
    },
    {
      id: 6,
      src: materialUI,
      title: "Material UI",
      style: "sm:shadow-blue-500",
    },
    {
      id: 7,
      src: tailwind,
      title: "Tailwind",
      style: "sm:shadow-sky-400",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "sm:shadow-gray-400",
    },
  ];

  return (
    <div
      id="experiência"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 pt-36 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-3xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experiência
          </p>
          <p className="py-6">Tecnologias com as quais tenho experiência:</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md flex flex-col justify-end hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt={title} className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;