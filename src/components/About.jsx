import React from "react";
import { FaCode, FaDatabase, FaTools, FaBrain, FaAward, FaRocket } from "react-icons/fa";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 rounded-3xl border border-slate-700/60 bg-slate-900/45 backdrop-blur-md p-8 md:p-12 shadow-[0_30px_80px_rgba(2,6,23,0.45)]"
    >
      <div>
        <h1 className="text-4xl font-bold mb-12 text-slate-100">About Me</h1>

        <div className="mb-12">
          <div className="p-8 bg-slate-900/90 rounded-xl border border-slate-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <p className="text-slate-300 text-lg leading-relaxed">
              Hey! I&apos;m <span className="font-semibold text-blue-400">Shivanshu Gupta</span>, a Web Developer passionate about building beautiful and functional web applications. I specialize in the <span className="font-semibold text-blue-400">MERN Stack</span> and love solving problems through clean code.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mt-4">
              I&apos;m currently preparing in <span className="font-semibold text-cyan-300">Generative AI</span> to build smarter applications alongside web development. I&apos;m a <span className="font-semibold">quick learner</span> and <span className="font-semibold">problem solver</span> who thrives on turning ideas into reality.
            </p>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-slate-100 mb-10">Technical Skills</h1>
        <div className="grid md:grid-cols-2 gap-8 mb-14">
          <div className="p-6 bg-slate-900/90 rounded-xl border border-slate-700 hover:border-blue-500 hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="flex items-center mb-4">
              <FaCode className="text-3xl text-blue-600 mr-3" />
              <h3 className="font-bold text-slate-100 text-xl">Frontend</h3>
            </div>
            <p className="text-slate-300">HTML, CSS, JavaScript, React.js, Tailwind CSS</p>
          </div>

          <div className="p-6 bg-slate-900/90 rounded-xl border border-slate-700 hover:border-blue-500 hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="flex items-center mb-4">
              <FaRocket className="text-3xl text-blue-600 mr-3" />
              <h3 className="font-bold text-slate-100 text-xl">Backend</h3>
            </div>
            <p className="text-slate-300">Node.js, Express.js, REST APIs, JWT Authentication, CRUD operations, Form Validation</p>
          </div>

          <div className="p-6 bg-slate-900/90 rounded-xl border border-slate-700 hover:border-blue-500 hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="flex items-center mb-4">
              <FaDatabase className="text-3xl text-blue-600 mr-3" />
              <h3 className="font-bold text-slate-100 text-xl">Databases</h3>
            </div>
            <p className="text-slate-300">MongoDB, MySQL</p>
          </div>

          <div className="p-6 bg-slate-900/90 rounded-xl border border-slate-700 hover:border-blue-500 hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="flex items-center mb-4">
              <FaBrain className="text-3xl text-blue-600 mr-3" />
              <h3 className="font-bold text-slate-100 text-xl">Languages & DSA</h3>
            </div>
            <p className="text-slate-300">Python, Java, Data Structures & Algorithms</p>
          </div>

          <div className="p-6 bg-slate-900/90 rounded-xl border border-slate-700 hover:border-blue-500 hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="flex items-center mb-4">
              <FaTools className="text-3xl text-blue-600 mr-3" />
              <h3 className="font-bold text-slate-100 text-xl">UI/UX & Modern Design</h3>
            </div>
            <p className="text-slate-300">
              Responsive interfaces, modern layouts, and user-friendly flows using Tailwind CSS, continuous design improvements, accessibility standards, and polished visual components.
            </p>
          </div>

          <div className="p-6 bg-slate-900/90 rounded-xl border border-slate-700 hover:border-blue-500 hover:shadow-xl hover:scale-105 transition-all duration-300 md:col-span-2">
            <div className="flex items-center mb-4">
              <FaTools className="text-3xl text-blue-600 mr-3" />
              <h3 className="font-bold text-slate-100 text-xl">Tools & Strengths</h3>
            </div>
            <p className="text-slate-300">Git, VS Code, Postman | Quick Learner | Problem Solver | Clean Code</p>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-slate-100 mb-10">My Journey</h1>
        <div className="space-y-8 mb-14">
          <div className="p-6 bg-slate-900/90 rounded-xl border border-slate-700 border-l-4 border-l-blue-600 shadow-md hover:shadow-lg transition-all duration-300">
            <p className="font-bold text-slate-100 text-lg">Full Stack Web Developer</p>
            <p className="text-slate-400 text-sm">2024 - Present | Freelance & Personal Projects</p>
            <p className="text-slate-300 mt-2">Building modern web applications with React and Node.js, focusing on performance and user experience.</p>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-slate-100 mb-10">My Goal</h1>
        <div className="p-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl text-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-start">
            <FaAward className="text-3xl mr-4 flex-shrink-0 mt-1" />
            <p className="text-lg leading-relaxed">
              I want to create web solutions that matter. Every project is an opportunity to learn, improve, and deliver value. Let&apos;s collaborate and build something great together!
            </p>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-slate-100 mt-10 mb-8">Deployment</h1>
        <div className="p-6 bg-slate-900/90 rounded-xl border border-slate-700 shadow-sm hover:shadow-md transition-shadow duration-300">
          <p className="text-slate-300 mb-2">This portfolio is deployed on the following platforms for performance, reliability, and easy updates:</p>
          <ul className="list-disc list-inside text-slate-300">
            <li>Vercel - fast CI/CD deployment for frontend apps</li>
            <li>Render - production-ready static site hosting with global CDN</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
