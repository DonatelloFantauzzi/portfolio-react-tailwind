import { FaGithub } from "react-icons/fa6";
import Cocktails from "../image/cocktails.webp";
import Insect from "../image/insectGame.webp";
import Metro from "../image/metro.webp";
import PhotoStudio from "../image/photoStudio.webp";
import ReactPizza from "../image/reactPizza.webp";
import ReactQuiz from "../image/reactQuiz.webp";
import { useEffect, useRef } from "react";
import { useAnimation, useInView, motion } from "framer-motion";

const works = [
  {
    id: 1,
    alt: "copertina sito Cocktails",
    href: "https://imaginative-faun-a8c6f4.netlify.app/",
    title: "Cocktails Mix",
    src: Cocktails,
    gitHub: "https://github.com/DonatelloFantauzzi/cocktailsMix",
  },
  {
    id: 2,
    alt: "copertina sito Insect Game",
    href: "https://fastidious-zuccutto-b1e505.netlify.app",
    title: "Insect Game ",
    src: Insect,
    gitHub: "https://github.com/DonatelloFantauzzi/Caccia-gli-insetti",
  },
  {
    id: 3,
    alt: "copertina sito Palestra Metrò",
    href: "https://musical-starburst-3846f5.netlify.app",
    title: "Palestra Metrò",
    src: Metro,
    gitHub: "https://github.com/DonatelloFantauzzi/Palestra-Metr-",
  },
  {
    id: 4,
    alt: "copertina sito Photo Studio",
    href: "https://chipper-dolphin-78a0ea.netlify.app/",
    title: "PhotoStudio",
    src: PhotoStudio,
    gitHub: "https://github.com/DonatelloFantauzzi/photoStudio",
  },
  {
    id: 5,
    alt: "copertina sito React Pizza",
    href: "https://legendary-profiterole-882176.netlify.app/",
    title: "React Pizza",
    src: ReactPizza,
    gitHub: "https://github.com/DonatelloFantauzzi/pizzeriaReattiva",
  },
  {
    id: 6,
    alt: "copertina sito React Quiz",
    href: "https://silver-starship-5c3671.netlify.app/",
    title: "React Quiz",
    src: ReactQuiz,
    gitHub: "https://github.com/DonatelloFantauzzi/reactQuiz",
  },
];

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  console.log(isInView);

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <section
      ref={ref}
      id="portfolio"
      className=" mx-auto mb-28 flex h-full w-full max-w-7xl flex-col items-center p-8 md:justify-evenly"
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <p className=" dark:text-darkPrimary text-center text-lg font-bold text-secondary">
          Esplora il mio
        </p>
        <h1 className=" dark:text-darkSecondary text-center text-4xl text-primary  md:text-6xl">
          Portfolio
        </h1>
      </motion.div>

      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3"
      >
        {works.map((work) => {
          return (
            <div
              key={work.id}
              className=" dark:shadow-darkPrimary grid grid-rows-[2fr_auto_1fr]  justify-center rounded-lg p-6 shadow-lg shadow-primary "
            >
              <figure className="flex  items-center justify-center">
                <img
                  src={work.src}
                  alt={work.alt}
                  loading="lazy"
                  className=" h-full rounded-lg"
                />
              </figure>
              <h2 className=" dark:text-darkPrimary my-6 text-center text-2xl text-primary">
                {work.title}
              </h2>

              <div className=" flex items-center justify-evenly ">
                <a href={work.gitHub} target="_blank" rel="noreferrer">
                  <button
                    className="px-6 py-3 duration-500 hover:scale-110"
                    aria-label="Bottone GitHub"
                  >
                    {/* <FaGithub size={50} color="#312e2e" /> */}
                    {/* <FaGithub size={50} color="#f0f6f5" /> */}
                    <FaGithub
                      size={50}
                      className=" dark:text-darkSecondary text-primary"
                    />
                  </button>
                </a>
                <a
                  href={work.href}
                  target="_blank"
                  rel="noreferrer"
                  className=" dark:text-darkPrimary dark:hover:text-darkSecondary text-xl text-primary duration-300 hover:scale-110 hover:text-secondary"
                >
                  View Live
                </a>
              </div>
            </div>
          );
        })}

        {/* <div className=" shadow-primary rounded-lg  p-6 shadow-lg ">
          <figure>
            <img src={Cocktails} alt="" loading="lazy" className="rounded-lg" />
          </figure>
          <h2 className=" my-6 text-center text-2xl">Cocktails Mix</h2>

          <div className=" flex items-center justify-evenly ">
            <button className="px-6 py-3 duration-500 hover:scale-110">
              <FaGithub size={50} color="#312e2e" />
            </button>
            <button className="border-secondary hover:bg-secondary/70 hover:text-background w-28 rounded-full border border-solid  py-2 text-xl  font-normal duration-500 hover:scale-110 active:scale-95 ">
              view
            </button>
          </div>
        </div> */}
        {/* <div className=" shadow-primary rounded-lg  p-6 shadow-lg ">
          <figure>
            <img src={Cocktails} alt="" loading="lazy" className="rounded-lg" />
          </figure>
          <h2 className=" my-6 text-center text-2xl">Cocktails Mix</h2>

          <div className=" flex items-center justify-evenly ">
            <button className="px-6 py-3 duration-500 hover:scale-110">
              <FaGithub size={50} color="#312e2e" />
            </button>
            <button className="border-secondary hover:bg-secondary/70 hover:text-background rounded-full border border-solid px-8 py-3 text-base font-medium duration-500 hover:scale-110 active:scale-95 ">
              view live
            </button>
          </div>
        </div> */}
      </motion.div>
    </section>
  );
};
export default Portfolio;
