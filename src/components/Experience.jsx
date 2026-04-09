import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import java from "../../public/java.png";
import javascript from "../../public/javascript.png";
import oracle from "../../public/oracle.png";
import spring from "../../public/spring.png";
import springBoot from "../../public/springBoot.jpg";
function Experience() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "MongoDB",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: java,
      name: "Java",
    },
    {
      id: 4,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 5,
      logo: oracle,
      name: "Oracle",
    },
    {
      id: 6,
      logo: spring,
      name: "Spring",
    },
    {
      id: 7,
      logo: springBoot,
      name: "Spring Boot",
    },
  ];
  return (
    <div
      name="Experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-14 md:my-16"
    >
      <div className="rounded-[2rem] md:rounded-3xl border border-slate-700/60 bg-slate-900/45 backdrop-blur-md p-5 sm:p-6 md:p-8 shadow-[0_30px_80px_rgba(2,6,23,0.45)]">
        <h1 className="text-3xl font-bold mb-5 text-slate-100">Experience & Skills</h1>
        <p className="text-slate-300 mb-6">
          I bring hands-on experience building full-stack applications with a focus on clean architecture, reliable development workflows, and user-centered product execution.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 my-6">
          <div className="bg-slate-900/90 border border-slate-700 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="font-semibold text-lg mb-2 text-blue-600">Core Strengths</h3>
            <ul className="text-slate-300 list-disc list-inside space-y-1">
              <li>Quick Learner</li>
              <li>Problem Solver</li>
              <li>Collaborative Team Player</li>
              <li>Clean and Maintainable Code</li>
            </ul>
          </div>

          <div className="bg-slate-900/90 border border-slate-700 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="font-semibold text-lg mb-2 text-blue-600">Web Technologies</h3>
            <p className="text-slate-300">HTML5, CSS3, JavaScript, React.js, Tailwind CSS</p>
          </div>

          <div className="bg-slate-900/90 border border-slate-700 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="font-semibold text-lg mb-2 text-blue-600">Backend & Database</h3>
            <p className="text-slate-300">Node.js, Express.js, MongoDB, MySQL, JWT</p>
          </div>

          <div className="bg-slate-900/90 border border-slate-700 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="font-semibold text-lg mb-2 text-blue-600">Project Work</h3>
            <p className="text-slate-300">
              Built and deployed full-stack and frontend projects including Chat App, Employee Management System, To-Do App, and a Myntra clone with responsive interfaces and practical API integration.
            </p>
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default Experience;
