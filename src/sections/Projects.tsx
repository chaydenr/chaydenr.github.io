import northdaleLoansImage from "../assets/images/Northdale_Loans.png";
import toDoListImage from "../assets/images/To_Do_List.png";
import ArrowUpRightIcon from "../assets/icons/arrow-up-right.svg";
import GithubIcon from "../assets/icons/github.svg";
import GrainImage from "../assets/images/grain.jpg";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const Projects = () => {
  const [project, setProject] = useState(0);

  const portfolioProjects = [
    {
      name: "Northdale Loans",
      description:
        "A React-based loan paydown calculator for a fictional company that helps users visualize their loan repayment journey. Users are able to input their loan details and see a breakdown of their payments and interest, and compare different loan paydown strategies to determine the best approach for their financial goals.",
      link: "https://www.google.com",
      github: "https://www.github.com",
      languages: ["React", "TypeScript", "Chart.js", "SASS"],
      image: northdaleLoansImage,
    },
    {
      name: "Task Tracker",
      description:
        "A full-stack task management application built with a React frontend and C# backend that allows users to create, update, and track their daily tasks. The application features a user-friendly interface, enabling users to organize their tasks efficiently.",
      link: "https://www.google.com",
      github: "https://www.github.com",
      languages: ["React", "TypeScript", "C#"],
      image: toDoListImage,
    },
  ];

  const selectedProject = portfolioProjects[project];

  return (
    <div className="container p-0 bg-gray-900">
      <h2 className="font-serif text-3xl md:text-5xl text-center mt-10 md:mt-20">
        Personal Projects
      </h2>

      <div className="flex justify-center gap-4 mt-8 text-sm md:text-lg">
        <button
          onClick={() => setProject(0)}
          className={`px-4 py-2 rounded ${
            project === 0
              ? "bg-gradient-to-r from-emerald-300 to-sky-400 text-white font-semibold"
              : "bg-gray-800 text-white"
          }`}
        >
          Project 1
        </button>

        <button
          onClick={() => setProject(1)}
          className={`px-4 py-2 rounded ${
            project === 1
              ? "bg-gradient-to-r from-emerald-300 to-sky-400 text-white font-semibold"
              : "bg-gray-800 text-white"
          }`}
        >
          Project 2
        </button>
      </div>

      <div className="mt-10 md:mt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedProject.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-800 rounded-3xl z-0 overflow-hidden after:z-10 relative after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 after:pointer-events-none"
          >
            <div
              className="absolute inset-0 -z-10 opacity-5"
              style={{
                backgroundImage: `url(${GrainImage})`,
              }}
            ></div>
            <div className="lg:grid lg:grid-cols-2 lg:gap-15">
              <div className="lg:pb-16">
                <h3 className="font-serif text-2xl md:text-4xl">
                  {selectedProject.name}
                </h3>
                <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                <p className="gap-4 mt-4 md:mt-5 md:text-base text-white/50">
                  {selectedProject.description}
                </p>
                <div>
                  {selectedProject.languages.map((lang) => (
                    <div
                      className="inline-flex px-2 py-1 border border-white/15 rounded-full bg-white/10 backdrop-blur mr-2 mt-4 md:mt-5"
                      key={lang}
                    >
                      <span
                        key={lang}
                        className="tracking-widest font-semibold text-xs bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent"
                      >
                        {lang}
                      </span>
                    </div>
                  ))}
                </div>
                <a href={selectedProject.link}>
                  <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:mt-10 md:mr-5">
                    <span>View Project</span>
                    <ArrowUpRightIcon className="size-4" />
                  </button>
                </a>
                <a href={selectedProject.github}>
                  <button className="bg-gray-950 text-white h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-4 md:mt-5">
                    <span>View Source Code</span>
                    <GithubIcon className="size-4" />
                  </button>
                </a>
              </div>
              <div>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  className="mt-8 -mb-4 md:mt-10 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:ml-10"
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
