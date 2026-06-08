import { sectionHelper } from "../helpers";

export const Header = () => {
  return <div className="flex justify-center items-center fixed w-full z-10 top-3">
    <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blu cursor-pointer">
      <a className="nav-item" onClick={() => sectionHelper('home')}>Home</a>
      <a className="nav-item" onClick={() => sectionHelper('projects')}>Projects</a>
      <a className="nav-item" onClick={() => sectionHelper('contact')}>Contact</a>
      <a href="/Chayden_Richardson_Resume.pdf"
            download="Chayden_Richardson_Resume.pdf" className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">Resume</a>
    </nav>
    </div>;
};
