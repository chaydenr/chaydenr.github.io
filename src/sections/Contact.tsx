import GrainImage from "../assets/images/grain.jpg";
import OahuImage from "../assets/images/oahu-map.jpg";
import PeaceMemoji from "../assets/images/peace-memoji.png";
import ArrowUpRightIcon from "../assets/icons/arrow-up-right.svg";
import LinkedInLogo from "../assets/icons/linkedin.svg";
import GithubLogo from "../assets/icons/github-black.svg";

export const Contact = () => {
  return (
    <div id="contact" className="container px-0 overflow-hidden">
      <div className="flex justify-center pt-10 md:mt-20">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
          Contact me
        </p>
      </div>
      <div className="py-4 grid md:grid-cols-[320px_1fr] gap-6">
        <div className="bg-gray-800 rounded-3xl z-0 overflow-hidden after:z-10 relative after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none">
          <div
            className="absolute inset-0 -z-10 opacity-5"
            style={{
              backgroundImage: `url(${GrainImage})`,
            }}
          />

          <img
            src={OahuImage}
            alt="Oahu"
            className="h-full w-full object-cover"
          />

          <div className="absolute top-1/2 left-1/2 translate-x-[5%] translate-y-[50%] size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
            <img
              src={PeaceMemoji}
              alt="Peace Memoji"
              className="size-20 translate-x-[5px]"
            />
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 rounded-3xl p-6 md:p-8 flex flex-col justify-center">
          <h2 className="font-serif text-3xl md:text-5xl text-center">
            Let's work together!
          </h2>

          <p className="mt-4 text-center max-w-2xl mx-auto">
            Based in Honolulu, HI and open to work anywhere on O'ahu. Message me
            on LinkedIn or shoot me an e-mail, and check out my GitHub while
            you're here!
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button
              className="text-white bg-gray-900 inline-flex items-center h-12 px-4 rounded-xl gap-2"
              onClick={() =>
                (window.location.href = "mailto:richardson.chayden@gmail.com")
              }
            >
              <span className="font-semibold">E-mail Me</span>
              <ArrowUpRightIcon className="size-4" />
            </button>

            <button
              className=" h-12 w-12 flex items-center justify-center"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/chaydenr",
                  "_blank",
                  "noopener,noreferrer",
                )
              }
            >
              <LinkedInLogo />
            </button>

            <button
              className=" h-12 w-12 flex items-center justify-center"
              onClick={() =>
                window.open(
                  "https://github.com/chaydenr/",
                  "_blank",
                  "noopener,noreferrer",
                )
              }
            >
              <GithubLogo />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
