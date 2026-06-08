import { Fragment } from "react/jsx-runtime";

export const SkillsBanner = () => {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Git",
    "Figma",
    "Python",
    "C#",
    "SQL",
    "AWS",
  ];

  return (
    <div>
      <div className="bg-gradient-to-l from-emerald-300 to-sky-400 height-[200px] h-[2px]" />
      <div className="flex gap-10 py-[15px] bg-slate-950 items-center">
        <div className="absolute z-10">
          <div className="w-1 bg-slate-950" />
          <code className="text-4xl text-[#8DAFCB]">[</code>
        </div>

        <div className="absolute right-0 z-10">
          <code className="text-4xl text-[#8DAFCB]">]</code>
          <div className="w-1 bg-slate-950" />
        </div>
        <div className="[mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)] overflow-x-hidden">
          <div className="inline-flex px-10 gap-10 animate-move-left ">
            {[...new Array(2)].fill(0).map((_, i) => (
              <Fragment key={i}>
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="uppercase items-center text-[#8DAFCB]"
                  >
                    <code className="text-xl">"{skill}",</code>
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 height-[200px] h-[2px]" />
    </div>
  );
};
