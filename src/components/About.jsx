import React from "react";
import { FaCode, FaDatabase, FaTools, FaBrain, FaAward, FaRocket } from "react-icons/fa";
import shivanshu from "../../public/shivanshu.png"
function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 bg-gradient-to-b from-white via-blue-50/30 to-white rounded-2xl p-12"
    >
      <div>
        <h1 className="text-4xl font-bold mb-12 text-gray-900">About Me</h1>

        {/* Introduction with Image */}
        <div className="mb-12 grid md:grid-cols-2 gap-8 items-center">
          {/* Text */}
          <div className="p-8 bg-white rounded-xl border-2 border-blue-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <p className="text-gray-700 text-lg leading-relaxed">
              Hey! I'm <span className="font-semibold text-blue-600">Shivanshu Gupta</span>, a Web Developer passionate about building beautiful and functional web applications. I specialize in the <span className="font-semibold text-blue-600">MERN Stack</span> and love solving problems through clean code.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mt-4">
              I'm a <span className="font-semibold">quick learner</span> and <span className="font-semibold">problem solver</span> who thrives on turning ideas into reality. Let's build something amazing!
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative group">
              {/* Outer Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>

              {/* Shadow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-3xl blur-2xl opacity-30"></div>

              {/* Enhanced Border Frame */}
              <div className="absolute inset-0 rounded-3xl border-4 border-white shadow-2xl"></div>
              <div className="absolute inset-1 rounded-2xl border-2 border-blue-100"></div>

              {/* Image with Professional Styling */}
              <img
                src={shivanshu}
                alt="Shivanshu Gupta"
                className="relative rounded-3xl w-80 h-96 object-cover object-center border-4 border-transparent shadow-2xl group-hover:shadow-3xl group-hover:-translate-y-2 group-hover:scale-105 transition-all duration-300 brightness-110 contrast-125 saturate-110 filter drop-shadow-lg"
                style={{
                  filter: 'contrast(1.25) brightness(1.1) saturate(1.1) sharpen(1.2)',
                  imageRendering: 'crisp-edges'
                }}
              />
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <h1 className="text-3xl font-bold text-gray-900 mb-10">Technical Skills</h1>
        <div className="grid md:grid-cols-2 gap-8 mb-14">
          {/* Frontend */}
          <div className="p-6 bg-white rounded-xl border-2 border-blue-100 hover:border-blue-500 hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="flex items-center mb-4">
              <FaCode className="text-3xl text-blue-600 mr-3" />
              <h3 className="font-bold text-gray-900 text-xl">Frontend</h3>
            </div>
            <p className="text-gray-700">HTML, CSS, JavaScript, React.js, Tailwind CSS</p>
          </div>

          {/* Backend */}
          <div className="p-6 bg-white rounded-xl border-2 border-blue-100 hover:border-blue-500 hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="flex items-center mb-4">
              <FaRocket className="text-3xl text-blue-600 mr-3" />
              <h3 className="font-bold text-gray-900 text-xl">Backend</h3>
            </div>
            <p className="text-gray-700">Node.js, Express.js, REST APIs, JWT Authentication, CRUD operations, Form Validation</p>
          </div>

          {/* Databases */}
          <div className="p-6 bg-white rounded-xl border-2 border-blue-100 hover:border-blue-500 hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="flex items-center mb-4">
              <FaDatabase className="text-3xl text-blue-600 mr-3" />
              <h3 className="font-bold text-gray-900 text-xl">Databases</h3>
            </div>
            <p className="text-gray-700">MongoDB, MySQL</p>
          </div>

          {/* Other Languages */}
          <div className="p-6 bg-white rounded-xl border-2 border-blue-100 hover:border-blue-500 hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="flex items-center mb-4">
              <FaBrain className="text-3xl text-blue-600 mr-3" />
              <h3 className="font-bold text-gray-900 text-xl">Languages & DSA</h3>
            </div>
            <p className="text-gray-700">Python, Java, Data Structures & Algorithms</p>
          </div>

          {/* Tools */}
          <div className="p-6 bg-white rounded-xl border-2 border-blue-100 hover:border-blue-500 hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="flex items-center mb-4">
              <FaTools className="text-3xl text-blue-600 mr-3" />
              <h3 className="font-bold text-gray-900 text-xl">UI/UX & Modern Design</h3>
            </div>
            <p className="text-gray-700">
              Responsive interfaces, modern layouts, and user-friendly flows using Tailwind CSS, continuous design improvements, accessibility standards, and polished visual components.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl border-2 border-blue-100 hover:border-blue-500 hover:shadow-xl hover:scale-105 transition-all duration-300 md:col-span-2">
            <div className="flex items-center mb-4">
              <FaTools className="text-3xl text-blue-600 mr-3" />
              <h3 className="font-bold text-gray-900 text-xl">Tools & Strengths</h3>
            </div>
            <p className="text-gray-700">Git, VS Code, Postman | Quick Learner • Problem Solver • Clean Code</p>
          </div>
        </div>

        {/* Experience */}
        <h1 className="text-3xl font-bold text-gray-900 mb-10">My Journey</h1>
        <div className="space-y-8 mb-14">
          <div className="p-6 bg-white rounded-xl border border-blue-100 border-l-4 border-l-blue-600 shadow-md hover:shadow-lg transition-all duration-300">
            <p className="font-bold text-gray-900 text-lg">Full Stack Web Developer</p>
            <p className="text-gray-600 text-sm">2024 - Present | Freelance & Personal Projects</p>
            <p className="text-gray-700 mt-2">Building modern web applications with React and Node.js, focusing on performance and user experience.</p>
          </div>
        </div>

        {/* Mission */}
        <h1 className="text-3xl font-bold text-gray-900 mb-10">My Goal</h1>
        <div className="p-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl text-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-start">
            <FaAward className="text-3xl mr-4 flex-shrink-0 mt-1" />
            <p className="text-lg leading-relaxed">
              I want to create web solutions that matter. Every project is an opportunity to learn, improve, and deliver value. Let's collaborate and build something great together!
            </p>
          </div>
        </div>

        {/* Deployment */}
        <h1 className="text-3xl font-bold text-gray-900 mt-10 mb-8">Deployment</h1>
        <div className="p-6 bg-white rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow duration-300">
          <p className="text-gray-700 mb-2">This portfolio is deployed on the following platforms for performance, reliability, and easy updates:</p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Vercel - fast CI/CD deployment for frontend apps</li>
            <li>Render - production-ready static site hosting with global CDN</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
