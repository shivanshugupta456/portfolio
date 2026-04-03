import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import java from "../../public/java.png";
import javascript from "../../public/javascript.png";
import oracle from "../../public/oracle.png";
import spring from "../../public/spring.png";
import springBoot from "../../public/springBoot.jpg";
function Experiance() {
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
      name="Experiance"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Experience & Skills</h1>
        <p className="text-gray-700 mb-6">
          I am a full-stack developer with strong hands-on experience building production-ready web applications. I enjoy solving real-world problems using clean architecture, effective dev workflows, and modern technologies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-6">
          <div className="bg-white border border-blue-100 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="font-semibold text-lg mb-2 text-blue-600">Core Strengths</h3>
            <ul className="text-gray-700 list-disc list-inside space-y-1">
              <li>Quick Learner</li>
              <li>Problem Solver</li>
              <li>Collaborative Team Player</li>
              <li>Clean and Maintainable Code</li>
            </ul>
          </div>

          <div className="bg-white border border-blue-100 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="font-semibold text-lg mb-2 text-blue-600">Web Technologies</h3>
            <p className="text-gray-700">HTML5, CSS3, JavaScript, React.js, Tailwind CSS</p>
          </div>

          <div className="bg-white border border-blue-100 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="font-semibold text-lg mb-2 text-blue-600">Backend & Database</h3>
            <p className="text-gray-700">Node.js, Express.js, MongoDB, MySQL, JWT</p>
          </div>

          <div className="bg-white border border-blue-100 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="font-semibold text-lg mb-2 text-blue-600">Project Work</h3>
            <p className="text-gray-700">
              Built and deployed Live Class, Employee Management System, To-Do App, and Myntra clone projects with responsive UI and APIs.
            </p>
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default Experiance;
