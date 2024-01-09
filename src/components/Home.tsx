import ProfileImage from "./src/assets/profile/profile.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      id="home"
      className="
        h-screen w-full bg-gradient-to-b from-black via-black to-gray-800
      "
    >
      <div
        className="
          flex flex-col
          items-center justify-center md:justify-around md:flex-row lg:justify-around
          h-screen w-full
          max-w-screen-lg mx-auto md:px-0 lg:px-10 p-4 md:p-0
        "
      >
        <div 
          className="
            flex flex-col justify-center items-center md:items-baseline h-full
          "
        >
          <h2
            className="
              font-bold text-white
              text-2xl sm:text-4xl md:text-4xl lg:text-5xl
            "
          >
            Eu sou <span className="text-blue-400"> dev </span> Front-end
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Sempre em busca de aprimoramento contínuo para me manter atualizado
            nas melhores práticas e no desenvolvimento de aplicações.
          </p>

          <div
            className="
              flex justify-center md:justify-normal
              mt-4 sm:mt-7 lg:mt-5
            "
          >
            <Link
              to="portfólio"
              smooth
              duration={500}
              className="
                group text-white w-fit px-6 py-3 my-2
                flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500
                cursor-pointer
              "
            >
              Portfólio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>

          <div
            className="
              md:hidden
              w-2/12
              relative
              top-24
            "
          >
            <img
              src="./src/assets/icon/icon-developer.png"
              alt="Icon Developer"
            />
          </div>
        </div>

        <div
          className="
            hidden md:flex
            w-2/3
            mb-7
            sm:w-1/2 sm:mb-7 md:mb-0 md:w-1/4 lg:w-1/4
          "
        >
          <img
            src={ProfileImage}
            alt="my profile"
            className="
              rounded-2xl mx-auto w-2/3 md:w-full
            "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;