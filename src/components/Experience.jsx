import React from "react";
import { FaCode, FaRocket, FaDatabase, FaTools, FaChartLine, FaCheckCircle } from "react-icons/fa";

function Experience() {
  const skills = [
    {
      icon: FaCode,
      title: "Frontend Development",
      items: ["React.js", "Tailwind CSS", "Responsive Design", "State Management"],
      description: "Building polished, performant user interfaces with modern frameworks and clean code practices."
    },
    {
      icon: FaRocket,
      title: "Backend APIs",
      items: ["Node.js", "Express.js", "REST APIs", "JWT Auth"],
      description: "Designing scalable server-side solutions with secure authentication and efficient data handling."
    },
    {
      icon: FaDatabase,
      title: "Database Design",
      items: ["MongoDB", "MySQL", "Schema Design", "Query Optimization"],
      description: "Architecting robust database solutions with optimal performance and data integrity."
    },
    {
      icon: FaTools,
      title: "Development Tools",
      items: ["Git/GitHub", "VS Code", "Postman", "Vercel/Render"],
      description: "Using industry-standard tools for version control, debugging, API testing, and deployment."
    }
  ];

  const strengths = [
    { label: "Communication", value: 90 },
    { label: "Problem Solving", value: 88 },
    { label: "Code Quality", value: 92 },
    { label: "UI/UX Implementation", value: 85 },
    { label: "Performance Optimization", value: 86 },
    { label: "Full Stack Delivery", value: 89 }
  ];

  return (
    <div
      name="Experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-14 md:my-20"
    >
      <div className="rounded-[2rem] md:rounded-3xl border border-slate-700/60 bg-slate-900/45 backdrop-blur-md p-5 sm:p-6 md:p-8 shadow-[0_30px_80px_rgba(2,6,23,0.45)]">
        <h1 className="text-3xl md:text-4xl font-bold mb-3 text-slate-100">Experience & Skills</h1>
        <p className="text-slate-300 mb-8 md:mb-10">
          I bring hands-on experience building full-stack applications with a focus on clean architecture, reliable development workflows, and user-centered product execution.
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 mb-10 md:mb-12">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={index}
                className="group p-5 md:p-6 rounded-2xl border border-slate-700 bg-slate-900/90 shadow-sm hover:shadow-lg hover:border-blue-500/50 hover:-translate-y-1 transition-all duration-300"
              >
                <IconComponent className="text-3xl text-blue-600 mb-3 group-hover:text-cyan-400 transition-colors duration-300" />
                <h3 className="font-semibold text-lg mb-2 text-slate-100">{skill.title}</h3>
                <p className="text-slate-400 text-sm mb-3 leading-relaxed">{skill.description}</p>
                <ul className="space-y-1">
                  {skill.items.map((item, i) => (
                    <li key={i} className="text-slate-300 text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Strengths & Competencies */}
        <div className="mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-6">Core Competencies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {strengths.map((strength, index) => (
              <div key={index} className="p-4 md:p-5 rounded-xl border border-slate-700 bg-slate-950/40 hover:bg-slate-950/60 transition-all duration-300">
                <div className="flex justify-between items-center mb-2">
                  <p className="font-semibold text-slate-100 text-sm md:text-base">{strength.label}</p>
                  <span className="text-cyan-400 font-bold text-sm">{strength.value}%</span>
                </div>
                <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-500"
                    style={{ width: `${strength.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Journey Timeline */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-6">Professional Journey</h2>
          <div className="space-y-4 md:space-y-5">
            <div className="p-5 md:p-6 bg-slate-900/90 rounded-2xl border border-slate-700 border-l-4 border-l-cyan-400 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-3 md:gap-4">
                <FaCheckCircle className="text-cyan-400 mt-1 flex-shrink-0 text-lg md:text-xl" />
                <div className="min-w-0">
                  <p className="font-bold text-slate-100 text-base md:text-lg">Full Stack Developer</p>
                  <p className="text-slate-400 text-xs md:text-sm">2024 - Present | Personal Projects</p>
                  <p className="text-slate-300 text-sm md:text-base mt-2 leading-relaxed">
                    Built and improved full-stack web applications using React.js, Node.js, Express.js, and MongoDB, with attention to responsive design, practical functionality, and clean user experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 md:p-6 bg-slate-900/90 rounded-2xl border border-slate-700 border-l-4 border-l-blue-500 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-3 md:gap-4">
                <FaCheckCircle className="text-blue-500 mt-1 flex-shrink-0 text-lg md:text-xl" />
                <div className="min-w-0">
                  <p className="font-bold text-slate-100 text-base md:text-lg">DSA & Problem Solving</p>
                  <p className="text-slate-400 text-xs md:text-sm">2023 - Present | Continuous Learning</p>
                  <p className="text-slate-300 text-sm md:text-base mt-2 leading-relaxed">
                    Completed Alpha Course by Shraddha Khapra, solved 100+ algorithmic problems, and progressed through advanced data structures and system design concepts using Java and Python.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 md:p-6 bg-slate-900/90 rounded-2xl border border-slate-700 border-l-4 border-l-emerald-500 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-3 md:gap-4">
                <FaCheckCircle className="text-emerald-500 mt-1 flex-shrink-0 text-lg md:text-xl" />
                <div className="min-w-0">
                  <p className="font-bold text-slate-100 text-base md:text-lg">Currently Pursuing</p>
                  <p className="text-slate-400 text-xs md:text-sm">2023 - 2027 | B.Tech CSE, ACE College</p>
                  <p className="text-slate-300 text-sm md:text-base mt-2 leading-relaxed">
                    Pursuing Bachelor of Technology in Computer Science & Engineering with focus on web development, algorithms, and software engineering principles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Achievements */}
        <div className="mt-10 md:mt-12 p-5 md:p-8 rounded-2xl bg-gradient-to-r from-blue-600/10 to-cyan-600/10 border border-slate-700 shadow-md">
          <h3 className="text-xl md:text-2xl font-bold text-slate-100 mb-4 flex items-center gap-2">
            <FaChartLine className="text-cyan-400" />
            Key Achievements
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            <li className="flex items-start gap-3 text-slate-300 text-sm md:text-base">
              <span className="text-cyan-400 font-bold mt-0.5">✓</span>
              <span>4 deployed full-stack applications on production</span>
            </li>
            <li className="flex items-start gap-3 text-slate-300 text-sm md:text-base">
              <span className="text-cyan-400 font-bold mt-0.5">✓</span>
              <span>Built several full-stack projects across frontend, backend, and UI implementation</span>
            </li>
            <li className="flex items-start gap-3 text-slate-300 text-sm md:text-base">
              <span className="text-cyan-400 font-bold mt-0.5">✓</span>
              <span>100+ DSA problems on leetcode</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;
